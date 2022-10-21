import { useRef, useState, useMemo } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    if (!query) return items
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === '') return
    setItems((prev) => {
      return [...prev, value]
    })

    inputRef.current.value = ''
  }

  return (
    <>
      Search:
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='search'
      />
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
