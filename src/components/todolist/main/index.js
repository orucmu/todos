import { useEffect } from 'react'

function Main({ listItems, setListItems, newTodos, setNewTodos, setVisible }) {

  useEffect(() => {

    if (listItems.length > 0) {
      setVisible(true)
    } else { setVisible(false) }
  }, [listItems])


  const toggleAll = () => {
    if (!listItems.every(item => item.isCompleted === true)) {
      listItems.forEach(item => setListItems([...listItems], [item.isCompleted = true]))
    } else if (listItems.every(item => item.isCompleted === true)) {
      listItems.forEach(item => setListItems([...listItems], [item.isCompleted = false]))
    }
  }

  const completed = (event) => {
    listItems.forEach(item => {
      if (event.target.dataset.key == item.id) {
        if (item.isCompleted === false) {
          setListItems([...listItems], [item.isCompleted = true])
        } else {
          setListItems([...listItems], [item.isCompleted = false])
        }
      }
    })
  }

  const destroy = (event) => {
    for (let i = listItems.length - 1; i <= listItems.length; i--) {
      if (event.target.dataset.key == listItems[i].id) {
        listItems.splice(i, 1)
        setListItems([...listItems])
        setNewTodos([...listItems])
        { break; }
      }
    }

  }


  return (
    <div>
      <div className='main'>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={toggleAll}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {newTodos.map((item) => (
            <li key={item.id} className={(item.isCompleted == true ? "completed" : "")} >
              <div className="view">
                <input className="toggle"
                  type="checkbox"
                  data-key={item.id}
                  onChange={completed}
                  checked={item.isCompleted}
                />
                <label
                  data-key={item.id}
                  onClick={completed}>{item.content}</label>
                <button
                  className="destroy"
                  onClick={destroy}
                  data-key={item.id}
                >
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Main