import React from 'react'
import { Task } from './Task';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
    //タスクを並び替える
    const remove = taskList.splice(startIndex, 1); //[1,2,3] => 1を削除して、[2,1,3]にしたい
    taskList.splice(endIndex,0,remove[0]); //[2,1,3]
    // taskList.splice(endIndex.index,0,remove[0]); //[2,1,3]

};

export const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index,result.destination.index);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={(handleDragEnd)}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task,index) => (
                <div key={task.id}>
                  <Task
                  index={index} //taskListの番号 3つなら0,1,2と取り出す
                  task={task} 
                  taskList={taskList} 
                  setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
