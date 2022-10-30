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
const Grocery = () => {

  const [FruitsandVegetablesList, setFruitsandVegetablesList] = useState([]);
  const [DairyList, setDairyList] = useState([]);
  const [HouseholdCareList, setHouseholdCareList] = useState([]);
  const [StaplesList, setStaplesList] = useState([]);
  const [PackagedFoodList, setPackagedFoodList] = useState([]);
  const [HomeandKitchenList, setHomeandKitchenList] = useState([]);
  const [currentPost, setcurrentPost] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [Avail, setAvail] = useState(true);
  const [ProductList, setProductList] = useState([]);
  const [BrandName, setBrandName] = useState("");
  const [BrandList, setBrandList] = useState([]);

  useEffect(() => {
    loadlist();
    loadFruitsandVegetables();
    loadPackagedFood();
    loadHomeandKitchen();
    loadStaples();
    loadHouseholdCare();
    loadDairy();
  }, []);



  const loadFruitsandVegetables = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Fruits and Vegetables"] }
      }
    )
      .then(function (response) {
        setFruitsandVegetablesList(response.data);
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
        data: { "filter": ["Grocery"] }
      }
    )
      .then(function (response) {
        setProductList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const loadDairy = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Dairy"] }
      }
    )
      .then(function (response) {
        setDairyList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadHouseholdCare = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Household Care"] }
      }
    )
      .then(function (response) {
        setHouseholdCareList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadStaples = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Staples"] }
      }
    )
      .then(function (response) {
        setStaplesList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadPackagedFood = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Packaged Food"] }
      }
    )
      .then(function (response) {
        setPackagedFoodList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadHomeandKitchen = async (e) => {

    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Grocery", "Home and Kitchen"] }
      }
    )
      .then(function (response) {
        setHomeandKitchenList(response.data);
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
        data: { "filter": ["Grocery", "", BrandName] }
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
      name: "Fruits & Vegetables", align: "left", style: "fashioninner", font: "4rem", pad: "7.5vh", card: "#f1f1f1"
    },
    {
      name: "Dairy", align: "right", style: "mobileinner", font: "4rem", pad: "6vh", card: "#f6f6f2"
    },
    {
      name: "Household Care", align: "left", style: "electronicsinner", font: "3.5rem", pad: "5vh", card: "#f0f0f0"
    },
    {
      name: "Staples", align: "right", style: "homeinner", font: "4rem", pad: "5vh", card: "#f8e6d8"
    },
    {
      name: "PackagedFood", align: "left", style: "travelinner", font: "5rem", pad: "5vh", card: "#dde7f1"
    },
    {
      name: "HomeandKitchen", align: "right", style: "groceryinner", font: "4rem", pad: "7vh", card: "#f1f1f1"
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
          <Card style={{ backgroundColor: "#f1f1f1", boxShadow: "none", height: "53vh" }}>
          </Card>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "3vh", padding: " 0vh 0vh" }}>
          <Grid item xs={12}>
            <Grid container spacing={2}
              style={{ textDecoration: "none" }}>
              <Grid item xs={3}>
                <a href="#Fruits and Vegetables" className='fashioninner' style={{ color: "black" }}>
                  <div style={{ fontSize: "3rem", marginTop: "1.2vh" }}>Fruits & Vegetables</div>
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="#Dairy" className='mobileinner' style={{ color: "black" }}>
                  <div style={{ fontSize: "2.2rem", marginTop: "1.2vh" }}>Dairy</div>
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href="#Household Care" className='electronicsinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "2vh", fontSize: "1.7rem" }}>Household Care</div>
                </a>
              </Grid>
              <Grid item xs={1}>
                <a href="#Ethnic Wear" className='homeinner' style={{ color: "black" }}>
                  <div>Staples</div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#PackagedFood" className='travelinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "0.8vh", fontSize: "2.4rem" }}>PackagedFood</div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="#HomeandKitchen" className='groceryinner' style={{ color: "black" }}>
                  <div style={{ marginTop: "2.5vh", fontSize: "1.4rem" }}>Home & Kitchen</div>
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "3.2rem", padding: "8.1vh", marginTop: "2vh" }} className="fashioninner">
                            Fruits & Vegetables
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
                    {FruitsandVegetablesList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              {/*Dairy*/}
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "4rem", padding: "6.3vh" }} className="mobileinner">
                            Dairy Products
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
                    {DairyList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              {/*Household Care*/}
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "2.5rem", padding: "6vh" }} className="electricalinner">
                            Household Care
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
                    {HouseholdCareList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              {/*Staples wear*/}
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "4rem", padding: "5vh" }} className="homeinner">
                            Staples
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
                    {StaplesList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              {/*PackagedFood*/}
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "4rem", padding: "6.7vh" }} className="travelinner">
                            Packaged Food
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
                    {PackagedFoodList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              {/*Home & Kitchen*/}
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
                          <Card sx={{ backgroundColor: "#f1f1f1", boxShadow: "none", fontSize: "2rem", padding: "10.5vh" }} className="groceryinner">
                            Home & Kitchen
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
                    {HomeandKitchenList.map((item) => {
                      return (
                        <Grid item xs={12} sm={3} md={3}>
                          <Card sx={{
                            boxShadow: "none", height: "53vh",
                            "&:hover": { backgroundColor: "#f1f1f1" }
                          }} >
                            <Grid container >
                              <Grid item xs={12} style={{
                                height: "35vh",
                                backgroundColor: "white", border: "1px solid #f1f1f1", padding: "0.5vh",
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
              backgroundColor: "#f1f1f1"
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

export default Grocery