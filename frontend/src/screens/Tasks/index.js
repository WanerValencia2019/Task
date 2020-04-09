import React, { PropTypes,useEffect } from 'react';
import {getTask} from "./actionCreators"
import {connect, useSelector} from "react-redux"


const Tasks = (props) => {
  //console.log(idUser);
  const {tasks,getTask,idUser}=props
  const get_tasks=tasks.tasks
  console.log(get_tasks);
  useEffect(()=>{
      async function getData(){
        await getTask(idUser)
      }
      getData();
  },[])
  //console.log(idUser);
  //console.log(tasks);
  //console.log(getTask);
  return (
    <div>
        <h4>Listando Tareas</h4>
      {
        JSON.stringify(get_tasks)
      }
    </div>
  );
};


const mapStateToProps=(state)=>{
  return{
    tasks:state.tasks
  }
}
const mapDispatchToProps={getTask}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
