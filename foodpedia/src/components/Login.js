import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { login } from '../redux/actions/loginActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';
import './Login.css'


const Login = (props) => {

    //states
    const [email, setEmail] = useState('')
    const [emailCheck, setEmailCheck] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [submit, setSubmit] = useState(false)

    // styling
    const loginStyle = {
        fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif',
        fontStyle: 'normal',
        display: 'flex',
        justifyContent: 'center',
    }

    const gridContainer = {
        // display: 'grid',
        // textAlign: 'left',
    }

    const errorMessage = {
        color:'red',
        fontSize:18,
        marginTop:5
    }

    const navigate = useNavigate()
    // authentication
    const onClick = () => {
        setSubmit(true)
        if (emailCheck && passwordCheck) {
            console.log('SUCCESSFUL!')
            props.login(email)
            navigate('/')

        } else {
            console.log('UNSUCCESSUL :(')
        }
    }


    return (
        <div style={loginStyle} className='check' >
            <div className='form-group login' style={gridContainer} >
                <div className='font' >
                    Welcome Back
                </div>
                <br />

                <label style={{ fontSize: 24, opacity: '70%' }}>Email</label>
                <input className='form-control' type='text' style={submit && !emailCheck ? { borderColor:'red', width: 400, height: 75, fontSize: 24 } : { width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setEmail(e.target.value)
                    if (test && /@/.test(test)) {
                        setEmailCheck(true)
                    } else {
                        setEmailCheck(false)
                    }
                }} />
                {submit && !emailCheck ? <div style={errorMessage}>Please enter a valid email</div> : ""}

                <label style={{ fontSize: 24, opacity: '70%', marginTop: 15 }}>Password</label>
                <input className='form-control' type='password' style={{ width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setPassword(e.target.value)
                    if (test) {
                        setPasswordCheck(true)
                    } else {
                        setPasswordCheck(false)
                    }
                }} />

                <br />

                <Button style={{ width: 400, height: 75, fontSize: 24, marginTop: 15 }} onClick={onClick}>Sign In</Button>

                <Link to='/forgot' style={{ fontSize: 18, textAlign: 'center', marginTop: 15 }}>Forgot Password?</Link>

                <div style={{ fontSize: 18, textAlign: 'center', marginTop: 5 }} className='bottom'>
                    New to Foodpedia? <Link to='/register'>Create an Account</Link>
                </div>
            </div>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email) => dispatch(login(email))
    }
}

const mapStateToProps = state => {
    return {
        email: state.loginReducer.sessionEmail
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
