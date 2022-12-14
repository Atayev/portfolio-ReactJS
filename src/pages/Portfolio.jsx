import React, {useEffect,useState} from 'react'
import CardItem from '../components/CardItem'

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
  console.log(data)
  return (
      <div className='portfolio' id='portfolio'>
        <div className='container pt-4'>
        <h1 className='text-center py-sm-5'>My Portfolio.</h1>
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