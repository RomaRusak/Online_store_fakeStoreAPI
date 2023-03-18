const sortFormReducer = (initialState = {category: [], price: {priceMin: '', priceMax: ''}}, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY_PRICE':
           return {...initialState, [action.key]: action.value}
        case 'CHANGE_CATEGORY_SORT':
            return {...initialState, [action.key]: action.category}
        default:
            return initialState
    }
}

export default sortFormReducer