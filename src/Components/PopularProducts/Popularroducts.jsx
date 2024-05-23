import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './PopularProduct.css';
import { AddToCard } from '../../Services/addToCard';
import { useGlobalState } from '../../Context/Context';

function PopularProducts() {
    const { productCounting, setProductCounting } = useGlobalState()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data.products);
        })();
    }, []);

    if (!product) {
        return (
            <><div className="" style={{ width: '100%', height: '100vh' }}>
                <Loader />
            </div>
            </>
        )

    }
    const save = (img, title, price) => {
        AddToCard(img, title, price)
        setProductCounting(productCounting + 1)
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
                                    <button className="btn btn-primary" onClick={() => { save(data.thumbnail, data.title, data.price) }} >
                                        Add to Cart
                                    </button>
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
