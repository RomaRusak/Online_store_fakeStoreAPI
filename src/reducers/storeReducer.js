const storeReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'DATA_STORE_GET':
            return [...initialState, action.data]
        default:
            return initialState
    }
}

export default storeReducer