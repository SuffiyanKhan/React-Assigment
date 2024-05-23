export const GetDataFromLocalStorage = () => {
    try {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart
    } catch (error) {
        console.error(error.message)
    }
}