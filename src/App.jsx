import Footer from "./Components/Footer/Footer"
import MainProducts from "./Components/MainProducts/MainProducts"
import Navbar from "./Components/Navbar/Navbar"
import OrderDiv from "./Components/OrderDiv/OrderDiv"
import Services from "./Components/Services/Services"
import SetFeatureCategory from "./Components/SetFeatureCategory/SetFeatureCategory"
import Slider from "./Components/Slider/SLider"

function App() {

  return (
    <>
      <Navbar />
      <Slider />
      <SetFeatureCategory />
      <OrderDiv />
      <MainProducts/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App