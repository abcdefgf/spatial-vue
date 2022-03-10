import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import pageNotFound from '../../internal-images/404_img.jpg'




const NoPage = () => {
    return(

        <>
        <Navbar/>
        <main>
        
           <section id="pag_not_found" className="p-0">
               <div>
               <img src={pageNotFound} className="w-100" alt="Page Img" />
               </div>
               
            </section>



           </main>

<br/>
<br/>
<Footer/>
        
        </>
    )
}

export default NoPage;