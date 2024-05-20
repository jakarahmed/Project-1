
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from "./Banner";
import Secrion3 from "./Secrion3";
import Section4 from "./Section4";
import Footer from "./Footer";
import Card from "./Card";
import Parallax from "./Parallax";
import TESTIMONIALS from "./TESTIMONIALS";
const Carosolin = () => {
    return (
        <div className="h-[100px]">
              <Carousel className="sticky">
                <div className="">
                    <img src="../public/heart-1776746_1920.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../public/fruit-4421752_1920.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../public/strawberries-3359755_1920.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="../public/fruit-4421752_1920.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div className="justify-center  flex"> 

<div className="space-y-5 text-center">
<p className="text-[#D99904] b">---From 11:00am to 10:00pm---</p>
<h2 className="text-2xl py-2 border-dotted border-black border-y-2">ORDER ONLINE</h2>
</div>
</div>

<Banner></Banner>   
<Secrion3></Secrion3>
<Section4></Section4>
<div className="justify-center  flex my-10"> 

<div className="space-y-5 text-center">
<p className="text-[#D99904] b">---Should Try---</p>
<h2 className="text-2xl py-2 border-dotted border-black border-y-2">CHEF RECOMMENDSh2</h2>
</div>
</div>

<Card></Card>
<Parallax></Parallax>


<div className="justify-center  flex my-10 py-8"> 

<div className="space-y-5 text-center">
<p className="text-[#D99904] b">---Should Try---</p>
<h2 className="text-2xl py-2 border-dotted
 text-white border-black border-y-2">TESTIMONIALS</h2>
</div>
</div>

<TESTIMONIALS></TESTIMONIALS>
<Footer></Footer>


 </div>
    );
};

export default Carosolin;