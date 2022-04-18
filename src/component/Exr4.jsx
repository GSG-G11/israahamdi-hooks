import React, { useState, useEffect } from 'react'

const Exr4 = () => {
    const [input,setInput] = useState('')
    const [image,setImage] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(()=>{
        const abortController = new AbortController();
        fetch(`https://robohash.org/${input}`,{ signal: abortController.signal })
        .then(res=>setImage(res.url))
        .catch(err=>console.log(err))
        return () => {
            abortController.abort();
          };
    },[input])
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <input type="text" value={input} onChange={handleChange} />
      <img  src={image} alt={input}/>
    </div>
  )
}

export default Exr4
