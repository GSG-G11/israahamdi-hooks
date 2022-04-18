import React, { useState, useEffect } from "react";

const Exr5 = () => {
  const [data, setData] = useState("");
  const [loading, isLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    name:'',
    email:'',
  });

  const handleChange = ({ target: { name, value } }) => {
    setEditData((prev)=>{return {...prev,[name]:value}});
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        isLoading(false);
      })
      .catch((err) => console.log(err));
    return () => {
      abortController.abort();
    };
  }, []);
  const deleteUser = (id) => {
    setData((prevData) => {
      return prevData.filter((user) => user.id !== id);
    });
  };
  const editDataForm = (user) => {
    setEdit(true);
    setEditData(user);
  };
  const editUser = (e) => {
    e.preventDefault();
    data.map((user)=>{
     return  user.id === editData.id ? {...user, email: editData.email, name: editData.name } : user
    })
    setData((prev)=>prev.map((user)=>{
      return  user.id === editData.id ? {...user, email: editData.email, name: editData.name } : user
     }))
    setEdit(false)
   }

  return (
    <div>
        {edit ? (
        <div style={{display:'flex',flexDirection:'column',width:'30vw',margin:'1em auto'}}>
          <input
            type="text"
            value={editData.name}
            name="name"
            onChange={(e) => handleChange(e)}
            style={{display:'inline-block',margin:'1em',padding:'0.5em'}}
          />
          <input
            type="text"
            value={editData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            style={{display:'inline-block',margin:'1em',padding:'0.5em'}}
          />
          <button onClick={(e)=>editUser(e)} style={{display:'inline-block',margin:'1em',padding:'0.5em'}}>Edit</button>
        </div>
      ) : null}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {loading ? (
          <p>loading...</p>
        ) : (
          data.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  border: "1px solid red",
                  margin: "1em",
                  listStyle: "none",
                  padding: "1em",
                }}
              >
                <h1>{item.name}</h1>
                <p>{item.email}</p>
                <button
                  onClick={() => deleteUser(item.id)}
                  style={{ marginRight: "0.5em" }}
                >
                  Delete
                </button>
                <button onClick={() => editDataForm(item)}>Edit</button>
              </li>
            );
          })
        )}
      </ul>
    
    </div>
  );
};

export default Exr5;
