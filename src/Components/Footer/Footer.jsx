
import './Footer.css'
import imgae1 from '../../assets/amazonpay.svg'
import imgae2 from '../../assets/american-express.svg'
import imgae3 from '../../assets/visa.svg'
import imgae4 from '../../assets/paypal.svg'
import imgae5 from '../../assets/mastercard.svg'
import buttonImage1 from '../../assets/appstore-btn.svg'
import buttonImage2 from '../../assets/googleplay-btn.svg'
function Footer() {
    return (
        <div className="container-fluid mt-4 py-5 px-5 bg-body-tertiary">
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Categories</h6>
                    <div className=" ">
                        <p className="footer-para" >Vegetables & Fruits</p>
                        <p className="footer-para" >Breakfast & instant food</p>
                        <p className="footer-para" >Bakery & Biscuits</p>
                        <p className="footer-para" >Atta, rice & dal</p>
                        <p className="footer-para" >Sauces & spreads</p>
                        <p className="footer-para" >Organic & gourmet</p>
                        <p className="footer-para" >Baby care</p>
                        <p className="footer-para" >Cleaning essentials</p>
                        <p className="footer-para" >Personal care</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 mt-5">
                    <p className="footer-para" >Dairy, bread & eggs</p>
                    <p className="footer-para" >Cold drinks & juices</p>
                    <p className="footer-para" >Tea, coffee & drinks</p>
                    <p className="footer-para" >Masala, oil & more</p>
                    <p className="footer-para" >Chicken, meat & fish</p>
                    <p className="footer-para" >Paan corner</p>
                    <p className="footer-para" >Pharma & wellness</p>
                    <p className="footer-para" >Home & office</p>
                    <p className="footer-para" >Pet care</p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Get to know us</h6>
                    <div className="">
                        <p className="footer-para" >Company</p>
                        <p className="footer-para" >About</p>
                        <p className="footer-para" >Blog</p>
                        <p className="footer-para" >Help Center</p>
                        <p className="footer-para" >Our Value</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>For Consumers</h6>
                    <p className="footer-para" >Payments</p>
                    <p className="footer-para" >Shipping</p>
                    <p className="footer-para" >Product Returns</p>
                    <p className="footer-para" >FAQ</p>
                    <p className="footer-para" >Shop Checkout</p>

                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Become a Shopper</h6>
                    <div className="">
                        <p className="footer-para" >Shopper Opportunities</p>
                        <p className="footer-para" >Become a Shopper</p>
                        <p className="footer-para" >Earnings</p>
                        <p className="footer-para" >Ideas & Guides</p>
                        <p className="footer-para" >New Retailers</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                    <h6>Freshcart programs</h6>
                    <div className="">
                        <p className="footer-para" >Freshcart programs</p>
                        <p className="footer-para" >Gift Cards</p>
                        <p className="footer-para" >Promos & Coupons</p>
                        <p className="footer-para" >Freshcart Ads</p>
                        <p className="footer-para" >Careers</p>
                    </div>
                </div>
                <hr className='mt-4' />
                <div className="mt-1 py-2  d-flex justify-content-between">
                    <div className="d-flex">
                        <p className='me-4'>Payment Partners</p>
                        <a className='me-2' href="#">
                            <img src={imgae1} alt="" />
                        </a>
                        <a className='me-2' href="#">
                            <img src={imgae2} alt="" />
                        </a>
                        <a className='me-2' href="#">
                            <img src={imgae5} alt="" />
                        </a>
                        <a className='me-2' href="#">
                            <img src={imgae3} alt="" />
                        </a>
                        <a className='me-2' href="#">
                            <img src={imgae4} alt="" />
                        </a>
                    </div>
                    <div className="d-flex align-items-center w-50 justify-content-center">
                        <p>Get deliveries with FreshCart</p>
                        <div className="">

                        <button className='btn ' >
                            <img src={buttonImage1} className='w-75 img-fluid' alt="" />
                        </button>
                        <button className='btn ' >
                            <img src={buttonImage2} className='w-75 img-fluid' alt="" />
                        </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mt-2 d-flex justify-content-between'>
                    <div className="">
                    <p className='para fw-semibold'>© 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span style={{color:"#0cac0c"}} >Codescandy</span>.</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className='para me-3 '>Follow on</p>
                        <button className='btn border-dark me-2' >
                        <i className="fa-brands fa-facebook"></i>   
                        </button>
                        <button className='btn border-dark me-2' >
                            <i className="fa-brands fa-twitter"></i>
                        </button>
                        <button className='btn border-dark me-2' >
                            <i className="fa-brands fa-instagram"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer