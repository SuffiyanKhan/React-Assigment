import Badge from '@mui/material/Badge';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import { GetDataFromLocalStorage } from "../../Services/getDataFromLocalStorage";
import { useGlobalState } from "../../Context/Context";
import OrderCardShow from '../OrderCardShow/OrderCardShow';

function AddToCart() {
    const { productCounting } = useGlobalState()
    const [totalProduct, setTotalProduct] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const data = GetDataFromLocalStorage();
        setTotalProduct(data.length);
    }, [productCounting])
    return (
        <>
            <Button variant="light" className='border-none' style={{ background: "transparent", border: "none" }} onClick={handleShow}>
                <Badge badgeContent={totalProduct} color="primary">
                    <i className="fa-solid fa-cart-shopping fs-5"></i>
                </Badge>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title >
                        <p >Shop Cart</p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                       <OrderCardShow/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default AddToCart;