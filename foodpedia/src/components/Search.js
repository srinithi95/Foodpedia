import React from 'react'
import {connect} from 'react-redux'

const Search = (props) => {
    return (
        <div>
            SEARCH PAGE
            <div>
                {props.find}
                {props.near}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        find: state.searchReducer.find,
        near: state.searchReducer.near
    }
}

export default connect(mapStateToProps)(Search)
