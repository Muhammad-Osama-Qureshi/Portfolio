import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import { Copyright, Facebook, Instagram, Twitter, WhatsApp } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="main pt-4">
     
       <div className="container">
           
           <div className="row">
               <div className="col col-md-4 col-12 ">
                <h3>Address:</h3>
                   <p>House no 765 Block B Unit 11</p>
                   <p>Latifabad Hyderabad</p>
                   <p>Pakistan</p>
                
               </div>
               <div className="col col-md-4 col-12">
                   <h3>Contacts</h3>
               <p className="no"><CallIcon className="icons"/> 0307-5607635</p>
               <p className="no"><WhatsApp className="icons" /> 0333-3468532</p></div>   
               <div className="col">
                   <h3>Social Accounts</h3>
                   <a href=""> <Facebook className="icons"/>Facebook</a><br/>
                   <a href=""><Instagram className="icons"/>Instagram</a><br/>
                   <a href=""><Twitter className="icons"/> Twitter</a><br/>
                    <a href=""><LinkedInIcon className="icons" />LinkedIn</a>
               </div>
              
           </div>
           <hr/>
           <div className="row">
               <div className="col col-md-12 col-12">  
<p className="items"><Copyright/> Copyright {new Date().getFullYear()} | Muhammad Osama | All right Reserved | Terms and Service | Privacy  </p></div>
           </div>

           
       </div>
       </div>
    )
}

export default Footer
