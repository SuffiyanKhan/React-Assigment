import Popularroducts from '../PopularProducts/Popularroducts'
import productImage1 from '../../assets/product-img-1.jpg'
import productImage2 from '../../assets/product-img-2.jpg'
import productImage3 from '../../assets/product-img-3.jpg'
import productImage4 from '../../assets/product-img-4.jpg'
import productImage5 from '../../assets/product-img-5.jpg'
import productImage6 from '../../assets/product-img-6.jpg'
import productImage7 from '../../assets/product-img-7.jpg'
import productImage8 from '../../assets/product-img-8.jpg'

function MainProducts() {
    return (
        <div className='container my-5'>
        <h2>Popular Products</h2>
            <div className="row d-flex ">
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage1} price={'$18 '} del={'$24'} title={'Snack & Munchies'} desc={'Haldiram Sev Bhujia'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage2} price={'$18 '} del={'$24'} title={'Bakery & Biscuits'} desc={'NutriChoice Digestive'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage3} price={'$32 '} del={'$35'} title={'Bakery & Biscuits'} desc={'Cadbury 5 Star Chocolate'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage4} price={'$3 '} del={'$5'} title={'Snack & Munchies'} desc={'Onion Flavour Potato'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage5} price={'$13 '} del={' $18'} title={'Instant Food'} desc={'Salted Instant Popcorn'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage6} price={'$18 '} del={'$24'} title={'Dairy, Bread & Eggs'} desc={'Blueberry Greek Yogurt'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage7} price={'$18 '} del={'$24'} title={'Dairy, Bread & Eggs'} desc={'Britannia Cheese Slices'} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                    <Popularroducts img={productImage8} price={'$32  '} del={' $35'} title={'Instant Food'} desc={"Kellogg's Original Cereals"} />
                </div>
            </div>
        </div>
    )
}

export default MainProducts