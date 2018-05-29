import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll-to-element';
// The Header creates links that can be used to navigate
// between routes.
const Lnav = () => (

    <nav >
<Link to ="/"><li>PLACE TO GO</li> </Link>
<Link to ="/thingtodo"><li>THING TO DO</li></Link>
<Link to ="/timetogo"> <li>TIME TO GO</li></Link>

 {/* <Scroll type="id" element="section5"><Link to ="/"><button type="button" class="btn btn-light"><li>Place to go</li></button></Link></Scroll> 
<Scroll type="id" element="section3"><Link to ="/"><button type="button" class="btn btn-light"><li>Thing to do</li></button></Link></Scroll> 
<Scroll type="id" element="section15"><Link to ="/"><button type="button" class="btn btn-light"><li>Contact</li></button></Link>
</Scroll>   */}
</nav>

)

export default Lnav;
