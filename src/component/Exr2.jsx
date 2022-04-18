import React, { useState, useEffect } from 'react'

const Exr2 = () => {
    const [coor,setCoor] = useState({x:0,y:0})
    const [background,setBackground] = useState('blue')

    const handleMouseMove = (e) => {
        if(window.innerWidth/2 > e.clientX){
            setBackground('tomato')
            // document.querySelector('body').style.backgroundColor = 'tomato'
        }
        else {
            setBackground('blue')
            // document.querySelector('body').style.backgroundColor = 'blue'
        }
        setCoor({x:e.clientX,y:e.clientY})
    }
    useEffect(()=>{
        document.addEventListener('mousemove',handleMouseMove)
        return () => {
            document.removeEventListener('mousemove',handleMouseMove)
        }
    })
  return (
    <div >
      <p style={{display:'flex',justifyContent:'center',padding:'1em',background :background,height:"20px",width:"90vw",margin:'0.5em auto'}}>I'am now on X :{coor.x} and Y:{coor.y}</p>
    </div>
  )
}

export default Exr2
