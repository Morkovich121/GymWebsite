import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { useState } from 'react'

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className='testimonials' id="testimonials">
            <div className="left-part">
                <span>testimonials</span>
                <span className="empty-text">WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>{testimonialsData[selected].review}</span>
                <div className='workers'>
                    <span>{testimonialsData[selected].name} </span>
                    <span>- {testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="right-part">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength-1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}

                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Testimonials;
