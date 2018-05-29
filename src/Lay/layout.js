import React, { Component } from 'react';
import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from 'react-scroll-to-element';
import Slider from '../slider/slider.js';

import Popup from "reactjs-popup";

class Lay extends React.Component {
    render() {
     
     
        return (
        
           <div>
       
 
            <div id="section1" class="responsive">
          
           
</div>



{/* <div id="section2" class="container-fluid">
  
 
</div>
<div id="section3" class="container-fluid">
  <h1>Section 3</h1>
  
</div> */}

 {/* <div id="section4" class="container-fluid">

</div>  */}

<div id="section5" class="responsive">
  
  
</div>

<div id="section6" class="responsive">
  <Popup 
    trigger={<button id="button1"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place1" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section7" class="responsive">
<Popup 
    trigger={<button id="button2"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place2" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section8" class="responsive">
<Popup 
    trigger={<button id="button3"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place3" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section9" class="responsive">
<Popup 
    trigger={<button id="button4"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place4" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section10" class="responsive">
<Popup 
    trigger={<button id="button5"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place5" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section11" class="responsive">
<Popup 
    trigger={<button id="button6"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place6" class="responsive" />
   
    </p>
  </Popup> 
</div>
<div id="section12" class="responsive">
<Popup 
    trigger={<button id="button7"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place7" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section13" class="responsive">
<Popup 
    trigger={<button id="button8"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place8" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section14" class="responsive">
 <Popup 
    trigger={<button id="button9"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place9" class="responsive" />
   
    </p>
  </Popup> 
  
</div>
<div id="section15" class="responsive">
<Popup 
    trigger={<button id="button10"> VIEW MORE+ </button>}
    modal 
    closeOnDocumentClick
  >
   <p className="test">
  
    <p id="place10" class="responsive" />
   
    </p>
  </Popup> 
  
</div>

            </div>
         
        );
    }

}
export default Lay;