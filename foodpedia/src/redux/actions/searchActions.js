export const search = (find,near) => {
    console.log('ACTION: SEARCHING')
    return {
        type: 'SEARCH',
        find: find,
        near: near,
    }
}
