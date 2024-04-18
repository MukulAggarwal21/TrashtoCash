import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const sell = () => {
  return (
    <>
      <h1 className='text-center pt-4'>Sell your Plastic and get assured cashbacks and deals🤝</h1>
      <Form>
        <Form.Group className="mb-3 mt-5 my-5 m-5  " controlId="prodct">
          <Form.Label >Add Your Product Details</Form.Label>
          <Form.Control type="product" placeholder="My product is....." />
        </Form.Group>

        <Form.Group className="mb-0 mt-5  m-5 " controlId="fileupload">
          <Form.Label>Upload Your Plastic Images Here</Form.Label>
          <Form.Control type="file" placeholder="FILE Updloading..." style={{ height: '40px' }} />
        </Form.Group>
        <Button className='buttonsell' variant="outline-warning">Upload It!!</Button>
      </Form>

      <img style={{height:'220px' , width:'600px' ,alignItems:'center' , marginLeft:'390px', marginTop:'10px' }}  src="https://www.wikihow.com/images/a/a6/Recycle-Aluminum-Cans-and-Plastic-Bottles-and-Earn-Cash-Step-10.jpg" alt="img" />
    </>
  )
}

export default sell
