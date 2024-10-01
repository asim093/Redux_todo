import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtodo, EditTodo, removeTodo } from '../Redux/Reducers/Todoslice';

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const Tododata = useSelector((state) => state.Todo.Todos);

  const Adtodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo) {
      dispatch(Addtodo(newTodo));
      inputRef.current.value = ''; // Clear input field
    }
  };

  return (
    <div className='app-container'>
      <h1 className='app-title'>Todo App</h1>
      <div className='todo-input-container'>
        <input type='text' ref={inputRef} placeholder='Enter Your Todo' />
        <button onClick={Adtodo}>Add Todo</button>
      </div>

      <div className='todo-list-container'>
        {Tododata.length === 0 ? (
          <p className='empty-message'>You have no todos yet! Start adding some.</p>
        ) : (
          <ul>
            {Tododata.map((item, index) => (
              <div key={index} className='todo-item'>
                <li>{item}</li>
                <div className='button-group'>
                  <button className='delete-btn' onClick={() => dispatch(removeTodo(index))}>
                    Delete
                  </button>
                  <button className='edit-btn' onClick={() => dispatch(EditTodo(index))}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
