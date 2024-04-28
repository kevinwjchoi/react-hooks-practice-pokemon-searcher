import React , {useState} from "react";

function Search({setSearchVal}) {

  function handleSearchChange(event){
    setSearchVal(event.target.value)
  }
  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
