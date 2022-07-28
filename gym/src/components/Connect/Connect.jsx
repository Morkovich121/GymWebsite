import React, {useRef} from 'react'
import './Connect.css'
import emailjs from '@emailjs/browser'

const Connect = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_inzphbm', 'service_inzphbm', form.current, 'fawRxbyAo8pAnDOln')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
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
                <form ref={form} className="email" onSubmit={sendEmail}>
                    <input type="email" name="user_email" id="user_email" placeholder='Enter your Email Address here...' />
                    <button type="submit" className='btn'>Join now</button>
                </form>
            </div>
        </div>
    )
}
export default Connect;
