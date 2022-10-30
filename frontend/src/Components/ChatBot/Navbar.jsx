import React, { useState } from 'react'
import './Navbar.css';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Modal from "react-modal";
import SimpleForm from './Chatbot';

const Navbar = () => {

  const [ModalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: "3vh" }}>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <Grid container spacing={2}
            sx={{ fontSize: "1.35rem", textDecoration: "none" }}>
            <Grid item xs={2}>
              <NavLink exact activeClassName="active" to='/' className="indicator">HOME</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/trends' className="indicator">TRENDS</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/products' className="indicator">PRODUCTS</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/blog' className="indicator">BLOG</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/about' className="indicator">ABOUT US</NavLink>
            </Grid>
            <Grid item xs={2} onClick={() => setModalOpen(! ModalOpen)}>
              <SmartToyIcon style={{color:"#023e84" , width:"5vh" , height:"5vh"}}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal isOpen={ModalOpen}
        style={{
          overlay: {
            width: "72vh",
            position: "fixed",
            left: "68%",
            top: "5vh",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
          },
          content: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            overflow: "hidden",
          }
        }}>
        
        <SimpleForm />
      </Modal>
    </div>
  )
}

export default Navbar