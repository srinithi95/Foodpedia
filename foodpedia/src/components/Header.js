import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

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
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '36px',
        lineHeight: '38px',
        justifyItems: 'start',
        color: '#515874',
        paddingLeft: 100
    }

    const linkStyle = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        paddingRight: 50
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
                    <Link to='/login' style={{ textDecoration: "none", color: '#515874' }}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
