export const AddToCard = (img, title, price) => {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const newItem = { img, title, price,quantity:1 };
        const itemIndex = cart.findIndex(item => item.img === newItem.img && item.title === newItem.title);
        if (itemIndex !== -1) {
            cart[itemIndex].price += newItem.price;
            cart[itemIndex].quantity += 1;
        } else {
            cart.push(newItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error adding item to cart:', error.message);
    }
};
