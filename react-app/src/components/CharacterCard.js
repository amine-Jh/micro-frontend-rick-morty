import React from 'react'
import styles from "./CharacterCard.module.css"

const CharacterCard = ({name,imgUrl,status}) => {
  return (
    <div  className={`${styles.char_card}`}>
      
    <img  className={`${styles.image}`} src={imgUrl} alt="" />
    <div  className={`${styles.char_name}`} >
    {name}
    </div>

    <div  className={`${styles.char_type}`} >
        {status}
    </div>
  </div>
  )
}

export default CharacterCard