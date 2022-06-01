import React, { useEffect, useState } from 'react'
import HomeNav from './HomeNav'
import "../styles/InvoiceForm.css"

const InvoiceForm = ({
    formParams,
    setFormParams,
    list,
    setList
}) => {

    const [items, setItems] = useState([])

    // const [title, setTitle] = useState("")
    // const [qty, setQty] = useState(0)
    // const [price, setPrice] = useState(0.0)
    // const [lineTotal, setLineTotal] = useState(0.0)
    // const [list, setList] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems = formParams

        setFormParams.setId("")
        setFormParams.setPrice(0.0)
        setFormParams.setQty(0)
        setFormParams.setTitle("")
        setFormParams.setLineTotal(0)
        setList([...list, newItems])

        console.log("formParams.list : ", list)

    }

    // when qty and price changes we set the state of lineTotal = qty * price
    useEffect(() => {
        setFormParams.setLineTotal(formParams.qty * formParams.price)
    },[formParams.qty, formParams.price])


    const handleIdChange = (e) => {
        setFormParams.setId(e.target.value)
    }

    const handleTitleChange = (e) => {
        setFormParams.setTitle(e.target.value)

        items.map(item => {
            if(item.title === formParams.title){
                setFormParams.setPrice(item.price)
                setFormParams.setId(item.id)
            }
        })
    }

    

    const handleQtyChange = (e) => {
        setFormParams.setQty(e.target.value)
        console.log(formParams.qty)
    }


    

    useEffect(() => {  
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((result) => 
                // setIsLoaded(true)
                setItems(result)
            )
    }, [])

    
    const d = new Date();

  return (
    <div>
        <div style={{margin:"2rem 10rem", borderRadius:"8px 8px 0px 0px", padding:"2rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderTop:"8px #7161C5 solid",}}>
            <HomeNav height={30} background={"#F9F8FF"} padding_t={4} padding_l={7} padding_r={7} padding_b={4} title="Invoice Generator" address="LegalForce RAPC Worldwide +1 877-794-9511 1580 West El Camino Real, Suite 10 Mountain View, California 94040 - 2479 United States"  />
            <div id='bill-container'>
                <div className='inner-container'>
                    <input id='transaction-name' type="text" placeholder="Enter Transaction Name" />
                    <p id='paymentDate'>Paid on {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}</p>
                </div>
                <div className='inner-container'>
                    <p style={{fontWeight:"500"}}>Amount Paid</p>
                    <p id='totalAmount'>$0.00/-</p>
                </div>
            </div>
        </div>
        <div id='bill-form'>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Qty</th>
                            <th>Line Total</th>
                        </tr>
                    </thead>

                    <tbody>

                            <tr>
                                <td>
                                    <select onChange={handleTitleChange} defaultValue={"default"}>
                                        <option value={"default"}>Choose an option</option>
                                        {
                                            items.map((item) => {
                                                // setId(item.id)
                                                // setPrice(item.price)
                                                return(
                                                    <option key={formParams.id}>{item.title}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                                <td>
                                    {
                                        items.map((item) => {
                                            if(item.title === formParams.title){
                                                // handlePriceChange()  
                                                return(
                                                    <p key={formParams.id}>{formParams.price}</p>
                                                )
                                            }
                                        })
                                    }
                                </td>
                                <td>
                                    <input type="number" placeholder='Quantity' onChange={handleQtyChange} />
                                </td>
                                <td>
                                    <input value={formParams.lineTotal} type={"text"} style={{outline:"none", border:"none"}}  readOnly />
                                </td>
                                <td><button type='submit'>Add Item</button></td>
                            </tr>
                    </tbody>
                </table> 
            </form>
        </div>
    </div>
  )
}

export default InvoiceForm
