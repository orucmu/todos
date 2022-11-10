import { useState } from 'react'
import Header from './todolist/header/index.js';
import Main from './todolist/main/index.js';
import Footer from './todolist/footer/index.js';

function Todolist() {

    const [isVisible, setVisible] = useState(true)
    const [listItems, setListItems] = useState([
        { id: 0, content: "Learn JavaScript", isCompleted: true },
        { id: 1, content: "Learn React", isCompleted: false },
        { id: 2, content: "Have a life!", isCompleted: false }
    ])

    const [newTodos, setNewTodos] = useState(listItems)

    return (
        <div>
            <div className="App">
                <Header
                    setListItems={setListItems}
                    listItems={listItems}
                    setNewTodos={setNewTodos}
                    setVisible={setVisible}
                />
                <Main
                    listItems={listItems}
                    setListItems={setListItems}
                    newTodos={newTodos}
                    setNewTodos={setNewTodos}
                    setVisible={setVisible}
                />
                {isVisible && <Footer
                    listItems={listItems}
                    setListItems={setListItems}
                    setNewTodos={setNewTodos}
                    setVisible={setVisible}
                />}
            </div>
        </div>
    )
}

export default Todolist