import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './error.module.css';

export const Error = (): ReactElement => {
  return (
    <div className={styles.error}>
      <div className={styles.errorImage}>
        <Link to="/" className={styles.linkToHome} />
      </div>
      <p className={styles.errorText}>The page you are trying to search has been moved to another universe.</p>
    </div>
  );
};
