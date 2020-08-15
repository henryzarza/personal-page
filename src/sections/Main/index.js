import React from 'react';

import styles from './styles.module.css';

function Main() {
  return (
    <div className='text-center'>
      <h1 className='title'>
        Almost before we knew it, we had left the ground.
      </h1>
      <p className='base-text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        doloribus numquam minima at beatae. Error dolores maxime possimus vitae
        adipisci, sed animi corrupti vero ab saepe repellendus, impedit,
        deleniti voluptate.
      </p>
      <a
        className={`base-text ${styles.link}`}
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  );
}

export default Main;
