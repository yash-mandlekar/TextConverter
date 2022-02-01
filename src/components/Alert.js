import React from 'react'

function Alert(props) {
    const capitalised = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible position-absolute col-12 row-12 fade show pt-4 pb-1`} role="alert">
            <div className='position-absolute top-50 start-50 translate-middle'>
            <strong>{capitalised(props.alert.type)} </strong>: {props.alert.message}
            </div>
        </div>
    )
}

export default Alert
