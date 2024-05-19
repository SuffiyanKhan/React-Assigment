import './NavbarNavigation.css'


function NavbarNavigation() {
    return (
        <>
            <div className="container navigation mt-4  ">
                <button className="btn bg-color d-flex align-items-center text-light fw-semibold px-3 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-grid"
                    >
                        <rect x={3} y={3} width={7} height={7} />
                        <rect x={14} y={3} width={7} height={7} />
                        <rect x={14} y={14} width={7} height={7} />
                        <rect x={3} y={14} width={7} height={7} />
                    </svg>
                    <span className="ms-2" >
                        All Department
                    </span>
                </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark ms-4" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Shop
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Store
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Mega Page
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Pages
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Account
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-dark" href="#">
                            Docs
                        </a>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default NavbarNavigation