import React from 'react'
// import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  //enterキーを押した時
  const handleSubmit = (e) => {
    const taskId = uuid();
    //フォームが持つデフォルトの動作をキャンセルする
    e.preventDefault();
    if(inputText === ""){
      return;
    }
    //カードを追加する。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
    // console.log(...taskList);
    // console.log(inputText);
  };

  const handleChange = (e) => {
    //入力するたびにsetInputTextの値が更新
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='add a task'
        className="taskAddInput"
        onChange={handleChange}
        value={inputText}
        />
      </form>
    </div>
  );
};
