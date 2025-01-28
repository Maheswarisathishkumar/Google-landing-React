import  logo from '../assets/logo.svg';
import  grid from '../assets/grid.svg';
import  menu from '../assets/menu.svg';
import  search from '../assets/search.svg';
import  search1 from '../assets/search1.svg';
import  user from '../assets/user.svg';
import  voice from '../assets/voice.svg';






const Navbar = () => {
  return (
   <>
   <div className="container-fluid bg-body-tertiary d-grid">
   <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
    <div className="col">
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="col d-flex">
    <img src={logo} className='me-5 mt-1' alt="" width="100" height="80" />
    <div className="h6 mt-3 pt-3 me-5 text-start">Shopping</div>
    </div>
   </div>
   </nav>
    </div>
    <div className="col me-5 mb-5 d-flex">
    <div className="input-group mt-3 pt-3 ">
  <input type="text" className="form-control" placeholder="What are you looking for?"/>
 <img src={voice} height={28}/>
 </div>
<div className="col d-flex  mt-3 pt-3 ms-5 ">
<img src={grid} alt="" srcset="" height={30} />
<img src={user} alt="" srcset=""  height={30}/>
</div>
</div>

</div>
</div>
   </>
  )
}

export default Navbar;
;