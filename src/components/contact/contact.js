import './contact.css'
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);
    const [user_name, setUser_Name] = useState('');
    const [user_number, setUser_Number] = useState('')
    const [user_email, setUser_Email] = useState('')
    const [message, setMessage] = useState('')

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
      toast.success('Email has been sent to Calvin Chung', {position: 'bottom-left',});
      e.preventDefault();

      setUser_Name('');
      setUser_Number('');
      setUser_Email('');
      setMessage('');
      
      emailjs
        .sendForm(
          "service_sp7t34e", 
          "template_gyb9d5o", 
          form.current, 
          "EfiEzCKHPneNETXu7"
        )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
          
      }, (error) => {
          console.log(error.text);
      }
    );
  }

  return (
    <div className="c">
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>let's connect!</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <AiOutlinePhone className='c-icon'/>
              <a>267-818-0847</a>
            </div>
            <div className='c-info-item'>
              <AiOutlineMail className='c-icon'/>
              <a>calvin.w.chung@gmail.com</a>
            </div>
            <div className='c-info-item'>
              <a className='linked' href='https://www.linkedin.com/in/calvin-chung-b02b8416a/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin className='c-icon'/> 
              </a>
              <a className='linked' href='https://www.linkedin.com/in/calvin-chung-b02b8416a/' target='_blank' rel='noopener noreferrer'>
                linkedin
              </a>
            </div>
            <div className='c-info-item'>
              <a className='git' href='https://github.com/calvinwchung' target='_blank' rel='noopener noreferrer'>
                <AiFillGithub className='c-icon'/> 
              </a>
              <a className='git' href='https://github.com/calvinwchung' target='_blank' rel='noopener noreferrer'>  
                github
              </a>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
          feel free to contact me via <b>email or phone!</b>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='name' name='user_name' value={user_name} onChange={(e)=> setUser_Name(e.target.value)} />
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='phone number' name='user_number' value={user_number} onChange={(e)=> setUser_Number(e.target.value)}/>
            <input style={{backgroundColor: darkMode && '#333'}} type='email' placeholder='email' name='user_email' value={user_email} onChange={(e)=> setUser_Email(e.target.value)} />
            <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='message' name='message' value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button className='submitBtn' type='submit'>submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;