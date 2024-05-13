import './PopularProduct.css'
function Popularroducts(img) {
    console.log(img)
    return (
        <>
            <div className="card mt-3" >
                <img src={img.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{img.title}</p>
                    <h6 className="card-title">{img.desc}</h6>
                    <p className="card-text">
                        12345678
                    </p>
                    <div className="d-flex justify-content-between">
                        <p>{img.price} <del> {img.del}</del></p>
                        <a href="#" className="btn btn-primary">
                            Add
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popularroducts