import { useEffect, useState } from 'react'
import Typical from 'react-typical'

function Home() {
  const cap= [' Ibrahim Atayev', ' Frontend Developer']
  let [caption, setCaption] = useState('')
  const [phase, setPhase] = useState('Typing')
  const [index,setIndex] = useState(0)
  useEffect(() => {
    setPhase('Pausing')
    const nextCaption = cap[index].slice(0, caption.length + 1)
    const timeout = setTimeout(() => {
      if(nextCaption === caption) return
      setCaption(cap[index].slice(0,caption.length+1))
    }, 150)
    // setPhase('Deleting')
    // if (phase === 'Deleting' && nextCaption===caption) {
    //   const timeout2 = setTimeout(() => setCaption(cap[index].slice(0, caption.length - 1)), 300)
    //   return ()=>clearTimeout(timeout2)
    // }
     
    return ()=> clearTimeout(timeout)
  },[caption])

  return (
    <div className='main'>
      <div className='caption'>
        <h5 className='text-white fs-1 fw-bold text-center mb-md-2'>Hello</h5>
        <h1 className='text-white text-center'>
          <span className='fs-5 mb-md-5 fw-bold'>I am</span>
          <span className='fs-5 blinkCursor' >
            {caption}
          </span>
        </h1>
      </div>    
    </div>
      
  )
}

export default Home