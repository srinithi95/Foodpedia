import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../redux/actions/loginActions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/actions/searchActions'
import { Button, InputGroup, FormControl, } from 'react-bootstrap'
import { BsSearch, BsFillBasket2Fill } from 'react-icons/bs'

const Header = (props) => {

    const headerStyle = {
        backgroundColor: "#E7E7FF",
        height: 120,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
    }

    const titleStyle = {
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '36px',
        lineHeight: '38px',
        justifyItems: 'start',
        color: '#515874',
        textAlign: 'left',
        paddingLeft: '5rem'

    }

    const linkStyle = {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        gridGap:'3rem'

        // textAlign:'right'
    }

    const navigate = useNavigate();
    const onClick = () => {
        if (props.session) {
            props.login('')
            navigate('/login')
        } else {
            navigate('/login')
        }
    }

    const [find, setFind] = useState('')
    const [near, setNear] = useState('')

    const dispatch = useDispatch();



    const homepageStyle = {

    }

    const onSearch = (e) => {
        e.preventDefault();
        console.log(find + near)
        dispatch(search(find, near))
        setFind('')
        setNear('')
        navigate('/search')
    }

    const onCart = (e) => {
        e.preventDefault();
        dispatch(search(find, near))
        navigate('/cart')
    }



    return (
        <div style={headerStyle}>
            <div style={titleStyle}>
                <Link to='/' style={{ textDecoration: "none", color: '#37447E' }}>Foodpedia</Link>
            </div>
            <InputGroup style={{ width: 1000, border: '1px solid black', borderRadius: 6 }} size='lg' >
                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white', borderColor: 'white' }}><b>Find</b></InputGroup.Text>
                <FormControl
                    placeholder="Restaurant, Cuisine..."
                    onChange={e => setFind(e.target.value)}
                    value={find}
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    style={{ backgroundColor: 'white', borderColor: 'white' }}
                />
                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white', borderColor: 'white' }}>|</InputGroup.Text>
                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'white', borderColor: 'white' }}><b>Near</b></InputGroup.Text>
                <FormControl
                    placeholder="City, State..."
                    onChange={e => setNear(e.target.value)}
                    value={near}
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                    style={{ backgroundColor: 'white', borderColor: 'white' }}
                />
                <Button onClick={onSearch} style={{ backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black' }}><BsSearch /></Button>
            </InputGroup>


            <div style={{justifyContent:'end',display:'grid'}}>
                <div style={linkStyle}>

                    <div>
                        <Link to='/about' style={{ textDecoration: "none", color: '#515874' }}><b>About</b></Link>
                    </div>
                    <div>
                        <Link to='/restaurant' style={{ textDecoration: "none", color: '#515874' }}><b>Restaurant</b></Link>
                    </div>
                    <div>
                        {props.session ? <div style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}><b>Sign Out</b> </div> : <div style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}><b>Sign In</b> </div>}
                    </div>

                    <div onClick={onCart} style={{ alignItems: 'right', height: 50, width: 50, backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black', borderRadius: 8 }}>
                        <div style={{ display: 'grid', height: '100%', justifyContent: 'center', alignContent: 'center' }}>
                            <BsFillBasket2Fill />
                        </div>
                    </div>
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

const mapStateToProps = (state) => {
    return {
        session: state.loginReducer.sessionEmail

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);