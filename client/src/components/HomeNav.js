import React from 'react'

const HomeNav = (props) => {
  return (
    <div id='home-nav-container' style={{ display:"flex", alignItems:"center" ,height:`${props.height}px`, padding: `${props.padding_t}rem ${props.padding_r}rem ${props.padding_b}rem ${props.padding_l}rem` }} >
        <img src='./images/logo.png' alt='logo' height={25} />
        <p style={{fontSize:"30px", fontFamily:"Prompt", fontWeight:"600", color:"#7161C5", marginLeft:"20px"}}>{props.title}</p>
    </div>
  )
}

export default HomeNav