import logo from '../../assets/logo.svg'
import Buttons from '../Buttons/Buttons'
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation'
import SearchNavbar from '../SearchNavbar/SearchNavbar'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3 sticky-top flex-column border-bottom" style={{backgroundColor:"white"}} >
            <div className="container ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div className=" collapse navbar-collapse " >
                    <SearchNavbar />
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Buttons />
                    </ul>
                </div>
                <div className="d-none show">
                    <Buttons />
                </div>
            </div>
            <NavbarNavigation/>
        </nav>
    )
}

export default Navbar