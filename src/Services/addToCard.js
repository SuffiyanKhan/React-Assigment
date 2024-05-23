export const AddToCard = (img, title, price) => {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const newItem = { img, title, price };
        const itemExists = cart.some(item => item.img === newItem.img && item.title === newItem.title && item.price === newItem.price);
        if (!itemExists) {
            cart.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cart));
        } 
    } catch (error) {
        console.error('Error adding item to cart:', error.message);
    }
};
