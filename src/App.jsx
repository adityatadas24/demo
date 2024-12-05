import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editid, setEditId] = useState([]);
  const [editText, setEditText] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if(input.trim() !== ''){
    setTodos([...todos, { id: Date.now(), text: input, complete: false }]);
    setInput('')
    }
    else{
      alert('fill input')
    }
  }

  function togleTodo(id) {
    const toggle = todos.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setTodos(toggle);
  }

  function deleteTodo() {
    setTodos(todos.filter((item) => !item.complete));
  }

  function saveTodo(id) {
    const toggles = todos.map((item) =>
      item.id === id ? { ...item, text: editText} : item
    );
    setTodos(toggles);
    setEditId([])
    setEditText('')
  }

  function editTodo(id, text) {
    setEditId(id);
    setEditText(text);
  }

  return (
    <div>
    <h1>todos</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => togleTodo(item.id)}
            />
            {editid === item.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <p
                style={{
                  textDecorationLine: item.complete ? "line-through" : "none",
                }}
              >
                {item.text}
              </p>
            )}

            {editid === item.id ? (
              <button onClick={() => saveTodo(item.id)}>save</button>
            ) : (
              <button onClick={() => editTodo(item.id, item.text)}>edit</button>
            )}

            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
