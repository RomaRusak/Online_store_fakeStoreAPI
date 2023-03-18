const addToCart = (id, name, price, image) => ({
    type: "ADD_TO_CART",
    id,
    name,
    price,
    image
})

export default addToCart