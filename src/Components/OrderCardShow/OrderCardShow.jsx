import { useEffect, useState } from "react"
import { GetDataFromLocalStorage } from "../../Services/getDataFromLocalStorage";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../Context/Context";
import { SetDataToLocalStorage } from "../../Services/SetDataToLocalStorage";
import DataNotFound from "../DataNotFound/DataNotFound";
function OrderCardShow() {
  const { deleteCount, setDeleteCount, orderData, setOrderData, productCounting, setProductCounting } = useGlobalState()
  const [addtoCartData, setAddToCartData] = useState([])

  useEffect(() => {
    (async () => {
      const data = await GetDataFromLocalStorage();
      setAddToCartData(data)
    })()
  }, [])

  const handleDelete = (index) => {
    const updatedOrderData = [...orderData];
    const updatedOrderData2 = [...addtoCartData];
    updatedOrderData.splice(index, 1);
    updatedOrderData2.splice(index, 1);
    setOrderData(updatedOrderData);
    setAddToCartData(updatedOrderData2)
    SetDataToLocalStorage(updatedOrderData);
    SetDataToLocalStorage(updatedOrderData2);
    setDeleteCount(deleteCount + 1)
    setProductCounting(productCounting + 1)
  };
  if (!addtoCartData || addtoCartData.length === 0) {
    return <DataNotFound />
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table table-border border">
            <thead>
              <tr>
                <th className="text-capitalize" >product image</th>
                <th className="text-capitalize" >product price</th>
                <th className="text-capitalize" >product quantity</th>
                <th className="text-capitalize" >action</th>
              </tr>
            </thead>
            <tbody>
              {
                addtoCartData && addtoCartData.map((data) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <img src={data.img} width={40} alt="" />
                        </td>
                        <td>{data.price.toFixed(2)}</td>
                        <td>{data.quantity}</td>
                        <td onClick={handleDelete} ><i className="fa-solid fa-trash-can " style={{ color: "#0cac0c", cursor: "pointer" }}></i></td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
          <div className="w-100">
            <Link className="w-100 bg-color btn fw-semibold text-light" to={'/o'} >Order Place</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCardShow