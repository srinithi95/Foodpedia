import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


const Register = () => {

    //states
    const [name, setName] = useState('')
    const [nameCheck, setNameCheck] = useState(false)
    const [email, setEmail] = useState('')
    const [emailCheck, setEmailCheck] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [con, setCon] = useState('')

    const [conCheck, setConCheck] = useState(false)
    const [submit, setSubmit] = useState(false)

    // styling
    const loginStyle = {
        marginTop: 75,
        fontStyle: 'normal',
        display: 'flex',
        justifyContent: 'center',
    }

    const gridContainer = {
        display: 'grid',
        textAlign: 'left',
    }

    const errorMessage = {
        color: 'red',
        fontSize: 18,
        marginTop: 5
    }

    // authentication
    const onClick = () => {
        setSubmit(true)
        if (emailCheck && passwordCheck) {
            console.log('SUCCESSFUL!')
        } else {
            console.log('UNSUCCESSUL :(')
        }
    }

    return (
        <div style={loginStyle}>
            <div className='form-group' style={gridContainer}>
                <div style={{ fontSize: 40 }}>
                    Create New Account
                </div>
                <br />

                <label id='name' style={{ fontSize: 24, opacity: '70%' }}>Name</label>
                <input className='form-control' type='text' style={submit && !nameCheck ? { borderColor: 'red', width: 400, height: 75, fontSize: 24 } : { width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setName(e.target.value)
                    if (test) {
                        setNameCheck(true)
                    } else {
                        setNameCheck(false)
                    }
                }} />
                {submit && !nameCheck ? <div style={errorMessage}>Please enter a valid name</div> : ""}

                <label id='email' style={{ fontSize: 24, opacity: '70%', marginTop: 15 }}>Email</label>
                <input className='form-control' type='text' style={submit && !emailCheck ? { borderColor: 'red', width: 400, height: 75, fontSize: 24 } : { width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setEmail(e.target.value)
                    if (test && /@/.test(test)) {
                        setEmailCheck(true)
                    } else {
                        setEmailCheck(false)
                    }
                }} />
                {submit && !emailCheck ? <div style={errorMessage}>Please enter a valid email</div> : ""}

                <label id='password' style={{ fontSize: 24, opacity: '70%', marginTop: 15 }}>Password</label>
                <input className='form-control' type='password' style={submit && !conCheck ? { borderColor: 'red', width: 400, height: 75, fontSize: 24 } : { width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setPassword(e.target.value)
                    if (test) {
                        setPasswordCheck(true)
                    } else {
                        setPasswordCheck(false)
                    }
                    if (test === con) {
                        setConCheck(true)
                    } else {
                        setConCheck(false)
                    }
                }} />
                {submit && !conCheck ? <div style={errorMessage}>Passwords do not match</div> : ""}

                <label style={{ fontSize: 24, opacity: '70%', marginTop: 15 }}>Confirm Password</label>
                <input className='form-control' type='password' style={submit && !conCheck ? { borderColor: 'red', width: 400, height: 75, fontSize: 24 } : { width: 400, height: 75, fontSize: 24 }} onChange={e => {
                    const test = e.target.value
                    setCon(test)
                    if (test && test === password) {
                        setConCheck(true)
                    } else {
                        setConCheck(false)
                    }
                }} />
                {submit && !conCheck ? <div style={errorMessage}>Passwords do not match</div> : ""}

                <div className='form-check' style={{ marginTop: 15, fontSize: 18 }}>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>I have read and agree to the <a href='dummy' target='_blank'>terms of service</a><span style={{ color: '#D43434' }}>*</span></label>
                </div>
                <br />
                <Button style={{ width: 400, height: 75, fontSize: 24, marginTop: 15, }} onClick={onClick}>Register</Button>

                <div style={{ fontSize: 18, textAlign: 'center', marginTop: 15 }}>
                    Already use Foodpedia? <Link to='/login'>Sign in</Link>
                </div>
            </div>


        </div>
    )
}

export default Register
