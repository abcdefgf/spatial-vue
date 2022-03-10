import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import FeaturesImg from '../../internal-images/featurest_us.jpg'



const Features = () => {
    return(
        <>
        <Navbar/>
        <main>
        <section className="slider_section_m p-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FeaturesImg} className="d-block w-100" alt="Page Img" />
          </div>
         
          
        </div>
      </div>
            
        </section>



        <section id="our_features">
        <div className="container">
                <div className="section-title">
                    <h2 className="mb-0">RMSI Cloud SpatialVue GIS Services</h2>
                    </div>

                    <p>
                    SpatialVueTM is a framework developed by RMSI to accelerate building of enterprise WebGIS applications using open standards. SpatialVue’s out of the box tools provide flexible and powerful way to configure build and maintain WebGIS portals using OGC based standards. SpatialVue consists of set of tools / features to facilitate WebGIS development with many ‘ready to use’ tools / modules like user management, layer management, role management, navigation, printing, search, thematic, export, redlining and many more. For more details visit http://www.spatialvue.com/feature.html
                    </p>

                    <p>
                    SpatialVueTM is based on open standards such as WMS, WFS, WCS from Open Geospatial Consortium and is implemented using GeoServer. The current framework utilizes PostgreSQL/PostGIS database for spatial database. Since it is implemented using JPA over hibernate it can be ported on other RDBMS like Oracle, MS SQL Server and MySQL besides others. It is flexible, reliable and scalable as the underlying architecture is based on stateless protocol using rest based services.
                    </p>

                    <p>
                    The solution utilizes web based n-tier architecture on Java2 Enterprise Edition (J2EE) platform. 
                    </p>

                    <p>
                    SpatialVue is integrated with Open source mobile application developed on Liferay portal. The portal provides flexibility to develop and customize the applications. Mobile and Web applications are loosely coupled. Both the applications can be independently deployed. Together mobile and web application work seamlessly to cater to various domains like Utility, Land Management, Surveys, Risk and Insurance etc. 
                    </p>

            






                    <div className="section-title mt-5 mb-3">
                    <h2 className="mb-0">Benefits</h2>
                    </div>

                    <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Cost Effective </h5>
              <p>Offers ready-made platform to development team to jumpstart project execution with an ‘out of the box’ component that can accelerate development and deployment process and reduce overall cost.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Interoperability</h5>
              <p>Works with all OGC compliant map server and support all popular DBMS.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Quick and Fast</h5>
              <p>Enable application customization through configuration, graphical design of business workflows, validation rule engine rather than custom coding thereby reducing development effort.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Insurance Service</h5>
              <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Integration with Open Source </h5>
              <p>Digital Content Management will augment the capability in storing the digital contents with well defined content model e.g. multimedia, GIS extension files.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
          <div className="single-cat text-center mb-5">
            <div className="cat-cap">
              <h5>Leverage the industry</h5>
              <p>Standard business process modeling tools that can be aligned to any vertical or industry needs.</p>
            </div>
          </div>
        </div>
      </div>




        </div>



            
        </section>


        <section id="key_responsibility" className="p-0">
            <div className="container">
                    <h4 className="feature-title">Key functionalities</h4>



                <p className="dt_text"><b>Interoperability:</b> Designed to improve the efficiency and reduce long term costs by providing interoperability across web mapping servers. Works across OGC compliant mapping servers from COTS based ArcGIS 9/10, Cadcorp, MapGuide, Erdas Apollo to open source GeoServer.</p>

                <p className="dt_text"><b>Customization:</b> Provides CSS based out-of-the-box user interface themes. Furthermore, users can also create their own custom themes, without having to do any custom programming.</p>

                <p className="dt_text"><b>Reporting:</b> Provides multiple report templates and themes, to create user defined custom reports. Reports can be exported to HTML or PDF formats.</p>

                <p className="dt_text"><b>Security:</b> Comes with database driven default authentication. External login and authentication is also supported through LDAP (Active Directory).</p>

                <p className="dt_text"><b>Configurable:</b> Provides rule based access control. Administrators can manage WMS layers, control users, groups, and passwords, access levels to data layers, layer attributes, and tools through a simple user interface.</p>
                
                
            </div>
        </section>


        <section id="key_responsibility" className="p-0">
            <div className="container">
            <h4 className="feature-title">Service Domains</h4>


                <p className="dt_text">This service is provided to support the following types of scenario:</p>

                  <ul>
                      <li>Publishing Open Data</li>
                      <li>Data catalogue e.g. discovery, view, download and federation of geospatial data within or outside the organization.</li>
                      <li>Delivery of spatially enabled applications e.g. asset management, online complaints, Manage Public Right of Ways, status of assigned tasks etc.</li>
                  </ul>
                
                
            </div>
        </section>

        <section id="key_responsibility" className="p-0"> 
            <div className="container">
            <h4 className="feature-title">SpatialVue covers following functionalities</h4>



                <p className="dt_text">SpatialVue Manage Data: Importing data via data catalogue. Connecting third party data sources using OGC services in geoserver.</p>

                <p className="dt_text">SpatialVue Editing: Editing of data, geometry, business rules, roles and permissions.</p>
                <p className="dt_text">SpatialVue Query Builder: Query spatial data, viewing results in tabular format.</p>
                <p className="dt_text">SpatialVue Maps: Publishing maps having configurable layer control, layer visibility, layer grouping, Layer settings.</p>
                <p className="dt_text">SpatialVue Mobile: Work Allocation, Assigned task status online, Online/Offline mode.</p>
                <p className="dt_text">SpatialVue Questionnaire: Flexible survey creation, customizable and conditional questionnaire.</p>
                <p className="dt_text">SpatialVue Reports: Integrated with open source Birt reports.</p>
                <p className="dt_text">SpatialVue Analytics: Survey based reports, User wise reports, and area wise reports etc.</p>
                <p className="dt_text">SpatialVue Security: Role based access to application, Technology based security features.</p>



                  
                
                
            </div>
        </section>
        
          



           </main>

           <br/>
           <br/>
           <Footer/>
        
        </>
    )
}

export default Features;