import { useEffect } from 'react'

function Footer({ listItems, setListItems, setNewTodos, setVisible }) {

    useEffect(() => {
        if (listItems.length > 0) {
            setVisible(true)
        } else { setVisible(false) }
    }, [listItems])

    const filterActive = () => {
        setNewTodos(listItems.filter(item => item.isCompleted === false))
    }
    const filterCompleted = () => {
        setNewTodos(listItems.filter(item => item.isCompleted === true))
    }
    const filterAll = () => {
        setNewTodos(listItems)
    }

    const leftItems = listItems.filter(item => item.isCompleted === false)

    const clearCompleted = () => {
        for (let i = listItems.length - 1; i <= listItems.length; i--) {
            if (i >= 0) {
                if (listItems[i].isCompleted === true) {
                    listItems.splice(i, 1)
                    setListItems([...listItems])
                    setNewTodos([...listItems])
                }
            } else { break; }
        }
    }

    return (
        <div className='footer'>
            <span className="todo-count">
                <strong>{leftItems.length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <input
                        id='All'
                        name="filter"
                        type="radio"
                        onClick={filterAll}
                    />
                    <label htmlFor="All">All</label>
                </li>
                <li>
                    <input
                        id='Active'
                        name="filter"
                        type="radio"
                        onClick={filterActive}
                    />
                    <label htmlFor="Active">Active</label>
                </li>
                <li>
                    <input
                        id='Completed'
                        name="filter"
                        type="radio"
                        onClick={filterCompleted}
                    />
                    <label htmlFor="Completed">Completed</label>
                </li>
            </ul>
            <button
                className="clear-completed"
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </div>
    )
}

export default Footer