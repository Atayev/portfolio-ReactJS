import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Portfolio() {
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const response =await fetch('../data.json')
            const data = await response.json()
            setData(data)
            
        }
        fetchData()
    },[])
    
  return (
      <div className='portfolio' id='portfolio'>
          <div className='container'>
              <h1 className='text-center my-sm-3'>My Portfolio.</h1>
              {
                  Array(data)?.map((project) => {
                      return (
                        <Card className='col-sm-4 col-md-4 my-sm-4'>
                        <Card.Img variant="top" src={project.projectPhoto[0]} />
                        <Card.Body>
                          <Card.Title>{project.projectName}</Card.Title>
                            <Card.Text>
                                {data.projectInfo}
                            </Card.Text>
                            <Button className='button buttonDark' onClick={()=>console.log(project.projectLink)}>Go somewhere</Button>
                        </Card.Body>
                        </Card>
                      )
                  })
                }

              
          </div>
    </div>
  )
}

export default Portfolio