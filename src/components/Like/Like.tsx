import { ReactElement, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './Like.module.css';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';

interface LikeProps {
  id: number; 
}
export const Like = ({ id }: LikeProps): ReactElement => {
  const currentUserFavourites = useAppSelector((state) => state.auth.currentUser.favourites);
  const { addFavouritesForUser, removeFavouritesForUser} = useActions();
  const [like, setLike] = useState(false);
  const handleLike = (): void => {
    setLike((prev) => !prev);
    const likeExist = currentUserFavourites.some((item) => item === id);

    if (likeExist) {
      removeFavouritesForUser(id)
    } else {
      addFavouritesForUser(id);
    }
  };
  return (
    <div className={styles.like} onClick={handleLike}>
      {like ? <AiFillHeart style={{ color: 'red' }} /> : <AiOutlineHeart />}
    </div>
  );
};
