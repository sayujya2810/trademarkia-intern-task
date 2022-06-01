import React from 'react'

const HomeNav = (props) => {
  return (
    <div id='home-nav-container' style={{ borderRadius:"5px",backgroundColor:`${props.background}`, display:"flex", width:"80%", alignItems:"center", justifyContent:"space-between" ,height:`${props.height}px`, padding: `${props.padding_t}rem ${props.padding_r}rem ${props.padding_b}rem ${props.padding_l}rem` }} >
        <div style={{ display:"flex", alignItems:"center" }}>
          <img src='./images/logo.png' alt='logo' height={25} />
          <p style={{fontSize:"30px", fontFamily:"Prompt", fontWeight:"600", color:"#7161C5", marginLeft:"20px"}}>{props.title}</p>
        </div>

        {/* <div> */}
          <p style={{width:"24%", textAlign:"right"}}>{props.address}</p>
        {/* </div> */}

    </div>
  )
}

export default HomeNav