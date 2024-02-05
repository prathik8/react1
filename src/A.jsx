import React from 'react';

const A = (props) => {
  return (
    <>
      <div className='style'>
        <li>
          <i className='fa fa-times' aria-hidden='true' onClick={props.onSelect} />
          {props.text}
        </li>
        <i className='fa-regular fa-pen-to-square' aria-hidden='true' onClick={props.onEdit}></i>
      </div>
    </>
  );
};

export default A;