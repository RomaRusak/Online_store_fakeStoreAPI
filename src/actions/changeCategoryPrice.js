const changeCategoryPrice = (priceMin, priceMax) => ({
    type: 'CHANGE_CATEGORY_PRICE',
    key: 'price',
    value: {
        priceMin,
        priceMax
    }
})

export default changeCategoryPrice