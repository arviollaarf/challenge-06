import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
  return (
    <header>
      <div className={`${styles.navbarContainer} fixed-top`} >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-md">
            <a href="/" className={styles.logo}><span>BCR</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="list-unstyled navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#our-services" className="nav-link active text-decoration-none text-reset">Our Services</a>
                  </li>
                  <li className="nav-item">
                    <a href="#why-us" className="nav-link active text-decoration-none text-reset">Why Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#testimonial" className="nav-link active text-decoration-none text-reset">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <a href="#faq" className="nav-link active text-decoration-none text-reset">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link active" id={styles.btnGreen}>Register</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${styles.heroContainer} container-md`}>
        <div className="row">
          <div className={`col-lg ${styles.heroText}`}>
            <h1>Sewa & Rental Mobil Terbaik di<br />kawasan Surabaya</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br />terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a href='/cars' className="btn" id={styles.btnGreen}>Mulai Sewa Mobil</a>
          </div>
          <div className="col-lg">
            <img src={require('../../assets/img_car.png')} className={styles.carImage} alt="car" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
