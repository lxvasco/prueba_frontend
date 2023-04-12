import { useState } from 'react';
import React from 'react'

export const FavoriteButton = ({ mision, date, launchpad }) => {
  let data = localStorage.getItem("favorite");
  data = data.length > 0 ? JSON.parse(data) : [];
  let initialValue = data.filter(x=>x.mision === mision).length>0 ? true : false
  const [isFavorite, setIsFavorite] = useState(initialValue);

  const saveItem = () => {
    let oldArray = localStorage.getItem("favorite")
    let newArray;
    if(oldArray || oldArray?.length > 0){
      oldArray = JSON.parse(oldArray);
      if(oldArray.filter(x=>x.mision === mision).length>0){
        setIsFavorite(false);
        oldArray = oldArray.filter(x=>x.mision !== mision);
        localStorage.setItem("favorite",JSON.stringify(oldArray))
      }else{
        setIsFavorite(true)
        newArray = [...oldArray];
        let newItem = {mision,date,launchpad};
        console.log(newItem)
        newArray.push(newItem);
        localStorage.setItem("favorite",JSON.stringify(newArray))
      }
    }else{
      newArray = [];
      setIsFavorite(true)
      let newItem = {mision,date,launchpad};
      newArray.push(newItem);
      localStorage.setItem("favorite",JSON.stringify(newArray))    
    }
  }


  const onStar = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";
  const offStar = "https://cdn-icons-png.flaticon.com/512/2893/2893811.png";


  return(
    <img src={isFavorite?onStar:offStar} alt="NoFavorite" className='star' onClick={saveItem}/>
  )

}
