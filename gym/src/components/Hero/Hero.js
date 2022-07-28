import React, {useState} from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import HeroImage from '../../assets/hero_image.png';
import HeroBackImage from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';

const Hero = () => {

    const [transition] = useState({ type: 'spring', duration: 3 })
    
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*The best gym part*/}
                <div className="the-best-part">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/*Ideal body part*/}
                <div className="ideal-body">
                    <div>
                        <span className='empty-text'>shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                {/*Info about gym part*/}
                <div className='gym-info'>
                    <div>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/*Hero section buttons*/}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">

                <div className='right-h-info'>
                    <a href='#connect'><button className="btn">Join Now</button></a>
                </div>

                {/*Heart rate part*/}
                <div className="heart-rate">
                    <img src={Heart} alt=""></img>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={HeroImage} alt="" className='hero-image'></img>
                <img src={HeroBackImage} alt="" className='hero-back-image'></img>

                {/*Calories part*/}
                <div className="calories">
                    <img src={Calories} alt=""></img>
                    <div className="calories-info">
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
