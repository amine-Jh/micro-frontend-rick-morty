import React from 'react'
import styles from "./CharacterList.module.css"
import CharacterCard from './CharacterCard'

const CharacterList = ({chars}) => {
  return (
    <div className={`${styles.char_list}`} >
    {chars.map( item=>  <CharacterCard name={item?.name}  imgUrl={item?.image} status={item?.status} />   )}
  </div>
  )
}

export default CharacterList