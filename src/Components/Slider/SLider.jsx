import { useEffect, useState } from 'react';
import Slider1 from '../../assets/Slider1.png'
import Slider2 from '../../assets/Slider2.png'

function Slider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const generatedClasses = () => {
    if (windowWidth >= 1440) {
        return 'w-50 my-5 py-5 ms-5';
    } else if (windowWidth <= 992 && windowWidth > 768) {
        return 'px-4 py-5 my-4 ';
    } else if (windowWidth <= 768) {
        return 'w-100';
    } else {
        return 'ps-5 py-5 mt-5';
    }
}


  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div id="carouselExampleAutoplaying" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
              </div>
              <div className="carousel-inner">
                <div className="card abc text-dark carousel-item active">
                  <img src={Slider1} className="card-img" alt="..." />
                  <div className={`card-img-overlay ${generatedClasses()}`}>
                    <h5 className={`card-title fw-bold ${windowWidth >=1440 ? 'fs-1':'fs-1'}
                    ${windowWidth <=992 ? 'fs-2':'fs-1'}
                    ${windowWidth >=768 ? 'fs-3':'fs-2'}
                    ${windowWidth <=481 ? 'fs-5':'fs-3'}
                     `}>SuperMarket For Fresh Grocery</h5>
                    <p className={`card-text ${windowWidth >=1440 ? 'fs-4':'fs-5'}
                    ${windowWidth <=992 ? 'fs-6':'fs-5'}
                    ${windowWidth <=768 ? 'fs-6':'fs-6'}

                    `}>
                     Introduced a new model for online grocery shopping and  convenient home delivery.
                    </p>
                    <button className='btn btn-dark'>shop now</button>
                  </div>
                </div>
                <div className="card abc text-dark  carousel-item active">
                  <img src={Slider2} className="card-img" alt="..." />
                  <div className={`card-img-overlay ${generatedClasses()}`}>
                    <h1 className={`card-title  fw-bold ${windowWidth >=1440 ? 'display-1':'display-1'}
                    ${windowWidth <=992 ? 'fs-2':'display-1'}
                    ${windowWidth >=768 ? 'fs-3':'fs-2'}
                    ${windowWidth <=481 ? 'fs-5':'fs-3'}
                     `}>Free Shipping on  order over <span style={{color:'#0cac0c'}}>$100</span></h1>
                    <p className={`card-text ${windowWidth >=1440 ? 'fs-4':'fs-5'}
                    ${windowWidth <=992 ? 'fs-6':'fs-5'}
                    ${windowWidth <=768 ? 'fs-6':'fs-6'}

                    `}>
                     Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
                    </p>
                    <button className='btn btn-dark'>shop now</button>
                  </div>
                </div>

              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Slider