import React, { Component } from 'react';

import './App.css';


import { Row, Col, Carousel,Menu, Icon ,Layout, Breadcrumb,icon} from 'antd';

import Nav from './containers/mnav.js';

import Lay from './Lay/layout.js';

import Lnav from'./containers/lnav.js';
import Pnav from'./containers/pnav.js';
import { render } from 'react-dom';
import {Image} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  

  render() {
    var background = {backgroundSize : 'cover'};
    var textStyle = {
      position: 'absolute', 
      top: '50%', 
      left: '50%'
    };
    return (
      
     
     
   <div>
   <Layout>
       <Nav />
        <Content>
        <ScrollUpButton />
        <Pnav />
         </Content>

        
      </Layout>
      

        </div>
     



    
    );
  }
}

export default App;
