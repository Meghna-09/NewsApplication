import React from 'react'

export default function Spiner() {
    return (
        <>
            <div className='container-fluid w-100 mt-5 ' style={{ height: '100px' }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}

