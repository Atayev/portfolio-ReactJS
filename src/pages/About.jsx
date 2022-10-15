import React,{useState,useEffect} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {
  const [data, setData] = useState()
      useEffect(() => {
        const fetchData = async() => {
            const response =await fetch('../data.json')
            const data = await response.json()
            setData(data?.skill)
        }
        
        fetchData()
    }, [])
  
  return (
      <div className='about' id='about'>
          <div className="container d-md-flex justify-content-around my-5">
          <div className='col-md-5'>
              <h1 className='text-center pt-sm-5 '>About me.</h1>
                <p className='text-center customColor'>Frontend Developer</p>
                <p className='text-center customColor2 p-sm-3'>I am <b className='text-dark'>Ibrahim Atayev </b>Hi! I am a Frontend Developer with experience more than 1 year.I have studied Computer Science which provided me with some outstanding and technical skills. I consider myself equipped with most of web development skills, but I know I still need to learn a lot more. I am highly trainable and can easily learn tasks. If I don't have experience with software or skill, I am doing all the research to study it. I believe in hard work and honesty, I can make your job in time with high quality.</p>
              </div>
              <div className='col-md-5'>
                  <h1 className='text-center pt-sm-5'>My current skills.</h1>
                  <ul className="list-group list-group-flush my-sm-3 mx-sm-5 py-sm-5 list">
                    {
                      data?.map((info) => {
                      return (
                        <li class="list-group-item">{info.skillName}<i className={info.skillIcon}></i></li>
                                  )
                          })}
                    </ul>  
            </div>
              
          </div>
          <div className='text-center buttonGroup mt-sm-5'>
              <a href="https://drive.google.com/file/d/1-vzfhCPiM6ZKKjPloFhUeUrj8al6yPFd/view" target='_blank' rel='noreferrer'>
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