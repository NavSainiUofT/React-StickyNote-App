import React, { useState } from "react";
import { Sticky } from "./stickynote";



export function Form() {
  const [stickyList, setStickyList] = useState([]);
  const [inputState, setInputState] = useState({value: ""});

  const onAddBtnClick = event => {
    setStickyList(stickyList.concat(<Sticky props = {{text:inputState.value}} key={stickyList.length}/>));
    console.log(stickyList);
  };
  const onDeleteAllBtnClick = event => {
    setStickyList([])
  };
  const handleChange = (e) => {
    setInputState({value: e.target.value});
  };
  

  return (
    <div>
      <button onClick={onAddBtnClick}>Add StickyNote</button>
      <button onClick={onDeleteAllBtnClick}>Delete ALL Sticky Notes</button>
        <input
          type="text"
          value={inputState.value}
          onChange={handleChange}
        />
      {stickyList}
    </div>
  );
};