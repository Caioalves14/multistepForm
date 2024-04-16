import React from 'react'

const UserFoem = ({data, updateFielHandler}) => {
  return (
    <div className='form-control'>
      <label htmlFor="name">Nome:</label>
      <input type="text" name='text' id='name' placeholder='Digite seu nome' required value={data.name || ""} onChange={(e) => updateFielHandler("name", e.target.value)}/>
      <label htmlFor="email">emai:</label>
      <input type="emial" name='email' id='email' placeholder='Digite seu e-mail' required value={data.email || ""} onChange={(e) => updateFielHandler("email", e.target.value)}/>
    </div>
  )
}

export default UserFoem