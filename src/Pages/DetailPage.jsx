import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import BackButton from "../Components/BackButton/BackButton"
import Loader from "../Components/Loader/Loader"

function DetailPage() {
    const id = useParams()
    const [data, setData] = useState('')
    useEffect(() => {
        (async () => {
            const res = await fetch(`https://dummyjson.com/products/${id.id}`)
            const singleProduct = await res.json()
            setData(singleProduct)
            console.log(singleProduct)
        })()
        console.log(data)
        // images

    }, [])
    return (
        <>
        <div className="container mt-5">
                <BackButton/>
            <div className="row">
                <h1>Detail Page</h1>
                <div className="col-lg-5 col-md-6 col-sm-12 ">
                    <div
                        id="carouselExampleAutoplaying"
                        className="carousel slide border"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner ">
                            {
                                data.images ? (data.images.map((data) => {
                                    return (
                                        <>
                                            <div className="carousel-item active">
                                                <img src={data} className="d-block w-100" style={{ height: "500px", objectFit: "contain" }} alt="..." />
                                            </div>
                                        </>
                                    )
                                })):(
                                    <>
                                    <Loader/>
                                    </>
                                )
                            }
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
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 py-5">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <p>Brand: {data.brand}</p>
                    <p>Category: {data.category}</p>
                    <p>Price: ${data.price}</p>
                    <p>Stock: {data.stock}</p>
                    <div className="w-100 mt-5">
                        <button className="btn btn-success w-100">BUY</button>
                    </div>
                    {/* 
rating
 */}
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailPage