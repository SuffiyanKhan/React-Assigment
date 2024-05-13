import Badge from '@mui/material/Badge';
import SideBar from '../SideBar/SideBar';

export default function Buttons() {
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="me-3">
                    <Badge badgeContent={4} color="primary">
                        <i className="fa-regular fa-heart fs-5"></i>
                    </Badge>
                </div>
                <div className="me-3">
                    <i className="fa-regular fa-user fs-5"></i>
                </div>
                <div className="">
                    <Badge badgeContent={4} color="primary">
                        <i className="fa-solid fa-cart-shopping fs-5"></i>
                    </Badge>
                </div>
                <div className="d-none show">
                <SideBar/>
                </div>
            </div>
        </>
    );
}
