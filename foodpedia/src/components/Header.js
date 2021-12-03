import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router'
import {login} from '../redux/actions/loginActions'

const Header = (props) => {

    const headerStyle = {
        backgroundColor: "#E7E7FF",
        height: 100,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '.5fr 2.5fr 1fr',
        alignItems: 'center',
        paddingRight: 150
    }

    const titleStyle = {
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '36px',
        lineHeight: '38px',
        justifyItems: 'start',
        color: '#515874',
        paddingLeft: 100
    }

    const linkStyle = {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        paddingRight: 50
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



    return (
        <div style={headerStyle}>
            <div style={titleStyle}>
                <Link to='/' style={{ textDecoration: "none", color: '#37447E' }}>Foodpedia</Link>
            </div>
            <div>

            </div>
            <div style={linkStyle}>
                <div>
                    <Link to='/about' style={{ textDecoration: "none", color: '#515874' }}>About</Link>
                </div>
                <div>
                    <Link to='/restaurant' style={{ textDecoration: "none", color: '#515874' }}>Restaurant</Link>
                </div>
                <div>
                    {props.session ? <div  style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}>Logout </div>: <div  style={{ textDecoration: "none", color: '#515874' }} onClick={onClick}>Login </div>}
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
  export default connect(mapStateToProps,mapDispatchToProps)(Header);