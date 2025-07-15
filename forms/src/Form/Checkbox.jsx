import React from 'react'

const Checkbox = ({ options, value, setValue, ...props }) => {

  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter(itemValue => itemValue !== target.value))
    }
  }

  return (
    <>
      {options?.map(option => {
        return <label key={option}>
          <input type="checkbox" name={option}
            id={option} checked={value.includes(option)}
            value={option} onChange={handleChange}
            {...props} />
          {option}
        </label>
      })}
    </>
  )
}

export default Checkbox
