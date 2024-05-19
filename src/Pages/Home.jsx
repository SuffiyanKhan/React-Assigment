import Navbar from '../Components/Navbar/Navbar.jsx'
import Slider from '../Components/Slider/SLider.jsx'
import SetFeatureCategory from '../Components/SetFeatureCategory/SetFeatureCategory.jsx'
import OrderDiv from '../Components/OrderDiv/OrderDiv.jsx'
import Popularroducts from '../Components/PopularProducts/Popularroducts.jsx'
import Services from '../Components/Services/Services.jsx'
import Footer from '../Components/Footer/Footer.jsx'
function Home() {
  return (
    <>
        <Navbar />
      <Slider />
      <SetFeatureCategory />
      <OrderDiv />
      <Popularroducts/>
      <Services/>
      <Footer/>
      
    </>
  )
}

export default Home