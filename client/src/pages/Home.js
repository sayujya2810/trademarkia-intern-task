import React from 'react'
import HomeNav from '../components/HomeNav'
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
        <HomeNav height={30}  padding_t={3} padding_l={6} padding_r={0} padding_b={0}/>
        <div id='home-container'>
            <h1 id='home-head'>Invoice Generator</h1>
            <div id='creator-container'>
                <input id='invoice-create' type='text' placeholder='Enter Name' />
                <input id='invoice-create-btn' type='button' value='Generate Invoice' />
            </div>
        </div>
        <div id='saved-invoices'>
            <div>
                <h2 style={{fontFamily:"Prompt"}}>Saved Invoices</h2>
                <div>
                    {/* Here there will be a map function which will fetch all the invioices */}
                    <div className='invoice-card'>
                        <p className='invoice-card-head'>invoice1</p>
                        <p>15th May 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <img src='./images/invoice.png' alt='invoice' id='inv-img' />
    </div>
  )
}

export default Home