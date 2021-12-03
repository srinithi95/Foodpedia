import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/actions/searchActions'
import { useNavigate } from "react-router-dom";
import { Button, InputGroup, FormControl, } from 'react-bootstrap'
import { BsSearch, BsFillBasket2Fill } from 'react-icons/bs'

const NavBar = () => {

    const [find, setFind] = useState('')
    const [near, setNear] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const homepageStyle = {
        marginTop: 30,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,

    }

    const onClick = (e) => {
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
        <div style={homepageStyle}>

            <InputGroup style={{ width: 1000, border: '1px solid black', borderRadius: 6 }} size='lg' className="mb-3">
                {/* <Form.Select
                        variant="outline-secondary"
                        title="Cuisine"
                        id="input-group-dropdown-1"
                    >
                        <option href="#">Cuisine</option>
                        <option href="#">American</option>
                        <option href="#">Chinese</option>
                        <option href="#">Mexican</option>
                        <option href="#">French</option>
                        <option href="#">Indian</option>
                    </Form.Select> */}
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
                <Button onClick={onClick} style={{ backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black' }}><BsSearch /></Button>
            </InputGroup>

            <div className='mb-3' onClick={onCart} style={{ position: 'relative', left: 550, height: 50, width: 50, backgroundColor: "#FFA6A6", borderColor: '#FFA6A6', color: 'black', borderRadius: 8 }}>
                <div style={{display:'grid',height:'100%',justifyContent:'center',alignContent:'center'}}>
                <BsFillBasket2Fill />
                </div>
            </div>


        </div>
    )
}

export default NavBar