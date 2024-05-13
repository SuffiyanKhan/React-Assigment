import FeaturedCategory from "../FeatureCategory/FeaturedCategory"
import fc1 from '../../assets/fc-1.jpg'
import fc2 from '../../assets/fc-2.jpg'
import fc3 from '../../assets/fc-3.jpg'
import fc4 from '../../assets/fc-4.jpg'
import fc5 from '../../assets/fc-5.jpg'
import fc6 from '../../assets/fc-6.jpg'
import './SetFeatureCategory.css'
function SetFeatureCategory() {
    return (
        <div className="container">
        <h2>Featured Categories</h2>
        <div className="row my-5" style={{ overflowX: 'auto' }}>
            <div className="col-lg-6 col-md-4 col-sm-12 d-flex justify-content-evenly">
                <FeaturedCategory img={fc1} title={'Tea, Coffee & Drinks'} />
                <FeaturedCategory img={fc3} title={'Baby Care'} />
                <FeaturedCategory img={fc2} title={'Atta, Rice & Dal'} />
                <FeaturedCategory img={fc4} title={'Chicken, Meat & Fish'} />
                <FeaturedCategory img={fc3} title={'Baby Care'} />
                <FeaturedCategory img={fc5} title={'Pet Care'} />
                <FeaturedCategory img={fc6} title={'Dairy, Bread & Eggs'} />
                <FeaturedCategory img={fc2} title={'Atta, Rice & Dal'} />
                <FeaturedCategory img={fc5} title={'Pet Care'} />
                <FeaturedCategory img={fc1} title={'Tea, Coffee & Drinks'} />
                <FeaturedCategory img={fc4} title={'Chicken, Meat & Fish'} />
                <FeaturedCategory img={fc6} title={'Dairy, Bread & Eggs'} />
            </div>
        </div>
    </div>
    
    )
}

export default SetFeatureCategory