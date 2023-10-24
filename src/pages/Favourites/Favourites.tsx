import { ReactElement } from 'react';
import styles from './favourites.module.css';

export const Favourites = (): ReactElement => {
  return (
    <div className={styles.favourites}>
      <h3 className={styles.title}>Favourites</h3>
      <ul className={styles.list} />
    </div>
  );
};
