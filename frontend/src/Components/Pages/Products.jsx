import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import wallpaper from '../../Images/wallpaper.jpg';
import wallpaper2 from '../../Images/wallpaper2.jpg'
import wallpaper3 from '../../Images/wallpaper3.jpg'
import Slider from "react-slick";
import axios from 'axios';
import '../ChatBot/Navbar.css';
import Fashion from '../Category/Fashion';
import Mobile from '../Category/Mobile';
import Homedecor from '../Category/Homedecor';
import Electronics from '../Category/Electronics';
import Travel from '../Category/Travel';
import Grocery from '../Category/Grocery';
const Products = () => {

  var hero = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  const [value, setValue] = useState('1');
  const [ProductList, setProductList] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   loadList();
  // }, []);

  /*const loadList = async () => {
     const result = await axios.get('https://flipkart-grid.herokuapp.com/video/0',{})
     setProductList(result.data);  
   console.log(ProductList);
   console.log("hii")
   };*/

  /*const loadList = async (e) => {
    const formData = new FormData();
    formData.append("filter", []);
    await fetch("https://flipkart-grid.herokuapp.com/product", {
      method: "POST",
      body: formData,
    })
    .then((result)=>{
      console.log(result.data)
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };*/

  
  

  const wallp = [wallpaper2, wallpaper3, wallpaper];

  return (
    <div>
      <Grid container style={{ overflowX: "hidden" }}>
        <Grid item xs={12} >
          <Slider {...hero}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2} >
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
                              SHOP DAILY <br /> TRENDY PRODUCTS <br />FROM OUR STORE</Grid>
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
          <TabContext value={value} >
            <Box sx={{position:"-webkit-sticky" , position:"sticky" , top:"0", backgroundColor:"#E2C091"}}>
              <div>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                  <Tab label="FASHION" value="1" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                  <Tab label="MOBILE" value="2" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                  <Tab label="ELECTRONICS" value="3" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                  <Tab label="HOME DECOR" value="4" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                  <Tab label="TRAVEL" value="5" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                  <Tab label="GROCERY" value="6" style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }} />
                </TabList>
              </div>
            </Box>
            <TabPanel value="1"><Fashion /></TabPanel>
            <TabPanel value="2"><Mobile /></TabPanel>
            <TabPanel value="3"><Electronics /></TabPanel>
            <TabPanel value="4"><Homedecor /></TabPanel>
            <TabPanel value="5"><Travel /></TabPanel>
            <TabPanel value="6"><Grocery /></TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  )
}

export default Products