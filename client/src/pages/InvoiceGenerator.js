import React, { useState } from 'react'
import HomeNav from '../components/HomeNav'
import InvoiceForm from '../components/InvoiceForm'
import PreviewForm from '../components/PreviewForm'
import "../styles/InvoiceGenerator.css"





const InvoiceGenerator = () => {

const [invoiceName, setInvoiceName] = useState("Invoice#01")
const [edit, setEdit] = useState(true)
const [preview, setPreview] = useState(false)

const toggleToEditMode = () => {
    setPreview(false)
    setEdit(true)
    console.log("Edit Mode ON")
}

const toggleToPreviewMode = () => {
    setPreview(true)
    setEdit(false)
    console.log("Preview Mode ON")
}

  return (
    <div>
        <div style={{display:"flex",height:"5rem",boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}} >
            <HomeNav  title="Invoice Generator" height={10} padding_t={2} padding_l={6} padding_r={0} padding_b={0} />
        </div>
        <div id='invoice-navigation'>
            <div>
                <input id='invoice-name' type="text" onChange={(e) =>{ setInvoiceName(e.target.value) }} placeholder={invoiceName} value={invoiceName}  />
            </div>
            <div>
                <input id='preview-invoice' onClick={toggleToPreviewMode}  type='button' value="Preview" />
                <input id='edit-invoice' onClick={toggleToEditMode} type='button' value="Edit" />
            </div>
            <div>
                <input id='export-invoice' type='button' value="Export as PDF" />
                <input id='save-invoice' type='button' value="Save Invoices" />
            </div>
        </div>
        <hr style={{ border: "0", borderTop: ".01px solid #d1d1d1", borderBottom: "0px dashed #fff"}} />

        {edit === true ? <InvoiceForm /> : <PreviewForm />}
        



    </div>
  )
}

export default InvoiceGenerator