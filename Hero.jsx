import  HeroImage from '../assets/Hero.jpeg';
import './Hero.css';

const Hero = () => {
  return (
   <>
  <div className="container display-flex">
    <div className="row">
    <div className="col-sm-4">
    <div className="title mt-5  pt-5 fw-100 display-6 ms-auto">
       Let's Go Shopping Maheswari!
    </div>
    </div>
    <div className="col-sm-8 mt-5">
    <div className="image">
      <img src= {HeroImage} alt="" srcset="" width={800} height={300}/>
    </div>
    </div>
    </div>
    </div>
    
   </>
  )
}

export default Hero;