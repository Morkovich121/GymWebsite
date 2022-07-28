import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans" id="plans">
            <div className="blur plans-blur"></div>
            <div className="blur plans-blur"></div>
            <div className="programs-header mr">
                <span className="empty-text">ready to start</span>
                <span className="programs-intro">your journey</span>
                <span className="empty-text">now withus</span>
            </div>
            <div className="plans-categories">
                {plansData.map((plan) => (
                    <div className="plan">
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) =>(
                                <div className="feature">
                                    <img src={whiteTick} alt=""></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -{">"} </span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Plans;
