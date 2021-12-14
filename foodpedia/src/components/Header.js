import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { login,resTwo } from '../redux/actions/loginActions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/actions/searchActions'
import { Button, InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'
import { BsSearch, BsFillBasket2Fill } from 'react-icons/bs'
import './Header.css';



const Header = (props) => {





    const linkStyle = {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        gridGap: '3rem'

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

    const onClickRes = () => {
        if (props.USERMODE) {
            navigate('/restaurant')
        } else {
            dispatch(resTwo())
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
        <div className='header' >
            <Container fluid style={{ backgroundColor: "#E7E7FF" }} className='pb-5 pt-4 px-4'>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col lg={3} sm={12} className='mt-3' >
                        <div className='title'>
                            <Link to='/' style={{ textDecoration: "none", color: '#37447E' }}>Foodpedia</Link>
                        </div>
                    </Col>
                    <Col lg={5} className='mt-3'>
                        <InputGroup style={{ border: '1px solid black', borderRadius: 6 }} md={5}>
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
                    </Col>
                    <Col lg={3} md={1} className='mt-3'>
                        <div style={{ justifyContent: 'end', display: 'grid' }}>
                            <div style={linkStyle}>

                                <div className='link'>
                                    <Link to='/about' style={{ textDecoration: "none", color: '#515874' }}><b>About</b></Link>
                                </div>
                                <div className='link'>
                                    <div to='/restaurant' style={{ textDecoration: "none", color: '#515874' }} onClick={onClickRes}><b>Restaurant</b></div>
                                </div>
                                <div className='link'>
                                    {props.session ? <div style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}><b>Sign Out</b> </div> : <div style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}><b>Sign In</b> </div>}
                                </div>

                                <div className='link' onClick={onCart} style={{ alignItems: 'right', height: 40, width: 40, backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black', borderRadius: 8 }}>
                                    <div style={{ display: 'grid', height: '100%', justifyContent: 'center', alignContent: 'center' }}>
                                        <BsFillBasket2Fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <br />
            {/* <div style={titleStyle}>
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
            </InputGroup> */}



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
        session: state.loginReducer.sessionEmail,
        USERMODE: state.loginReducer.USERMODE

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);