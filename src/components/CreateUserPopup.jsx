import React from 'react'

function CreateUserPopup() {
    return (
        <>
            <div>
                <h1>Create User</h1>
                <input type="text" placeholder='Enter Your Name' className='border-2' />

                <button className='px-3 border-2 mx-3'>Create</button>
                <button className='px-3 border-2 mx-3'>Quit</button>
            </div>
        </>
    )
}

export default CreateUserPopup