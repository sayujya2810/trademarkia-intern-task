import React from 'react'

const PreviewForm = ({formParams, list}) => {
  
  return (
    <div>
      <h1>Preview Form</h1>
      {/* title : {formParams.title}
      qty : {formParams.qty}
      price : {formParams.price}
      lineTotal : {formParams.lineTotal} */}
      <table>
        <thead>
          <tr>
            <td>Description</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Line Total</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item) => {
              return(
                <tr>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.lineTotal}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PreviewForm