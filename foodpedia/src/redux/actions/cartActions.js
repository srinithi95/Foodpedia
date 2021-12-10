export const addCart = (data) => {
    console.log('ACTION: ADD CART')
    return {
        type: 'CART',
        payload: data
    }
}
