import React, { useEffect, useState } from 'react'
import CharacterList from './components/CharacterList'
import data from "./components/data"
const App = ( {props} ) => {
  
  const [chars, setChars] = useState([])
  console.log("toggle value ....",props)
  useEffect(() => {

let url=`https://rickandmortyapi.com/api/character/?name=${props.artistName}`;

fetch(url)
.then((response) => response.json())
  .then((data) =>{ 
    console.log("fiieieiei",data)
    setChars(data.results)})
.catch((err) => console.error(`Fetch problem: ${err.message}`));
    
  
  }, [props.artistName])
  
  let lang = ['Java', 'DotNet', 'Python'];
    let filtervalue = props.selectedvalue;
    let toggleval = props.toggleval == 'true';
    let newArray = filtervalue && filtervalue !== "0" ? lang.filter(item => item === filtervalue ) :lang
    return (
      <>
      <CharacterList chars={chars} />
      </>
  
    )
}

export default App