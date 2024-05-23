export const TotalPrice = async () => {
    try {
        const addToCartData = await JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;
        addToCartData.forEach((data) => {
            totalPrice += data.price;
        });
        return totalPrice;
    } catch (error) {
        console.error(error.message);
        return 0; 
    }
};
