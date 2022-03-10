import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import AboutUS from '../../internal-images/about_us.jpg'
import AboutUsSmall from '../../internal-images/about_us_small.jpg'
import { Link } from "react-router-dom";



const About = () => {
    return(

        <>
        <Navbar/>
        <main>
        <section className="slider_section_m p-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={AboutUS} className="d-block w-100" alt="Page Img" />
          </div>
         
          
        </div>
      </div>
            
        </section>


        <section id="about_us">
            <div className="container">
            <div className="row">
                          <div className="col-xs-12 col-sm-12">
                              <h4 className="feature-title">Enterprise WebGIS Platform</h4>
                            </div>
                        </div>

              <p>
              SpatialVue is an enterprise Web GIS platform developed using OGC standards such as WMS, WFS, and WPS. It is compatible with all OGC compliant commercial and open source web mapping engines such as ESRI ArcGIS 9/10, GeoServer, Autodesk MapGuide, Erdas Apollo, MapInfo, and Deegree, amongst others.
              </p>

              <p>
              SpatialVue provides the requisite out of the box tools to publish spatial data quickly and securely over the web with an authenticated security and role based user access. It enables easy and efficient management, visualization, editing, and maintenance of spatial data. It is easily customizable, depending on the user requirements, without having to reprogram and rewrite codes. It is best suited for clients who want to accelerate their WebGIS development and deployment.
              </p>
                
                
                
            </div>
        </section>


        <section id="more_about_us">
          <div className="container">
        <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="support-location-img">
            <img src={AboutUsSmall} alt="productImg" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="right-caption">
            {/* Section Tittle */}
            <div className="section-tittle section-tittle2 mb-50">
              <span>Our Top Services</span>
              <h2 className="text-white">RMSI Cloud SpatialVue GIS Services</h2>
            </div>
            <div className="support-caption">
              <p className="pera-top text-white mb-5">SpatialVueTM is a framework developed by RMSI to accelerate building of enterprise WebGIS applications using open standards. SpatialVue’s out of the box tools provide flexible and powerful way to configure build and maintain WebGIS portals using OGC based standards. SpatialVue consists of set of tools / features to facilitate WebGIS development with many ‘ready to use’ tools / modules like user management, layer management, role management, navigation, printing, search, thematic, export, redlining and many more. For more details visit http://www.spatialvue.com/feature.html</p>
              
              <Link to="#" className="btn post-btn">More About Us</Link>
            </div>
          </div>
        </div>
      
      
      
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

export default About;