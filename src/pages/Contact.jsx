import React from 'react'

function Contact() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
      <div className='contact' id='contact'>
          <div className='container text-center mb-sm-5 py-5'>
              <h1>Contact Us.</h1>

              <div className='contactInfo d-md-flex justify-content-between align-items-center'>
                  <div className='col-md-4 my-5'>
                      <div className='item'>
                          <span className='icon'>
                            <i className="fa fa-location-arrow fa-lg"></i>
                          </span>
                          <h6 className='customColor3'>Address</h6>
                          <p className='customColor3'>90 Mehmandarov. Baku,Azerbaijan</p>
                      </div>
                  </div>
                  <div className='col-md-4 my-sm-5'>
                      <div className='item'>
                          <span className='icon'>
                            <i className="fa fa-envelope fa-lg" ></i>
                          </span>
                          <h6 className='customColor3'>Email</h6>
                          <p className='customColor3'>atayev25@gmail.com</p>
                      </div>
                  </div>
                  <div className='col-md-4 my-sm-5'>
                      <div className='item'>
                          <span className='icon'>
                          <i className="fa fa-phone fa-lg" ></i>
                          </span>
                          <h6 className='customColor3'>Phone</h6>
                          <p className='customColor3'>+994559405203</p>
                      </div>
                  </div>
              </div>
              <div className='contactForm'>
                <div className="row">
                      <div className="col-md-6 my-3">
                        <input type="text" className="form-control"  placeholder="Name" />
                      </div>
                      <div className="col-md-6 my-3">
                        <input type="email" className="form-control"  placeholder="Email" />
                      </div>
                  </div>
                  <div className='row'>
                        <div className='col-md-12 '>
                            <div className="form-group my-3">
                                <textarea  name="message" placeholder="Message" rows="4" required="required"></textarea>
                          </div>
                          <input type="submit" value="Submit" className="button buttonDark"></input>
                        </div>
                  </div>
              </div>
          </div>
          <div className='backToTop text-center py-3'>
              <span className='fs-5 ' onClick={goToTop}>Back to top ⇑</span>
          </div>
      </div>
  )
}

export default Contact