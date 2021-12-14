export const login = (email) => {
    console.log('ACTION: LOGIN')
    return {
        type: 'LOGIN',
        email: email,
    }
}

export const res = () => {
    console.log('ACTION: res')
    return {
        type: 'RES'
    }
}

export const resTwo = () => {
    console.log('ACTION: res2')
    return {
        type: 'RESTWO'
    }
}

export const register = (name,password,email) => {
    console.log('ACTION: REGISTER')
    return {
        type: 'REGISTER',
        name: name,
        password: password,
        email: email,
        restaurant: false
    }
}
