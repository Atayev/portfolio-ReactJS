import React ,{ useRef,useState,useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
function Contact() {
    const [data, setData] = useState()
    const [value,setValue] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
        useEffect(() => {
        const fetchData = async() => {
            const response =await fetch('../data.json')
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])
    // console.log(data?.contact)
    const form= useRef()
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('atayev_ibrahim', 'email.temp.ata', form.current, 'gOPS6SHL2BWN26dwS')
      .then((result) => {
          toast.success('Message sent successfully :)')
          setValue('')
          setEmail('')
          setMessage('')
      }, (error) => {
          toast.error('Something went wrong :(')
      });
        
    }
  return (
      <div className='contact' id='contact'>
          <div className='container text-center mb-sm-5 py-5'>
              <h1>Contact Us.</h1>
              <div className='contactInfo d-md-flex justify-content-between align-items-center'>
                  {
                      data?.contact.map((info) => {
                          return (
                            <div className='col-md-4 my-5'>
                            <div className='item'>
                                <span className='icon'>
                                  <i className={info?.fieldIcon}></i>
                                </span>
                                <h6 className='customColor3'>{info?.fieldName}</h6>
                                <p className='customColor3'>{info?.valueName}</p>
                            </div>
                        </div>
                          )
                      })
                 } 
                
              </div>
              <form className='contactForm' onSubmit={sendEmail} ref={form}>
                <div className="row">
                      <div className="col-md-6 my-3">
                        <input type="text" className="form-control" value={value} onChange={(e)=>setValue(e.target.value)}  placeholder="Name" name='user_name' required/>
                      </div>
                      <div className="col-md-6 my-3">
                        <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" name='user_email' required/>
                      </div>
                  </div>
                  <div className='row'>
                        <div className='col-md-12 '>
                            <div className="form-group my-3">
                                <textarea  name="message" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}  rows="4" required="required"></textarea>
                          </div>
                          <input type="submit" value="Submit" className="button buttonDark"></input>
                        </div>
                  </div>
              </form>
          </div>
          <div className='backToTop text-center py-3'>
              <span className='fs-5 ' onClick={goToTop}>Back to top ⇑</span>
          </div>
      </div>
  )
}

export default Contact