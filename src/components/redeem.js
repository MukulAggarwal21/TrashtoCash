import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css'
import './redeem.css'
const redeem = () => {
  return (
    <>
      <div className='d-flex justify-content-center justify-content-around redeemtop '>
        {/* Card1 */}
        
        <Card  className='card1' style={{ width: '18rem', height: '400px' }}>
          <Card.Img  variant="top" src="https://tse3.mm.bing.net/th?id=OIP.dDlDNazOrabqgRw_DufFJgHaDt&pid=Api&P=0&h=180" style={{ width: '17.9rem', height: '200px' }} />
          <Card.Body  className='textredeem'>
            <Card.Title>BOOK MY SHOW</Card.Title>
            <Card.Text>
              40% off on all Bookings
              Grab it Fast!!
              <p className="text-success">20 Coins</p>

            </Card.Text>
            <Button variant="primary" className='buttonredeem'>Redeem</Button>
          </Card.Body>
        </Card>

        {/* card2 */}
        <Card className='card2' style={{ width: '18rem', height: '400px' }}>
          <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.P5wYVxIG_oyskk_xgxLMiwHaEK&pid=Api&rs=1&c=1&qlt=95&w=182&h=102" style={{ width: '17.9rem', height: '200px' }} />
          <Card.Body className='textredeem'>
            <Card.Title>SWIGGY</Card.Title>
            <Card.Text>
              40% off on all chinese food items
              Grab it Fast!!

              <p className="text-success">25 Coins</p>
            </Card.Text>
            <Button variant="primary" className='buttonredeem'>Redeem</Button>
          </Card.Body>
        </Card>

        {/* card3 */}
        <Card className='card3' style={{ width: '18rem', height: '400px' }}>
          <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.oNLClpaYdU5z3p0BEiJfCgHaEW&pid=Api&rs=1&c=1&qlt=95&w=178&h=104" style={{ width: '17.9rem', height: '200px' }} />
          <Card.Body  className='textredeem'>
            <Card.Title>ZOMATO</Card.Title>
            <Card.Text>
              50% off on all chinese food items
              Grab it Fast!!
              <p className="text-success">35 Coins</p>

            </Card.Text>
            <Button variant="primary"  className='buttonredeem'>Redeem</Button>
          </Card.Body>
        </Card>
      </div>
      <h2 className='text-center	pt-5'>A lot of more Exciting Gifts are coming...🎁</h2>
    </>
  )
}

export default redeem
