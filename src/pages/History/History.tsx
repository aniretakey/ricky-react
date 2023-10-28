import { ReactElement, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './history.module.css';

export const History = (): ReactElement => {
  const { history } = useAppSelector((state) => state.searchValues);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.login === '') {
      navigate('/login');
    }
  }, []);

  return (
    <div className={styles.history}>
      <h3 className={styles.title}>Query history</h3>
      <ul className={styles.list}>
        {history.map((item) => (
          <li className={styles.item} key={history.indexOf(item)}>
            Query: {item}
            <Link to={`/search/?name=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
