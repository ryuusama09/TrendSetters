import React, { useEffect, useState, useCallback } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Grid, Card, Button, TextField } from '@mui/material'
import wallpaper from '../../Images/wallpaper.jpg';
import wallpaper2 from '../../Images/wallpaper2.jpg'
import wallpaper3 from '../../Images/wallpaper3.jpg'
import Slider from "react-slick";
import Fashion from "../../Images/fashion.jpg";
import Mobile from "../../Images/mobile.jpg";
import Electronics from "../../Images/electronics.jpg";
import Home from "../../Images/home.jpg";
import Travel from "../../Images/travel.jpg";
import Grocery from "../../Images/grocery.jpg";
import Modal from "react-modal";
import fashionlogo from "../../Images/fashionlogo.jpg";
import mobilelogo from "../../Images/mobilelogo.jpg";
import electronicslogo from "../../Images/electronicslogo.jpg";
import homelogo from "../../Images/homelogo.jpg";
import travellogo from "../../Images/travellogo.png";
import grocerylogo from "../../Images/grocerylogo.webp";
import trend1 from '../../Images/trend1.jpg';
import trend2 from '../../Images/trend2.jpg';
import trend3 from '../../Images/trend3.webp';
import trend4 from '../../Images/trend4.JPG';
import trend5 from '../../Images/trend5.jpg';
import trend6 from '../../Images/trend6.jpg';
import '../ChatBot/Navbar.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

