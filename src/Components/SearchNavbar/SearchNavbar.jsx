
function SearchNavbar() {
    return (
        <>
            <div className="d-flex hide border w-50 bg-white rounded me-3">
                <input
                    className="form-control  border-none shadow-none outline-none border-light me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn rounded-circle" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

            </div>
            <button
                className='btn btn-light hide  border'
            >
                <i className="fa-solid fa-location-dot me-3"></i>
                <span>Location</span>
            </button>
        </>
    )
}

export default SearchNavbar