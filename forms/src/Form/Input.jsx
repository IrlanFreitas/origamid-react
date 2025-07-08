import React from 'react'

const Input = ({ id, label, type, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id} style={{ marginBottom: 10 }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input
