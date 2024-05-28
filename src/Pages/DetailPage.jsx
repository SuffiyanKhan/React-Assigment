// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import BackButton from "../Components/BackButton/BackButton"
// import Loader from "../Components/Loader/Loader"

// function DetailPage() {
//     const id = useParams()
//     const [data, setData] = useState('')
//     useEffect(() => {
//         (async () => {
//             const res = await fetch(`https://dummyjson.com/products/${id.id}`)
//             const singleProduct = await res.json()
//             setData(singleProduct)
//             console.log(singleProduct)
//         })()
//         console.log(data)
//     }, [])
//     if (!data) {
//         return <Loader />
//     }
//     return (
//         <>
//             <div className="container mt-5">
//                 <BackButton />
//                 <div className="row">
//                     <h1>Detail Page</h1>
//                     <div className="col-lg-5 col-md-6 col-sm-12 ">
//                         <div
//                             id="carouselExampleAutoplaying"
//                             className="carousel slide border"
//                             data-bs-ride="carousel"
//                         >
//                             <div className="carousel-inner ">
//                                 {
//                                     data.images ? (data.images.map((data) => {
//                                         return (
//                                             <>
//                                                 <div className="carousel-item active">
//                                                     <img src={data} className="d-block w-100" style={{ height: "500px", objectFit: "contain" }} alt="..." />
//                                                 </div>
//                                             </>
//                                         )
//                                     })):<Loader/>
//                                 }
//                             </div>
//                             <button
//                                 className="carousel-control-prev"
//                                 type="button"
//                                 data-bs-target="#carouselExampleAutoplaying"
//                                 data-bs-slide="prev"
//                             >
//                                 <span className="carousel-control-prev-icon" aria-hidden="true" />
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button
//                                 className="carousel-control-next"
//                                 type="button"
//                                 data-bs-target="#carouselExampleAutoplaying"
//                                 data-bs-slide="next"
//                             >
//                                 <span className="carousel-control-next-icon" aria-hidden="true" />
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-lg-7 col-md-6 col-sm-12 py-5">
//                         <h3>{data.title}</h3>
//                         <p>{data.description}</p>
//                         <p>Brand: {data.brand}</p>
//                         <p>Category: {data.category}</p>
//                         <p>Price: ${data.price}</p>
//                         <p>Stock: {data.stock}</p>
//                         <div className="w-100 mt-5">
//                             <button className="btn btn-success w-100">BUY</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default DetailPage



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../Components/BackButton/BackButton";
import Loader from "../Components/Loader/Loader";
import { useGlobalState } from "../Context/Context";
import { AddToCard } from "../Services/addToCard";

function DetailPage() {
    const { id } = useParams(); // Corrected destructuring
    const [data, setData] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false); // State to handle image loading
    const { productCounting, setProductCounting } = useGlobalState()

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const singleProduct = await res.json();
            setData(singleProduct);
        })();
    }, [id]);

    useEffect(() => {
        if (data && data.images) {
            const imagePromises = data.images.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(imagePromises).then(() => {
                setImagesLoaded(true);
            });
        }
    }, [data]);

    if (!data) {
        return <Loader />;
    }
    const save = (img, title, price) => {
        AddToCard(img, title, price)
        setProductCounting(productCounting + 1)
    }
    return (
        <div className="container mt-5">
            <BackButton />
            <div className="row">
                <h1>Detail Page</h1>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    {!imagesLoaded ? (
                        <Loader />
                    ) : (
                        <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide border"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {data.images.map((src, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={src} className="d-block w-100" style={{ height: "500px", objectFit: "contain" }} alt="..." />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 py-5">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <p>Brand: {data.brand}</p>
                    <p>Category: {data.category}</p>
                    <p>Price: ${data.price}</p>
                    <p>Stock: {data.stock}</p>
                    <div className="w-100 mt-5">
                        <button className="btn bg-color fw-semibold text-light w-100" onClick={() => { save(data.thumbnail, data.title, data.price) }} >Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
