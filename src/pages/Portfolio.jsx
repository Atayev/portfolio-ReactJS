import React, {useEffect,useState} from 'react'
import CardItem from '../components/Card'

function Portfolio() {
  const [data, setData] = useState()
  useEffect(() => {
      const fetchData = async() => {
          const response =await fetch('../data.json')
          const data = await response.json()
          setData(data)
          
      }
      fetchData()
  }, [])
  
  return (
      <div className='portfolio' id='portfolio'>
        <div className='container'>
        <h1 className='text-center my-sm-3'>My Portfolio.</h1>
        <div className='d-flex justify-content-center flex-wrap'>
            {
              data?.projects?.map((pro) => (
                <CardItem
                  name={pro?.name }
                  info={pro?.info}
                  photo={pro?.photo}
                  link={pro?.link}
                  />
              ))
            }
        </div>
        
        
                 
          </div>
    </div>
  )
}

export default Portfolio