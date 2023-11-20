import React from 'react'
import { Button } from 'react-bootstrap';
import Image from './main-video-img.jpg.png';

const style = {
  backgroundColor: "rgba(255, 238, 252, 1)",
  justifyContent: "center",
  fontFamily: "inter"
};

//default function
export default function welcome () {
  <div>
  <div className='container-fluid' style={style}>
    <div className='row'>
      <div className='col-md-6 col-sm-12' style={{ width: "25vw", margin: "auto" }}>
        <span style={{ color: "transparent", backgroundImage: "linear-gradient(to right, rgba(53, 92, 153, 1), rgba(235, 122, 101, 1), rgba(169, 249, 225, 1))", WebkitBackgroundClip: "text", fontSize: "3vw" }}>Brainstorm</span>
        <br />
        <p style={{ fontSize: "3vw" }}>your book easily</p>
        <p style={{ fontFamily: "Poppins" }}>
          World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.
        </p>
        <Button variant="outline-dark" className='rounded-pill' size="md" style={{ marginRight: '10px', fontFamily: "Poppins" }}>
          Request a demo
        </Button>
        <Button variant="outline-dark" className='rounded-pill' style={{ backgroundColor: "rgba(235, 122, 101, 1)", size: 'lg', fontFamily: "Poppins", color: "white" }}>
          Try for free
        </Button>
      </div>
      <div className='col-md-6 col-sm-12 text-center'>
        <div>
          <img src={Image} alt="" style={{ width: '40vw', margin: 'auto' }} />
        </div>
        <span style={{fontFamily:"Poppins"}}>Watch the product overview </span>
        <sub>3 mins</sub>
      </div>
    </div>
  </div>
  </div>




  };
  