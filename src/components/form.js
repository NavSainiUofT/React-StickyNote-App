import React, { useState } from "react";
import { Sticky } from "./stickynote";



export function Form() {
  const [stickyList, setStickyList] = useState([]);

  const onAddBtnClick = event => {
    setStickyList(stickyList.concat(<Sticky props = {{text:"new sticky note text"}} key={stickyList.length}/>));
    console.log(stickyList);
  };
  const onDeleteAllBtnClick = even => {
    setStickyList([])
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add StickyNote</button>
      <button onClick={onDeleteAllBtnClick}>Delete ALL Sticky Notes</button>
      {stickyList}
    </div>
  );
};