import { useState } from 'react';
import React from 'react'

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const onStar = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";
  const offStar = "https://cdn-icons-png.flaticon.com/512/2893/2893811.png";

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  if(isFavorite){
    return(
      <img src={onStar} alt="Favorite" className='star' onClick={handleClick}/>
    )
  }else{
    return(
      <img src={offStar} alt="NoFavorite" className='star' onClick={handleClick} />
    )
  }
  
}
