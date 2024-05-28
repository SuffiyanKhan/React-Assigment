import Badge from '@mui/material/Badge';
import SideBar from '../SideBar/SideBar';
// import { useEffect, useState } from 'react';
// import { GetDataFromLocalStorage } from '../../Services/getDataFromLocalStorage';
// import { useGlobalState } from '../../Context/Context';
// import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';

export default function Buttons() {
    // const { productCounting } = useGlobalState()
    // const [totalProduct, setTotalProduct] = useState(0)
    // useEffect(() => {
    //     const data = GetDataFromLocalStorage();
    //     setTotalProduct(data.length);
    // }, [productCounting])
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
                    <AddToCart/>
                    {/* <Link className='text-dark' to={'/o'}>

                    </Link> */}
                </div>
                <div className="d-none show">
                    <SideBar />
                </div>
            </div>
        </>
    );
}
