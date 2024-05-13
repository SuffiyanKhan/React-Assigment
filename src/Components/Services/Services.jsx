
import clock from '../../assets/clock.svg'
import gift from '../../assets/gift.svg'
import refresh from '../../assets/refresh-cw.svg'
import packages from '../../assets/package.svg'




function Services() {
  return (
    <div className="container" >
        <div className="row my-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={clock} alt="" />
                <div className="mt-4 ">
                    <h5>10 minute grocery now</h5>
                    <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={gift} alt="" />
                <div className="mt-4">
                    <h5>Best Prices & Offers</h5>
                    <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={packages} alt="" />
                <div className="mt-4">
                    <h5>Wide Assortment</h5>
                    <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <img src={refresh} alt="" />
                <div className="mt-4">
                    <h5>Easy Returns</h5>
                    <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services