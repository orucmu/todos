import { useState, useEffect } from 'react'
const initialFormValues = { content: "", isCompleted: false }

function Header({ listItems, setListItems, setVisible, setNewTodos }) {

  
  useEffect(() => {
    setForm(initialFormValues)
    if (listItems.length > 0) {
      setVisible(true)
    } else { setVisible(false) }
  }, [listItems])
 
  const [form, setForm] = useState(initialFormValues);
  
  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value, isCompleted: false, id: listItems.length === 0 ? 0 : listItems[listItems.length - 1].id + 1 })

  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (form.content === "") {
      return false
    } else {
      setListItems([...listItems, form])
      setNewTodos([...listItems, form])
    }
    console.log(listItems);

  }

  return (
    <div className='header'>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name='content'
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          autoFocus
          value={form.content}
        />
      </form>
    </div>
  )
}

export default Header
