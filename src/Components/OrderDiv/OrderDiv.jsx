import { useState } from 'react';
import './OrderDiv.css'
import { useEffect } from 'react';
function OrderDiv() {
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
    return (
        <div className="container my-3">
            <div className="row  " >
                <div className={`col-lg-6 col-md-6 col-sm-12 image1 h-50  py-5 ps-5 `}>
                    <div className="">
                        <h3 className=' fw-bold'>Fruits & Vegetables</h3>
                        <p className='fw-semibold  fs-6' >Get Upto 30% Off</p>
                        <button className='btn btn-dark' >Shop Now</button>
                    </div>
                </div>
                <div className={`col-lg-6 col-md-6 col-sm-12 image2 h-50  py-5 ps-5 ${windowWidth <= 768 ? 'mt-3' : ''}`}>
                    <div className="">
                        <h3 className=' fw-bold'>Freshly Baked Buns</h3>
                        <p className='fw-semibold  fs-6' >Get Upto 25% Off</p>
                        <button className='btn btn-dark' >Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDiv