import React, { useState, useEffect } from 'react'
import { Grid, Card, Button, TextField } from '@mui/material';
import axios from 'axios';
import Modal from "react-modal";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Wordcloud from '../Charts/Wordcloud';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import noresult from '../../Images/noresult.gif';
import Swal from 'sweetalert2'
const Electronics = () => {

  const [AppliancesList, setAppliancesList] = useState([]);
  const [AudioList, setAudioList] = useState([]);
  const [LaptopsandDesktopsList, setLaptopsandDesktopsList] = useState([]);
  const [PersonalCareList, setPersonalCareList] = useState([]);
  const [StorageList, setStorageList] = useState([]);
  const [CamerasList, setCamerasList] = useState([]);
  const [currentPost, setcurrentPost] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [Avail, setAvail] = useState(true);
  const [ProductList, setProductList] = useState([]);
  const [BrandName, setBrandName] = useState("");
  const [BrandList, setBrandList] = useState([]);

  useEffect(() => {
    loadlist();
    loadAppliances();
    loadStorage();
    loadCameras();
    loadPersonalCare();
    loadLaptopsandDesktops();
    loadAudio();
  }, []);



  const loadAppliances = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Appliances"] }
      }
    )
      .then(function (response) {
        setAppliancesList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadlist = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics"] }
      }
    )
      .then(function (response) {
        setProductList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const loadAudio = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Audio"] }
      }
    )
      .then(function (response) {
        setAudioList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadLaptopsandDesktops = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Laptops and Desktops"] }
      }
    )
      .then(function (response) {
        setLaptopsandDesktopsList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadPersonalCare = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Personal Care"] }
      }
    )
      .then(function (response) {
        setPersonalCareList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadStorage = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Storage"] }
      }
    )
      .then(function (response) {
        setStorageList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadCameras = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "Cameras"] }
      }
    )
      .then(function (response) {
        setCamerasList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const loadBrandList = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Electronics", "", BrandName] }
      }
    )
      .then(function (response) {
        setBrandList(response.data);
        setAvail(response.data.length)
      })
      .catch(function (error) {
        if (error.response.status == 404) {
          Swal.fire(
            error.response.data.failure,
            'Please try again !',
            'error'
          )
        }
      });
  }
  const subcategory = [
    {
      name: "Appliances", align: "left", style: "fashioninner", font: "4rem", pad: "7.5vh", card: "#f0f0f0"
    },
    {
      name: "Audio", align: "right", style: "mobileinner", font: "4rem", pad: "6vh", card: "#f6f6f2"
    },
    {
      name: "Laptops & Desktops", align: "left", style: "electronicsinner", font: "3.5rem", pad: "5vh", card: "#f0f0f0"
    },
    {
      name: "Personal Care", align: "right", style: "homeinner", font: "4rem", pad: "5vh", card: "#f0f0f0"
    },
    {
      name: "Storage", align: "left", style: "travelinner", font: "5rem", pad: "5vh", card: "#dde7f1"
    },
    {
      name: "Cameras", align: "right", style: "groceryinner", font: "4rem", pad: "7vh", card: "#f1f1f1"
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function details(id) {
    setcurrentPost(id);
    console.log(id);
  }
  function handleOpen() {
    setModalOpen(true);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "#f0f0f0", boxShadow: "none", height: "53vh" }}>
          </Card>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "3vh", padding: " 0vh 0vh" }}>
          <Grid item xs={12}>
            <Grid container spacing={2}
              style={{ textDecoration: "none" }}>
              <Grid item xs={2}>
                <a href="#Appliances" className='fashioninner' style={{ color: "black" }}>
                  <div style={{ fontSize: "3rem", marginTop: "1.2vh" }}>Appliances</div>
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="#Audio" className='mobileinner' style={{ color: "black" }}>
                  <div style={{ fontSize: "2.2rem", marginTop: "1.2vh" }}>Audio</div>
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href="#Laptops & Desktops" className='electronicsinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "2vh", fontSize: "1.5rem" }}>Laptops & Desktops</div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#Ethnic Wear" className='homeinner' style={{ color: "black" }}>
                  <div>Personal Care</div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#Storage" className='travelinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "-1vh" }}>Storage</div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#Cameras" className='groceryinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "1vh", fontSize: "2rem" }}>Cameras</div>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={5}></Grid>
              <Grid item xs={7}>
                <TextField
                  placeholder='Search products from your Trending Fashion Brand'
                  required
                  variant="outlined"
                  name="brand"
                  value={BrandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  sx={{ width: "70vh", height: "5vh", backgroundColor: "transparent", color: "white", marginBottom: "2vh" }}
                />
                <Button onClick={loadBrandList}
                  sx={{
                    color: "black", fontWeight: "700", backgroundColor: "#E2C091", fontSize: "1rem", marginLeft: "5vh", marginTop: "1vh",
                    "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                  }}
                  className="btn">Search</Button>
              </Grid>
            </Grid>
          </Grid>
          {BrandName ?
            <>
              {Avail != 0 ?
                <>
                  {BrandList.map((item) => {
                    return (
                      <Grid item xs={12} sm={3} md={3}>
                        <Card sx={{
                          boxShadow: "none", height: "53vh",
                          "&:hover": { backgroundColor: "#ead3d8" }
                        }} >
                          <Grid container >
                            <Grid item xs={12} style={{
                              height: "35vh",
                              backgroundColor: "white", border: "1px solid #ead3d8", padding: "0.5vh",
                            }}>
                              <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                style={{ height: "32vh", padding: " 0vh 0vh" }} />
                            </Grid>
                            <Grid item xs={12}
                              style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                              {item.name}
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container>
                                <Grid item xs={6}>
                                  <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                    {item.discount ?
                                      <>
                                        <Grid item xs={12}
                                          style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                        >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                        </Grid>
                                      </>
                                      : <>
                                        <Grid item xs={12}
                                          style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                        >Rs. {item.price}
                                        </Grid>
                                      </>}
                                    <Grid item xs={12}
                                      style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                    ><i>In stock : {item.stock}</i>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                  <Button
                                    onClick={() => { handleOpen(); details(item.id); }}
                                    sx={{
                                      color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                      "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                    }}
                                    className="btn">
                                    KNOW MORE
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    )
                  })}
                </>
                : <>
                  <Grid container spacing={2} padding={3} style={{ backgroundColor: "white", marginLeft: "5vh", marginTop: "5vh" }}>
                    <Grid item xs={12}>
                      <img src={noresult} />
                    </Grid>
                  </Grid>
                </>}
            </> :
            <>
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "5rem", padding: "7.5vh" }} className="fashioninner">
                            Appliances
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {AppliancesList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              {/*Audio*/}
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "4rem", padding: "6.3vh" }} className="mobileinner">
                            Audio
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {AudioList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              {/*Laptops & Desktops*/}
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{
                            backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "2rem", padding: "8.5vh 0vh",
                            marginTop: "2vh"
                          }} className="electricalinner">
                            Laptops & Desktops
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {LaptopsandDesktopsList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              {/*Personal Care wear*/}
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "4rem", padding: "5vh" }} className="homeinner">
                            Personal Care
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {PersonalCareList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              {/*Storage*/}
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "5rem", padding: "5vh" }} className="travelinner">
                            Storage
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {StorageList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
              {/*Cameras*/}
              <Grid item xs={12} style={{ overflowY: "hidden", marginBottom: "5vh", overflowX: "hidden" }}>
                <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12}>
                      <Grid container spacing={2} style={{ marginTop: "5vh" }}>
                        <Grid item xs={4} style={{ textAlign: "right", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                        <Grid item xs={4}>
                          <Card sx={{
                            backgroundColor: "#f0f0f0", boxShadow: "none", fontSize: "3.7rem", padding: "7vh",
                            marginTop: "2vh"
                          }} className="groceryinner">
                            Cameras
                          </Card>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", marginTop: "2vh" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    {CamerasList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f0f0f0", padding: "0.5vh",
                              }}>
                                <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                                  style={{ height: "32vh", padding: " 0vh 0vh" }} />
                              </Grid>
                              <Grid item xs={12}
                                style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                                {item.name}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                      {item.discount ?
                                        <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                          </Grid>
                                        </>
                                        : <>
                                          <Grid item xs={12}
                                            style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                          >Rs. {item.price}
                                          </Grid>
                                        </>}
                                      <Grid item xs={12}
                                        style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                      ><i>In stock : {item.stock}</i>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                    <Button
                                      onClick={() => { handleOpen(); details(item.id); }}
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      KNOW MORE
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
            </>
          }
        </Grid>
        <Modal isOpen={ModalOpen}
          style={{
            content: {
              backgroundColor: "#f0f0f0"
            }
          }}>
          {ProductList.map((item) => {
            return (
              (item.id == currentPost) ?
                <>
                  <Grid container spacing={2} padding={2}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}
                          style={{
                            backgroundColor: "transparent",
                            height: "45vh", marginTop: "3vh", borderRadius: "5vh", justifyContent: "left",
                          }}><Grid container spacing={2} style={{ borderRadius: "10vh" }}>

                            <Grid item xs={4} >
                              <img src={"https://flipkart-grid.herokuapp.com" + item.image} style={{ height: "40vh" }} />
                            </Grid>
                            <Grid item xs={4}></Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                          <Grid container >
                            <Grid item xs={9}>{item.name}</Grid>
                            <Grid item xs={3} style={{ marginTop: "2vh", paddingLeft: "3vh" }}>
                              <Grid container spacing={2} style={{
                                backgroundColor: "#E2C091", height: "5vh",
                                borderRadius: "5px", fontSize: "1rem"
                              }}>
                                <Grid item xs={12} style={{ marginTop: "-1.5vh", textAlign: "left", }}>
                                  {item.stock} items in stock
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ fontSize: "1rem" }}>{item.description}</Grid>
                        <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                          <Grid container spacing={1}>
                            {item.discount ?
                              <>
                                <Grid item xs={7} style={{ textAlign: "left", fontSize: "1.1rem" }}><i>Deal of the day &nbsp;&nbsp;&nbsp;</i>
                                  <span style={{
                                    fontSize: "1.1rem", fontWeight: "600", backgroundColor: "#e2c091", padding: "1vh 2vh", border: "2px solid black",
                                    borderRadius: "5px"
                                  }}>₹{item.offer_price}</span>
                                  <span style={{
                                    fontSize: "1.1rem", fontWeight: "600", backgroundColor: "transparent", padding: "1vh 2vh", border: "2px solid black",
                                    borderRadius: "5px", marginLeft: "3vh"
                                  }}><s>₹{item.price}</s></span>
                                </Grid>
                                <Grid item xs={4} style={{ marginLeft: "5vh" }}>
                                  <a href={item.url} style={{ textDecoration: "none" }}>
                                    <Button
                                      sx={{
                                        color: "black", border: "2px solid black", fontWeight: "600", height: "5vh", marginLeft: "10vh"
                                        , "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                      }}
                                      className="btn">
                                      BUY NOW
                                    </Button>
                                  </a>
                                </Grid>
                              </>
                              : <>
                                <Grid item xs={12} style={{ textAlign: "left", fontSize: "1.1rem" }}><i>Deal of the day &nbsp;&nbsp;&nbsp;</i>
                                  <span style={{
                                    fontSize: "1.1rem", fontWeight: "600", backgroundColor: "#e2c091", padding: "1vh 2vh", border: "2px solid black",
                                    borderRadius: "5px"
                                  }}>₹{item.price}</span></Grid>
                              </>}
                          </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ margin: "4vh 0vh 0vh 0vh", fontSize: "1rem", fontWeight: "600" }}>
                          <Grid container spacing={5}>
                            <Grid item xs={6}>
                              <Grid container spacing={2} style={{
                                height: "5vh",
                                borderRadius: "5px", border: "2px solid #E2C091"
                              }}>
                                <Grid item xs={12} style={{ marginTop: "-1.5vh", textAlign: "center", marginLeft: "-2vh", fontSize: "1rem", msOverflowY: "hidden" }}>
                                  {item.brand.name}
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container spacing={2} style={{
                                height: "5vh",
                                borderRadius: "5px"
                              }}>
                                <Grid item xs={6}>
                                  <Grid container spacing={1}>
                                    <Grid item xs={2} style={{ marginTop: "-2vh" }}><GradeIcon style={{ marginLeft: "3vh" }} /></Grid>
                                    <Grid item xs={10} style={{ marginTop: "-1.6vh", textAlign: "right" }}>
                                      {item.rating} points
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                  <Grid container spacing={1}>
                                    <Grid item xs={2} style={{ marginTop: "-2vh" }}><RemoveRedEyeIcon style={{ marginLeft: "1.7vh" }} /></Grid>
                                    <Grid item xs={10} style={{ marginTop: "-1.7vh", textAlign: "center" }}>
                                      {item.viewers} views
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} style={{ marginTop: "8vh", paddingLeft: "5vh" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} style={{ textAlign: "left" }}>
                          <Grid container spacing={2}>
                            <Grid item xs={11} >
                              <Grid container >
                                <Grid item xs={12} style={{ paddingLeft: "10vh", marginTop: "-5vh" }}>
                                  <Wordcloud />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={1} style={{ marginTop: "-10vh" }}>
                              <CloseIcon style={{ color: "black", marginLeft: "12vh" }} onClick={() => setModalOpen(false)} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
                : <>
                </>
            )
          })}
        </Modal>
      </Grid>
    </div>
  )
}

export default Electronics