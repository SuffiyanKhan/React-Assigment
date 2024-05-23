export const SetDataToLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
};