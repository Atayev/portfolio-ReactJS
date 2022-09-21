import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {
  return (
      <div className='about' id='about'>
          <div className="container d-md-flex justify-content-between my-5">
          <div className='col-md-5'>
              <h1 className='text-center pt-sm-5 '>About me.</h1>
                <p className='text-center customColor'>Frontend Developer</p>
                <p className='text-center customColor2 p-sm-3'>I am <b className='text-dark'>Ibrahim Atayev </b>Etiam porta quam at velit tempor facilisis. Aenean lacinia id justo sit amet laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel finibus tellus, ac blandit sapien. Praesent consequat volutpat enim, quis mollis eros laoreet suscipit. Aenean viverra, tortor non vestibulum sollicitudin, urna magna auctor quam, vitae facilisis est dolor quis augue. Maecenas urna justo, egestas a luctus sit amet, vehicula quis felis. Nam iaculis eros magna, et fringilla enim pretium sed. Duis vulputate lobortis metus.</p>
              </div>
              <div className='skills col-sm-5 mr-sm-4'>
                  <h1 className='text-center my-3 pt-5'>My current skills.</h1>
                    <ul class="list-group list-group-flush my-sm-3 mx-sm-5 px-sm-5 py-sm-5 list">
                    <li class="list-group-item">HTML <i className="fa-brands fa-html5 fa-lg"></i></li>
                    <li class="list-group-item">CSS/SCSS/Bootstrap/TailwindCSS <i className="fa-brands fa-css3-alt fa-lg"></i></li>
                    <li class="list-group-item">JavaScript/jQuery/AJAX <i className="fa-brands fa-js fa-lg"></i></li>
                    <li class="list-group-item">ReactJS <i className="fa-brands fa-react fa-lg"></i></li>
                    <li class="list-group-item">PHP <i className="fa-brands fa-php fa-lg"></i></li>
                    <li class="list-group-item">SQL/MariaDB/PostgreSQL <i className="fa-solid fa-database fa-lg"></i></li>
                    <li class="list-group-item">Firebase 9 <i className="fa-brands fa-google fa-lg"></i></li>
                    <li class="list-group-item">Git/Github <i className="fa-brands fa-github fa-lg"></i></li>
                    </ul>  
            </div>
              
          </div>
          <div className='text-center buttonGroup mt-sm-5'>
              <a href="/" target='_blank' rel='noreferer'>
                  <span className='button buttonDark'>Download CV</span>
              </a>
              <AnchorLink href="#contact">
                  <span className='button'>Contact me</span>
                  </AnchorLink>
         </div>
      </div>
  )
}

export default About