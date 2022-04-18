import React, { useState, useEffect } from 'react'

const Exr3 = () => {
    const [input,setInput] = useState('')
    const [images,setImages] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(()=>{
        const abortController = new AbortController();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=2YgyX5d2o4vewW2ZTHsrq02aVVw9SEF7`,{ signal: abortController.signal })
        .then(res=>res.json())
        .then(({data})=>  setImages(data))

        .catch(err=>console.log(err))
        return () => {
            abortController.abort();
          };
    },[input])
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <input style={{display:'block',margin:'1em auto'}}type="text" value={input} onChange={handleChange} />
      {images.map((ele) => {
        const imgURL = ele.images.original.url;
        return <img src={imgURL} alt="Search" key={imgURL} />;
      })}
     
    </div>
  )
}

export default Exr3
