import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {liked ? (
        <FavoriteIcon className="heart-icon" style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon className="heart-icon" />
      )}
    </div>
  );
};

export default LikeButton;