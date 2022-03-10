import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Slider1 from '../../internal-images/slide/slide-1.jpg'
import Slider2 from '../../internal-images/slide/slide-2.jpg'
import Slider3 from '../../internal-images/slide/slide-3.jpg'
import Footer from "../../layout/Footer";


const Home = () => {
    return(

        <>
        <Navbar/>

        <section className="slider_section_m p-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="Slider 1" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Enterprise WebGIS Platform</h1>
            </div>
          </div>
          <div className="carousel-item">
          <img src={Slider2} className="d-block w-100" alt="Slider 2" />
            <div className="carousel-caption d-none d-md-block">
              <h1>WebGIS User Interface</h1>
            </div>
          </div>
          <div className="carousel-item">
          <img src={Slider3} className="d-block w-100" alt="Slider 3" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Web Based Administration<br/> Console</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
            
        </section>

        <main id="main">
            <section id="featured-services" className="featured-services section-bg">
                <div className="container">
                <div className="section-title">
                    <h2 className="mb-0 mt-3">Who We Are</h2>
                    </div>
                    
                    <p className="shor_description">SpatialVue is an enterprise Web GIS platform developed using OGC standards such as WMS, WFS, and WPS and is compatible with all OGC compliant commercial and open source web mapping engines such as ESRI ArcGIS 9/10, Geo Server, Auto desk Map Guide, Erdas Apollo, Map Info, and Deegree, amongst others.</p>
                </div>
                </section>


                <section id="services" className="services mb-3">
                <div className="container">
                    <div className="section-title">
                    <h2>Key Feature</h2>
                    </div>
                    <div className="row">
                    <div className="col d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                        <div className="icon-box iconbox-blue">
                        <div className="icon">
                            <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174" />
                            </svg>
                            <i className="bx bx-map-alt" />
                        </div>
                        <h4><Link to="#">Interoperability</Link></h4>
                        <p>SpatialVue is designed to improve the efficiency and reduce long term costs by providing interoperability across web mapping servers. Works across OGC compliant mapping servers from COTS based ArcGIS 9/10, Cadcorp, MapGuide, Erdas Apollo to open source GeoServer.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                        <div className="icon-box iconbox-orange ">
                        <div className="icon">
                            <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426" />
                            </svg>
                            <i className="bx bx-calendar-edit" />
                        </div>
                        <h4><Link to="#">Customization</Link></h4>
                        <p>SpatialVue provides CSS based out-of-the-box user interface themes. Furthermore, users can also create their own custom themes, without having to do any custom programming.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                        <div className="icon-box iconbox-pink">
                        <div className="icon">
                            <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                            </svg>
                            <i className="bx bx-user" />
                        </div>
                        <h4><Link to="#">Reporting</Link></h4>
                        <p>SpatialVue provides multiple report templates and themes, to create user defined custom reports. Reports can be exported to HTML or PDF formats.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                        <div className="icon-box iconbox-yellow">
                        <div className="icon">
                            <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813" />
                            </svg>
                            <i className="bx bx-data" />
                        </div>
                        <h4><Link to="#">Security</Link></h4>
                        <p>SpatialVue comes with database driven default authentication. External login and authentication is also supported through LDAP (Active Directory).</p>
                        </div>
                    </div>


                    <div className="col d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                        <div className="icon-box iconbox-yellow">
                        <div className="icon">
                            <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813" />
                            </svg>
                            <i className="bx bx-server" />
                        </div>
                        <h4><Link to="#">Configurable</Link></h4>
                        <p>SpatialVue provides rule based access control. Administrators can manage WMS layers, control users, groups, and passwords, access levels to data layers, layer attributes, and tools through a simple user interface.</p>
                        </div>
                    </div>



                    </div>
                </div>
                </section>


                <section id="clients" className="clients mb-5">
                    <div className="container">
                        <div className="section-title">
                        <h2>Key Functionalities</h2>
                        </div>

                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                              <h4 className="feature-title">Web Based Administration Tool</h4>
                            </div>
                        </div>

                        <div className="row">
                          <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                           Security
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Role Based Access Control
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Enterprise Integration
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Search using attribute and Coordinate
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Red Lining
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Advanced Thematic Mapping
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Print
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox border-right-0">
                                

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Advanced Report
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>




                        </div>

                        <hr/>


                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                              <h4 className="feature-title">Export Vector Data</h4>
                            </div>
                        </div>

                        <div className="row">
                          <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Support for Multiple Languages
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Export Map
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Measure
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Web Editor
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Spatial Query
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       SQL Query Builder
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Attach Document
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox border-right-0">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Google, Bing, Open street Map Overlays
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>




                        </div>

                        <hr/>

                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                              <h4 className="feature-title">Remove WMS</h4>
                            </div>
                        </div>

                        <div className="row">
                          <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Geoprocessing
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Varied Browser Support
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Metadada Configuration
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                 
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Embed in Application
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox">
                                  

                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Customize User Interface
                                         </p>
                                    </div>
                                  
                                  </div>
                              
                            </div>

                            <div className="col">
                                <div className="featureBox border-right-0">
                                  <div className="featureBox-desc">
                                       <p className="ft-text">
                                       Export Results to XLS, PDF, Word
                                         </p>
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

export default Home;


