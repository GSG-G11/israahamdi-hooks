import React, {useState, useEffect} from 'react'

const Exr1 = () => {
    const [count,setCount] = useState(0)
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }
    useEffect(()=>{
        document.addEventListener('mousedown',incrementCount)

        return () => {
         document.removeEventListener('mousedown',incrementCount)
        }
    })

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <h1 >{count}</h1>
    </div>
  )
}

export default Exr1
