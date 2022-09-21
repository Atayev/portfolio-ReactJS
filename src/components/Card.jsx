import React from 'react'
import Card from 'react-bootstrap/Card';
function CardItem({name,info,photo,link}) {
    return (
            <Card className='my-md-4 mx-md-2 my-sm-5 mx-sm-5 my-1 mx-2 col-md-4 col-sm-5 col-lg-3'>
                <Card.Img variant="top" src={photo} />
                    <Card.Body>
                    <Card.Title className='fw-bold'> {name} </Card.Title>
                    <Card.Text className='text-justify fw-medium'>
                        {info}
                    </Card.Text>
                    <a className='button buttonDark' href={link} target='_blank' rel='noreferrer'>Go somewhere</a>
                    </Card.Body>
            </Card>
        )
}

export default CardItem