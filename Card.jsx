import './Card.css';
import  phone1 from '../assets/phone1.webp';
import  phone2 from '../assets/phone2.webp';
import  phone3 from '../assets/phone3.webp';
import  phone4 from '../assets/phone4.webp';
import  phone5 from '../assets/phone5.webp';
import  phone6 from '../assets/phone6.webp';
import  star from '../assets/star.svg';




const Card = () => {
  return (
   <>
   <div className="h3 ms-5">Electronics</div>

   <div class="row row-cols-1 row-cols-md-5 g-4 mt-3 ms-5 bg-body-tertiary ">
  <div class="col bg-body-tertiary">
    <div class="card">
      <img src={phone1} class="card-img-top" alt="..."height={220}  />
   </div>
   <div class="card">
  <div class="card-body">
    <h5 class="card-title">$49.999</h5>
    <p class="card-text">OnePlus 13R 5G 256 GB (Astral Trail, 12 GB RAM).</p>
    <img src={star} height={70} />
  </div>
</div>
  </div>
  <div class="col bg-body-tertiary">
    <div class="card">
      <img src={phone2}class="card-img-top" alt="..."/>
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">$19.999</h5>
    <p class="card-text">iQOO Z9s 5G (Onyx Green, 8GB RAM, 128GB Storage)Sony.</p>
    <img src={star} height={70} />
  </div>
</div>
    </div>
  </div>
  <div class="col bg-body-tertiary">
    <div class="card">
      <img src={phone3} class="card-img-top" alt="..."/>
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">$29.999</h5>
    <p class="card-text">OnePlus Nord 4 5G (8GB RAM, 256GB, Oasis Green).</p>
    <img src={star} height={70} />
  </div>
</div>
       </div>
  </div>
  <div class="col bg-body-tertiary">
    <div class="card">
      <img src={phone4} class="card-img-top" alt="..."/>
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">$19.999</h5>
    <p class="card-text">Apple AirPods Pro (2nd Generation) with MagSafe Charging Case (USB-C).</p>
    <img src={star} height={70} />
  </div>
</div>
     </div>
  </div>
  <div class="col bg-body-tertiary">
    <div class="card">
      <img src={phone5} class="card-img-top" alt="..."/>
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">$1.999</h5>
    <p class="card-text">boAt Airdopes 301 TWS Earbuds w/ 75H Playtime, Quad Mics w/ ENx & ASAP Charge (Onesize) by Myntra.</p>
    <img src={star} height={70} />
  </div>
</div>
      </div>
  </div>
  </div>
 </>
  )
}

export default Card;