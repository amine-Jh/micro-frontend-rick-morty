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
       <div class="card">
   
  <div class="card-header">
    React Application
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
  {
    newArray.map((value,index)=>{
      return <li class="list-group-item" key={index}>{value}</li>
    })
  }
  </ul>
  </div>
  <div class="card-body">
  <div class='row'>
  <div class="col-6">
    <button type="button" id="reactincrementer" class="btn btn-outline-secondary">Increment Counter</button>
    </div>
    <div class="col-6">
    {
      toggleval && 
      <span class="badge badge-info">Called from angular app!!!</span>
    }
            </div>
    </div>
</div>
</div>
      </>
  
    )
}

export default App