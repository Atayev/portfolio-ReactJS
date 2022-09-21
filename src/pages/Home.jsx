import Typewririter from 'typewriter-effect'

function Home() {
 
  return (
    <div className='main' id='home'>
      <div className='caption'>
        <h5 className='text-white fs-2 fw-bold text-center'>Hello</h5>
        <h1 className='text-white text-center mb-5'>
          <span className='fs-2 typeWriterP'>I am</span>
          <span className='fs-1'>
            <Typewririter
              className='mb-md-4'
              options={{
                loop:true,
                autostart: true
              }
              }
              onInit={(typeWriter) => {
                typeWriter
                  .changeDelay(200)
                  .typeString("Ibrahim Atayev")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(' Frontend Developer')
                  .pauseFor(5000) 
                  .changeDeleteSpeed(300)
                  .start()
              }}
            />
          </span>
        </h1>
        <div className='social text-center m-auto'>
          <a href="https://github.com/Atayev" target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github text-white fa-xl  m-3"></i>
          </a>
          <a href='https://www.linkedin.com/in/atayevibrahim/' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-linkedin text-white fa-xl"></i>
          </a>
        </div>
      </div>    
    </div>
      
  )
}

export default Home