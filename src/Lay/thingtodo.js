import React, { Component } from 'react';
import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from 'react-scroll-to-element';
import Slider from '../slider/slider.js';
import ScrollUpButton from "react-scroll-up-button";
import { Card, Row, Col } from 'antd';
import Popup from "reactjs-popup";
const { Meta } = Card;
class Thing extends React.Component {
    render() {


        return (

            <div>

                <div id="thing0" class="responsive"> </div>

            <Row gutter={8}class="responsive">
  <Col span={8} >

<Popup 
    trigger={<Card
        hoverable
       
        cover={<a id="thingg1" class="responsive"/>}
      >
      
      </Card>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="thing1" class="responsive" />
   
    </p>
  </Popup> 

  
                     
                       </Col>
                        
  <Col span={8} >
  <Popup 
    trigger={<Card
        hoverable
       
        cover={<a id="thingg2" class="responsive"/>}
      >
      
      </Card>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="thing2" class="responsive" />
   
    </p>
  </Popup> 

  </Col>
  <Col span={8} >

<Popup 
    trigger={<Card
        hoverable
       
        cover={<a id="thingg3" class="responsive"/>}
      >
      
      </Card>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="thing3" class="responsive" />
   
    </p>
  </Popup> 
  </Col>
</Row>
           
<Row gutter={8}>
  <Col span={12} >
  <Popup 
    trigger={<Card
        hoverable
       
        cover={<a id="thingg4" class="responsive"/>}
      >
      
      </Card>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="thing4" class="responsive" />
   
    </p>
  </Popup> 
  </Col>
  <Col span={12} >
  <Popup 
    trigger={<Card
        hoverable
       
        cover={<a id="thingg5" class="responsive"/>}
      >
      
      </Card>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="thing5" class="responsive" />
   
    </p>
  </Popup> 
  </Col>
</Row>




            </div>










        );
    }

}
export default Thing;