import React, { useState } from 'react'
import HomeNav from '../components/HomeNav'
import InvoiceForm from '../components/InvoiceForm'
import PreviewForm from '../components/PreviewForm'
import "../styles/InvoiceGenerator.css"





const InvoiceGenerator = () => {

const [invoiceName, setInvoiceName] = useState("Invoice#01")
const [edit, setEdit] = useState(true)
const [preview, setPreview] = useState(false)

const [qty, setQty] = useState(0)
const [title, setTitle] = useState("")
const [price, setPrice] = useState(0.0)
const [lineTotal, setLineTotal] = useState(0.0)
const [id, setId] = useState('')

const [list, setList] = useState([])


const formParams = {
    id,
    qty,
    title,
    price,
    lineTotal,
}

const setFormParams = {
    setId,
    setQty,
    setPrice,
    setLineTotal,
    setTitle,
}


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
        {
            edit === true && preview === false ?
                <>
            <div style={{display:"flex",height:"5rem",boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}} >
                <HomeNav  title="Invoice Generator" height={10} padding_t={2} padding_l={6} padding_r={0} padding_b={0} />
            </div>
            <div id='invoice-navigation'>
                <div>
                    <input id='invoice-name' type="text" onChange={(e) =>{ setInvoiceName(e.target.value) }} placeholder={invoiceName} value={invoiceName}  />
                </div>
                <div>
                    <input id='preview-invoice' onClick={toggleToPreviewMode}  type='button' value="Preview" />
                    <input id='edit-invoice' style={{color:"#7161C5"}} onClick={toggleToEditMode} type='button' value="Edit" />
                </div>
                <div>
                    
                    <button id='save-changes' type='submit' value="Save changes" >Save changes</button> {/* Add new column btn*/}
                    <input id='save-invoice' type='button' value="Save Invoice" />
                </div>
            </div>
            <hr style={{ border: "0", borderTop: ".01px solid #d1d1d1", borderBottom: "0px dashed #fff"}} />
            <InvoiceForm formParams={formParams} setFormParams={setFormParams} list={list} setList={setList} />
            {/* <InvoiceForm qty={qty} setQty={setQty} title={title} setTitle={setTitle} price={price} setPrice={setPrice} lineTotal={lineTotal} setLineTotal={setLineTotal} /> */}
        </>

        :

        <>
            <div style={{display:"flex",height:"5rem",boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}} >
                <HomeNav  title="Invoice Generator" height={10} padding_t={2} padding_l={6} padding_r={0} padding_b={0} />
            </div>
            <div id='invoice-navigation'>
                <div>
                    <input id='invoice-name' type="text" onChange={(e) =>{ setInvoiceName(e.target.value) }} placeholder={invoiceName} value={invoiceName}  />
                </div>
                <div>
                    <input id='preview-invoice' style={{color:"#7161C5"}} onClick={toggleToPreviewMode}  type='button' value="Preview" />
                    <input id='edit-invoice' onClick={toggleToEditMode} type='button' value="Edit" />
                </div>
                <div>
                    <input id='export-invoice' type='button' value="Export as PDF" />
                    <input id='save-invoice' type='button' value="Save Invoice" />
                </div>
            </div>
            <hr style={{ border: "0", borderTop: ".01px solid #d1d1d1", borderBottom: "0px dashed #fff"}} />
            <PreviewForm formParams={formParams} list={list} />
            
        </>
        }
        {/* <>
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
        </>

        {edit === true && preview === false ? <InvoiceForm /> : <PreviewForm />} */}

    </div>
  )
}

export default InvoiceGenerator