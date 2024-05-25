import { useEffect, useState } from "react";
import { GetDataFromLocalStorage } from "../Services/getDataFromLocalStorage";
import DataNotFound from "../Components/DataNotFound/DataNotFound";
import BackButton from "../Components/BackButton/BackButton";
import TotalPrice from "../Components/TotalPrice/TotalPrice";
import { SetDataToLocalStorage } from "../Services/SetDataToLocalStorage";
import { useGlobalState } from "../Context/Context";

function OrderPage() {
    const { deleteCount, setDeleteCount } = useGlobalState()
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetDataFromLocalStorage();
                setOrderData(data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = (index) => {
        const updatedOrderData = [...orderData];
        updatedOrderData.splice(index, 1);
        setOrderData(updatedOrderData);
        SetDataToLocalStorage(updatedOrderData);
        setDeleteCount(deleteCount + 1)
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!orderData || orderData.length === 0) {
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
        );
    }

    return (
        <div className="container mt-5">
            <div className="row mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <BackButton />
                        <h3 className="ms-4">Order Place</h3>
                    </div>
                    <TotalPrice />
                </div>
                <div className="mt-5">
                    <table className="table table-border">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Product Image</th>
                                <th>Product Title</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={data.img} width={60} alt={data.title} />
                                    </td>
                                    <td>{data.title}</td>
                                    <td>{data.price.toFixed(2)}</td>
                                    <td>{data.quantity}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
