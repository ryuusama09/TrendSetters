import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import wallpaper from '../../Images/wallpaper.jpg';
import wallpaper2 from '../../Images/wallpaper2.jpg'
import wallpaper3 from '../../Images/wallpaper3.jpg'
import Slider from "react-slick";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import pattern from '../../Images/pattern1.jpg';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-modal";
import '../ChatBot/Navbar.css';
import Swal from 'sweetalert2'
const Blog = () => {

  const [BlogList, setBlogList] = useState([]);
  const [Image, setImage] = useState(null);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [post , setPost] = useState(false);
  useEffect(() => {
    loadList();
    addBlog();
  }, []);

  function handleOpen() {
    setModalOpen(true);
  }

  var hero = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  const loadList = async (e) => {
    axios(
      {
        method: 'get',
        url: 'https://flipkart-grid.herokuapp.com/blog/0',
        headers: {
          'Content-Type': 'application/json'
        },

      }
    )
      .then(function (response) {
        setBlogList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addBlog = async (e) => {
    const formData = new FormData();
    formData.append("image", Image);
    formData.append("title", Title);
    formData.append("content", Content);
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/blog/0',
        data: formData,
      }
    )
      .then(function (response) {
        setBlogList(response.data);
        setPost(true);
        if(response.status == "201")
        {
          Swal.fire({
            icon: 'success',
            title: 'Your blog has been posted successfully',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const wallp = [wallpaper2, wallpaper, wallpaper3];

  return (
    <div>
      <Grid container style={{ overflowX: "hidden" }}>
        <Grid item xs={12}>
          <Slider {...hero}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: "8vh", height: '70vh', backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundPositionY: "40%" }}>
                      <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item sm={4} xs={6} md={4}
                          style={{
                            backgroundColor: "white", marginTop: "15vh", height: "50vh",
                            borderTop: "10px solid #023e84"
                          }}>
                          <Grid container spacing={2} >
                            <Grid item xs={12} style={{ fontSize: "2.3rem", textAlign: "left", color: "#023e84", fontWeight: "600" }} data-aos="fade-left">
                              LOOKING OUT <br /> THERE FOR FUTUTRE</Grid>
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
        <Grid item xs={12}>
          <Grid container spacing={2} style={{ margin: "5vh 0vh" }}>
            <Grid item xs={6}>
              <img src={pattern} alt="image"
                style={{ height: "45vh", marginLeft: "-10vh", border: "10px solid white" }} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} className="electronicsinner"
                  style={{ padding: "1vh", backgroundColor: "#E2C091", marginRight: "15vh", fontWeight: "700" }}>
                  Blog</Grid>
              </Grid>
              <Grid item xs={12}
                style={{ fontSize: "1.3rem", textAlign: "left", marginLeft: "-2vh", marginTop: "5vh" }}>
                Get started to be part of our Trending Blogs , </Grid>
              <Grid item xs={12}
                style={{ fontSize: "1.2rem", textAlign: "left", marginLeft: "-2vh", marginTop: "5vh", paddingRight: "10vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left", marginLeft: "-2vh", marginTop: "5vh" }}>
                <Button onClick={() => { handleOpen() }}
                  sx={{
                    color: "black", border: "2px solid black", fontWeight: "600",
                    "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                  }}
                  className="btn">ADD NEW BLOG</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "7vh", paddingBottom: "5vh" }}>
          {BlogList.map((item) => {
            return (
              <>
                {(item.id) % 4 == 2 || (item.id)%4 == 0  ?
                  <>
                    <Grid container padding={2} style={{ backgroundColor: "#f1f1f1" }}>
                      <Grid item xs={6}>
                        <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                          style={{ height: "45vh", marginLeft: "-10vh", border: "10px solid white" }} />
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} className="homeinner" style={{ textAlign: "left", fontSize: "3rem" }}>
                            {item.title}
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "left", fontSize: "1.15rem" }}>
                            {item.content}
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={2}>
                              <Grid item xs={1}><InstagramIcon /></Grid>
                              <Grid item xs={1}><FacebookIcon /></Grid>
                              <Grid item xs={1}><TwitterIcon /></Grid>
                              <Grid item xs={9}></Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                  : <>
                    {(item.id) % 4 == 1  ?
                      <>
                        <Grid container padding={2} style={{ backgroundColor: "#f8e6d8" }}>
                          <Grid item xs={6}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} className="homeinner" style={{ textAlign: "right", fontSize: "3rem" }}>
                                {item.title}
                              </Grid>
                              <Grid item xs={12} style={{ textAlign: "right", fontSize: "1.15rem" }}>
                                {item.content}
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container spacing={2}>
                                  <Grid item xs={9}></Grid>
                                  <Grid item xs={1}><InstagramIcon /></Grid>
                                  <Grid item xs={1}><FacebookIcon /></Grid>
                                  <Grid item xs={1}><TwitterIcon /></Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                              style={{ height: "45vh", marginRight: "-10vh", border: "10px solid white" }} />
                          </Grid>
                        </Grid>
                      </>
                      : <>
                        <Grid container padding={2} style={{ backgroundColor: "#dde7f1" }}>
                          <Grid item xs={6}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} className="homeinner" style={{ textAlign: "right", fontSize: "3rem" }}>
                                {item.title}
                              </Grid>
                              <Grid item xs={12} style={{ textAlign: "right", fontSize: "1.15rem" }}>
                                {item.content}
                              </Grid>
                              <Grid item xs={12} style={{ textAlign: "right", fontSize: "1rem" }}>
                                <Grid container spacing={2}>
                                  <Grid item xs={9}></Grid>
                                  <Grid item xs={1}><InstagramIcon /></Grid>
                                  <Grid item xs={1}><FacebookIcon /></Grid>
                                  <Grid item xs={1}><TwitterIcon /></Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                              style={{ height: "45vh", marginRight: "-10vh", border: "10px solid white" }} />
                          </Grid>
                        </Grid>
                      </>}
                  </>
                }
              </>
            )
          })}
        </Grid>
      </Grid>
      <Modal isOpen={ModalOpen}
        style={{
          content: {
            backgroundColor: "#f1f1f1"
          },
          overlay: {
            width: "100vh", marginLeft: "50vh"
          },
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: "8vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <Grid container spacing={2}>
                  <Grid item xs={10}></Grid>
                  <Grid item xs={2} style={{ marginTop: "-9vh" }}>
                    <CloseIcon style={{ color: "red", marginLeft: "7vh" }} onClick={() => setModalOpen(false)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} 
                style={{ padding: "1vh", backgroundColor: "#E2C091", fontWeight: "700" , margin:"0vh 1.9vh 2vh 2.3vh" , 
                fontSize:"1.7rem"}}>
                ADD NEW BLOG</Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus="1"
                  label="Title"
                  required
                  variant="outlined"
                  name="title"
                  helperText="Add your Blog Title here"
                  value={Title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ width: "80vh", backgroundColor: "#f1f1f1", color: "white", marginBottom: "2vh" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Content"
                  required
                  variant="outlined"
                  multiline
                  name="content"
                  rows={3}
                  value={Content}
                  helperText="Add your Blog Content here"
                  onChange={(e) => setContent(e.target.value)}
                  sx={{ width: "80vh", backgroundColor: "#f1f1f1", color: "white", marginBottom: "1vh" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="file"
                  required
                  variant="outlined"
                  name="image"
                  helperText="Add any images if there"
                  onChange={(e) => setImage(e.target.files[0])}
                  sx={{ width: "80vh", backgroundColor: "#f1f1f1", color: "white" }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left", marginLeft: "0.7vh", marginTop: "1.5vh" }}>
                <Button onClick={addBlog}
                  sx={{
                    color: "black", fontWeight: "700", backgroundColor: "#E2C091" , fontSize:"1rem" ,
                    "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                  }}
                  className="btn">Post BLOG</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div >
  )
}

export default Blog