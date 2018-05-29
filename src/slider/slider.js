import React from 'react';
import { Carousel } from 'antd';
import {Home1} from '../photo/home-1.png';

import './full-slider.css';



 class Slider extends React.Component {

    
      render() {
        return (
          
            <Carousel autoplay >
            <div className = "carousel-item"><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
          
          
        );
      }
    }
    export default Slider;