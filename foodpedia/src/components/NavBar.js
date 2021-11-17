import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {search} from '../redux/actions/searchActions'
import {  useNavigate } from "react-router-dom";

const NavBar = () => {

    const [find,setFind] = useState('')
    const [near,setNear] = useState('')

    const dispatch = useDispatch();
    const navigate =  useNavigate();


    const homepageStyle = {
        marginTop:30
    }

    const onClick = () => {
        console.log(find + near)
        dispatch(search(find,near))
        navigate('/search')
    }

    return (
        <div style={homepageStyle}> 
            <label>Find</label>
            <input type='text' style={{width:350,height:30}} onChange={e => setFind(e.target.value)}/>
            <label>Near</label>
            <input type='text' style={{width:350,height:30}} onChange={e => setNear(e.target.value)}/>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}

export default NavBar