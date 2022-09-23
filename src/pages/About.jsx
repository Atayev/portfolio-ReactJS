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
                <p className='text-center customColor2 p-sm-3'>I am <b className='text-dark'>Ibrahim Atayev </b>Etiam porta quam at velit tempor facilisis. Aenean lacinia id justo sit amet laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel finibus tellus, ac blandit sapien. Praesent consequat volutpat enim, quis mollis eros laoreet suscipit. Aenean viverra, tortor non vestibulum sollicitudin, urna magna auctor quam, vitae facilisis est dolor quis augue. Maecenas urna justo, egestas a luctus sit amet, vehicula quis felis. Nam iaculis eros magna, et fringilla enim pretium sed. Duis vulputate lobortis metus.</p>
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