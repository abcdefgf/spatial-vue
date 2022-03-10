import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import ContactImg from '../../internal-images/mapImage.png'



const Contact = () => {
    return(

        <>
        
        <Navbar/>
        <main>
        <section className="slider_section_m p-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <img src={ContactImg} className="" alt="Page Img" />
          </div>
         
          
        </div>
      </div>
            
        </section>

        <section id="contact_us_page">
            <div className="container">
            <div className="row justify-content-center">
        <div className="col-12 text-center  mb-3">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
            <div className="row">
              <div className="col-12">
                <div className="form-group mb-3">
                  <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-3">
                  <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm boxed-btn">Send</button>
            </div>
          </form>
        </div>
        {/* <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home" /></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet" /></span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email" /></span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div> */}
      </div>
                
                
                
            </div>
        </section>
        
          



           </main>

           <br/>
           <br/>
           <Footer/>
        
        </>
    )
}

export default Contact;