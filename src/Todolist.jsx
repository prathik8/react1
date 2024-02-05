import React, { useState } from 'react';
import A from './A';

const Todolist = () => {
  const [val, setval] = useState('');
  const [item, setitem] = useState([]);

  const Value = (event) => {
    setval(event.target.value);
  };

  const abc = () => {
    setitem((olde) => {
      return [...olde, val];
    });
    setval('');
  };

  const clear = (id) => {
    setitem((olde) => {
      return olde.filter((array, index) => index !== id);
    });
  };

  const editTask = (id) => {
    const edittask = item.find((array, index) => index === id);
    if (edittask !== undefined) {
      setval(edittask);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='box'>
          <h2>To-do-list</h2>

          <input type='text' placeholder='enter your items' value={val} onChange={Value}></input>
          <button onClick={abc}> + </button>
          <ul>
            {item.map((itemval, index) => {
              return <A key={index} id={index} text={itemval} onSelect={() => clear(index)} onEdit={() => editTask(index)} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;