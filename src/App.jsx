import { useRef, useState, useId } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const inputRef = useRef()
  const id = useId()

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === '') return
    setItems((prev) => {
      return [...prev, value]
    })
    setFilteredItems((prev) => {
      return [...prev, value]
    })
    inputRef.current.value = ''
  }

  function onChange(e) {
    const value = e.target.value
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    )
  }

  return (
    <>
      Search:
      <input onChange={onChange} type='search' />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type='text' />
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
    </>
  )
}

export default App
