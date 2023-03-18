const cartReducer = (initialState = [], action) => {

    const toFix = num => +num.toFixed(2)

    switch (action.type) {
        case 'CART_INC':
            return [...initialState.map(item => {
                return (item.id == action.id)
                ? {...item, counter: item.counter + 1, priceCounter: toFix(item.priceCounter + item.price)}
                : item
            })]

        case 'CART_DEC':
            return [...initialState.map(item => {
                return (item.id == action.id)
                ? {...item, counter: item.counter - 1, priceCounter: toFix(item.priceCounter - item.price)}
                : item
            }).filter(item => item.counter >= 1)] 

        case 'ADD_TO_CART':

            if (initialState.find(item => item.id == action.id)) {
                return [...initialState.map(item => {
                    return (item.id == action.id)
                    ? {...item, counter: item.counter + 1, priceCounter: toFix(item.priceCounter + item.price)}
                    : item
                })]
            }
            return [...initialState, {id: action.id, name: action.name, image: action.image, price: action.price, counter: 1, priceCounter: toFix(action.price)}]
        default:
            return initialState
    }
}

export default cartReducer