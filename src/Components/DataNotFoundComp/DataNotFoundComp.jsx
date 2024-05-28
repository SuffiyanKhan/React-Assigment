import BackButton from "../BackButton/BackButton"
import DataNotFound from "../DataNotFound/DataNotFound"

function DataNotFoundComp() {
    return (
        <>
            <div className="container " style={{ height: "80vh" }}>
                <div className="mt-5 ms-5">
                    <BackButton />
                </div>
                <div className="d-flex justify-content-center align-items-center  h-25">
                </div>
                <DataNotFound />
            </div>
        </>
    )
}

export default DataNotFoundComp