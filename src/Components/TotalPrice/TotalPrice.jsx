import { useEffect, useState } from "react";
import { TotalPrice } from "../../Services/totalPrice";
import { useGlobalState } from "../../Context/Context";

function TotalPriceComponent() {
    const { deleteCount } = useGlobalState()
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchTotalPrice = async () => {
            try {
                const price = await TotalPrice();
                setTotalPrice(price);
            } catch (error) {
                console.error("Error fetching total price:", error);
            }
        };

        fetchTotalPrice();
    }, [deleteCount]);

    return (
        <>
            <p className="fw-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </>
    );
}

export default TotalPriceComponent;