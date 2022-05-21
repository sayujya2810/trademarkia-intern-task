import React from 'react'
import HomeNav from '../components/HomeNav'

const InvoiceGenerator = () => {
  return (
    <div>
        <div style={{display:"flex",height:"5rem",boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}} >
            <HomeNav  title="Invoice Generator" height={10} padding_t={2} padding_l={6} padding_r={0} padding_b={0} />
        </div>
        {/* <hr style={{ border: "0", borderTop: ".01px solid #d1d1d1", borderBottom: "0px dashed #fff", marginTop:"2rem"}} /> */}



    </div>
  )
}

export default InvoiceGenerator