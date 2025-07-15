
const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options?.map(option => {
        return <label key={option}>
          <input type="radio" id={option} name={option} value={option}
            checked={value === option} onChange={({ target }) => setValue(target.value)} {...props} />
          {option}
        </label>
      })}
    </>
  )
}

export default Radio
