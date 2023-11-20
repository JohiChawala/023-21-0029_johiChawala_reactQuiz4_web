import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from './images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Offering = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"rgba(235, 122, 101, 1)"}}>
        <div className="text-center" style={{ width: "60vw", margin: "auto" , padding:"20px"}}>
        <span style={{marginRight:"10px"}}>The world’s most effective content teams use Writer</span>
        <button>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <br/>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={Image}  alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={Image} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  );
};

export default Offering
