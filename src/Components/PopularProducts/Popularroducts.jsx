// import { useEffect } from 'react'
// import './PopularProduct.css'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Loader from '../Loader/Loader'
// function Popularroducts() {
//     const [product, setProduct] = useState([])
//     useEffect(() => {
//         (async () => {
//             const res = await fetch('https://dummyjson.com/products')
//             const data = await res.json()
//             setProduct(data.products)
//         })()
//     }, [])
//     if (!product) {
//         return <Loader />
//     }
//     return (
//         <>
//             {
//                 product ? (
//                     <div className="container mt-5 border">
//                         <div className="row">
//                             {
//                                 product ? (product.map((data, index) => {
//                                     return (
//                                         <>
//                                             <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
//                                                 <div className="card mt-3" >
//                                                     <img src={data.thumbnail} className="card-img-top  " style={{ objectFit: 'cover', height: "250px" }} alt="..." />
//                                                     <div className="card-body">
//                                                         <h6 className="card-title">{data.title}</h6>
//                                                         <p className="card-text">{data.description}</p>
//                                                         <p className="card-text">
//                                                             Price: ${data.price}
//                                                         </p>
//                                                         <div className="d-flex justify-content-between align-items-center">
//                                                             <a href="#" className="btn btn-primary">
//                                                                 Add
//                                                             </a>
//                                                             <Link className='text-dark fw-bold' to={`/d/${data.id}`} >More Detail</Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )
//                                 })) : <Loader />
//                             }

//                         </div>
//                     </div>
//                 ) : <Loader />
//             }

//         </>
//     )
// }

// export default Popularroducts

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './PopularProduct.css';

function PopularProducts() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data.products);
        })();
    }, []);

    if (!product) {
        return(
            <><div className="" style={{width:'100%',height:'100vh'}}>
                <Loader />
            </div>
            </>
        ) 
        
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {product.map((data, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                        <div className="card mt-3">
                            <img
                                src={data.thumbnail}
                                className="card-img-top"
                                style={{ objectFit: 'cover', height: '250px' }}
                                alt={data.title}
                            />
                            <div className="card-body">
                                <h6 className="card-title">{data.title}</h6>
                                <p className="card-text">{data.description}</p>
                                <p className="card-text">Price: ${data.price}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="btn btn-primary">
                                        Add
                                    </a>
                                    <Link className="text-dark fw-bold" to={`/d/${data.id}`}>
                                        More Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularProducts;
