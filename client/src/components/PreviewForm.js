import React from 'react'

const PreviewForm = ({formParams}) => {
  return (
    <div>
      <h1>Preview Form</h1>
      title : {formParams.title}
      qty : {formParams.qty}
      price : {formParams.price}
      lineTotal : {formParams.lineTotal}

    </div>
  )
}

export default PreviewForm