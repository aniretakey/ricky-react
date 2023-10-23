import { ReactElement, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './Like.module.css';

export const Like = (): ReactElement => {
  const [like, setLike] = useState(false);
  const handleLike = (): void => {
    setLike((prev) => !prev);
  };
  return (
    <div className={styles.like} onClick={handleLike}>
      {like ? <AiFillHeart style={{ color: 'red' }} /> : <AiOutlineHeart />}
    </div>
  );
};
