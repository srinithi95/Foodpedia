import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router'
import './Login.css'

const Forgot = () => {

    // set states
    const [email, setEmail] = useState('')
    const [emailCheck, setEmailCheck] = useState(false)
    const [submit, setSubmit] = useState(false)

    // styling
    const loginStyle = {
        fontStyle: 'normal',
        display: 'flex',
        justifyContent: 'center',
    }

    const gridContainer = {
        display: 'grid',
        textAlign: 'left',
    }

    const errorMessage = {
        color:'red',
        fontSize:18,
        marginTop:5
    }
    
    const navigate = useNavigate();
    // authentication
    const onClick = () => {
        setSubmit(true)
        if (emailCheck) {
            console.log('SUCCESSFUL!')
            navigate('/login')
        } else {
            console.log('UNSUCCESSUL :(')
        }
    }

    return (
        <div style={loginStyle}>
            <div className='form-group' style={gridContainer} className='check'>
                <div style={{ fontSize: 40 }}>
                    Forgot Password?
                </div>
                <br />
                <label id='name' style={{ fontSize: 24, opacity: '70%' }}>Enter your email</label>
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
                
                <br />
                <Button style={{ width: 400, height: 75, fontSize: 24, marginTop: 15, }} onClick={onClick}>Next</Button>
                <div style={{fontSize:18,textAlign:'center', marginTop:15}} className='bottom'>
                    New to Foodpedia? <Link to='/register'>Create an Account</Link>
                </div>
            </div>


        </div>
    )
}

export default Forgot