const Trends = () => {

  const [ModalOpen, setModalOpen] = useState(false);
  const [currentPost, setcurrentPost] = useState("");
  const [Image, setImage] = useState(null);
  const [cardcolor, setcardcolor] = useState("");
  const [trends, setTrends] = useState([]);
  const [trendsa, setTrendsa] = useState([]);
  const [trendsb, setTrendsb] = useState([]);
  const [trendsc, setTrendsc] = useState([]);
  const [trendsd, setTrendsd] = useState([]);
  const [trendse, setTrendse] = useState([]);
  var hero = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }
  const loops = [1, 2, 3, 4, 5, 6];
  const wallp = [wallpaper, wallpaper3, wallpaper2];

  function details(id, color) {
    setcurrentPost(id);
    setcardcolor(color);
    console.log(id, color);
  }
  function handleOpen() {
    setModalOpen(true);
  }

  useEffect(() => {
    loadList();
    loadLista();
    loadListb();
    loadListc();
    loadListd();
    loadListe();
  }, []);

  const loadList = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrends(response.data.Fashion);
        console.log(response.data.Fashion)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadLista = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrendsa(response.data.Mobiles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadListb = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrendsb(response.data.Electronics);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadListc = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrendsc(response.data.Home);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadListd = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrendsd(response.data.Travel);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const loadListe = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/top',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(function (response) {
        setTrendse(response.data.Grocery);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  const social = [
    { name: "FACEBOOK", color: "#023e84" },
    { name: "INSTAGRAM", color: "#db224e" },
    { name: "SNAPCHAT", color: "#ffc424" },
    { name: "TWITTER", color: "#4fcbe9" },
    { name: "YOUTUBE", color: "red" },
  ];
  const category = [
    {
      name: Fashion, x: "1", id: "Fashion", align: "left", color: "#f2f2f2",
      card: "#ead3d8", stylename: "fashionhead", font: "6rem", y: "5", logo: fashionlogo, imagename: trend1
    },
    {
      name: Mobile, x: "2", id: "Mobile", align: "right", color: "#fefefe",
      card: "#f6f6f2", stylename: "mobilehead", font: "5rem", y: "6", logo: mobilelogo, imagename: trend2
    },
    {
      name: Electronics, x: "3", id: "Electronics", align: "left", color: "#f0f0f0",
      card: "#f0f0f0", stylename: "elchead", font: "3rem", y: "1", logo: electronicslogo, imagename: trend3
    },
    {
      name: Home, x: "4", id: "Home Decor", align: "right", color: "#f3f3f3",
      card: "#f8e6d8", stylename: "btnstyle", font: "4.5rem", y: "2", logo: homelogo, imagename: trend4
    },
    {
      name: Travel, x: "5", id: "Travel", align: "left", color: "#ffffff",
      card: "#dde7f1", stylename: "mobilehead", font: "5rem", y: "3", logo: travellogo, imagename: trend5
    },
    {
      name: Grocery, x: "6", id: "Grocery", align: "right", color: "#f1f1f1",
      card: "#f1f1f1", stylename: "btn", font: "5rem", y: "4", logo: grocerylogo, imagename: trend6
    },
  ]
  return (
    <div >
      <Grid container style={{ overflowX: "hidden" }}>
        {/*hero*/}
        <Grid item xs={12}>
          <Slider {...hero}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{
                      marginTop: "8vh", height: '70vh', backgroundImage: `url(${item})`,
                      backgroundSize: 'cover', backgroundPositionY: "40%"
                    }}>
                      <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item sm={4} xs={6} md={4}
                          style={{
                            backgroundColor: "white", marginTop: "15vh", height: "50vh",
                            borderTop: "10px solid #023e84"
                          }}>
                          <Grid container spacing={2} >
                            <Grid item xs={12} style={{ fontSize: "2.5rem", textAlign: "left", color: "#023e84", fontWeight: "600" }} data-aos="fade-left">
                              ALWAYS BE IN <br />TREND WITH US  </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left", color: "#023e84" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>
                </div>
              )
            })}
          </Slider>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: "5vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={7} style={{fontSize:"1.2rem" , fontWeight:"650" , marginTop:"3vh"}}>
                  Upload and Search now for the Trendiest Products you saw today on Flipkart
              </Grid>
              <Grid item xs={5}>
                <Grid container >
                  <Grid item xs={8}>
                    <TextField
                      type="file"
                      required
                      variant="outlined"
                      name="image"
                      helperText="Add any images to search"
                      onChange={(e) => setImage(e.target.files[0])}
                      sx={{ backgroundColor: "transparent", color: "white" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button //onClick={loadBrandList}
                      sx={{
                        color: "black", fontWeight: "700", backgroundColor: "#E2C091", marginLeft: "-15vh", fontSize: "1rem", marginTop: "1vh",
                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                      }}
                      className="btn">Search</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*category*/}
        <Grid container spacing={2} padding={2} paddingTop={5}>
          <Grid item sm={5} md={5} xs={12}>
            <Card sx={{ backgroundColor: "#ead3d8", height: "35vh", boxShadow: "none" }}>
              <Grid container xs={12}>
                <Grid item xs={12} style={{
                  fontSize: "8rem", marginTop: "5vh", textAlign: "left",
                  marginLeft: "5vh"
                }} className="fashionhead">
                  FASHION
                </Grid>
                <Grid item xs={12} style={{ textAlign: "right", marginRight: "2vh", marginTop: "2vh" }}>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "black", border: "2px solid black", fontWeight: "600",
                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                      }}
                      className="btn">LEARN MORE</Button>
                  </Link>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={7} md={7} >
            <Card sx={{ backgroundColor: "#fefefe", height: "35vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={6} >
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2} style={{ textAlign: "Right", marginRight: "10vh" }}>
                    <Grid item xs={12} style={{ fontSize: "4rem" }} className="mobilehead">
                      <div>Mobile</div>
                    </Grid>
                    <Grid item xs={12}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Mobile" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f0f0f0", height: "35vh", boxShadow: "none" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ fontSize: "3.2rem", marginLeft: "1vh", marginTop: "2vh" }}
                  className="elchead">
                  Electronic Appliances
                </Grid>
                <Grid item xs={12}>
                  <a href="#Electronics" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "black", border: "2px solid black", fontWeight: "600",
                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                      }}
                      className="btn">LEARN MORE</Button>
                  </a>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f8f8f8", height: "35vh", boxShadow: "none", fontSize: "3rem" }}>
              <Grid container>
                <Grid item xs={12} style={{ zIndex: "10" , marginTop:"10vh" , fontWeight:"650" , letterSpacing:"1.5px"}}>
                  TRENDSETTERS
                </Grid>
                <Grid item xs={12} style={{  marginTop: "-8.7vh", marginLeft: "1.2vh", color: "#E2C091" , 
                fontWeight:"800" ,letterSpacing:"1.5px" }}>
                  TRENDSETTERS
                </Grid>
                <Grid item xs={12} style={{fontSize:"2rem"}} className="mobilehead">
                  be in trend with us
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f8e6d8", height: "35vh", boxShadow: "none" }}>
              <Grid container xs={12}>
                <Grid item xs={12} style={{ padding: "12vh 3vh" }}>
                  <a href="#Home Decor" style={{ textDecoration: "none" }}>
                    <Button sx={{
                      color: "black", fontSize: "3rem",
                      fontWeight: "600", paddingLeft: "2vh",
                      "&:hover": { backgroundColor: "transparent" }
                    }}><div className='btnstyle'>HOME  DECOR</div></Button>
                  </a>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <Card sx={{ backgroundColor: "#dde7f1", height: "40vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={6}>
                  <Grid container spacing={2} style={{ textAlign: "left", marginLeft: "1vh" }}>
                    <Grid item xs={12} style={{ fontSize: "4rem" }} className="mobilehead">
                      <div>Travel</div>
                    </Grid>
                    <Grid item xs={12}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Travel" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <Card sx={{ backgroundColor: "#f1f1f1", height: "40vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={2} style={{ textAlign: "right", marginRight: "10vh", marginTop: "2vh" }}>
                    <Grid item xs={12} style={{ fontSize: "3rem", fontWeight: "600" }}>
                      <div>Grocery</div>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Grocery" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ fontSize: "2.7rem", zIndex: "10" }}>
          Our Top Daily Trending Products
        </Grid>
        <Grid item xs={12} style={{ fontSize: "2.7rem", marginTop: "-8.7vh", marginLeft: "1vh", color: "yellow" }}>
          Our Top Daily Trending Products
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trends.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trendsa.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trendsb.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trendsc.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trendsd.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            {trendse.map((item) => {
              return (
                <Grid item xs={12} sm={3} md={3} >
                  <Card sx={{
                    boxShadow: "none", height: "55vh",
                  }} >
                    <Grid container>
                      <Grid item xs={12} style={{
                        height: "35vh",
                        backgroundColor: "transparent", border: "1px solid #f6f6f2", padding: "0.5vh",
                      }}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "32vh", padding: " 0vh 0vh" }} />
                      </Grid>
                      <Grid item xs={12}
                        style={{
                          fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600"
                          , "&:hover": { backgroundColor: "#ead3d8" }
                        }}>
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
                            <a href={item.url} style={{ textDecoration: "none" }}>
                              <Button
                                sx={{
                                  color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                }}
                                className="btn">
                                KNOW MORE
                              </Button>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default Trends