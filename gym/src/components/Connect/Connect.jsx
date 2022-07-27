import React from 'react'
import './Connect.css'
import { useState } from 'react'

const Connect = () => {
    return (
        <div className='connect' id='connect'>
            <div className="left-c">
                <hr></hr>
                <div>
                    <span className='empty-text'>ready to</span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className='empty-text'>with us?</span>
                </div>
            </div>
            <div className="right-c">
                <div className="email">
                    <input type="email" name="user_email" id="user_email" placeholder='Enter your Email Address here...' />
                    <button type="submit" className='btn'>Join now</button>
                </div>
            </div>
        </div>
    )
}
export default Connect;
