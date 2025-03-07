import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [conter, setCounter] = useState(0);

  return (
    <button
      className={styles.btn}
      onClick={() => setCounter((prev) => prev + 1)}
    >
      Counter {conter}
    </button>
  );
};
