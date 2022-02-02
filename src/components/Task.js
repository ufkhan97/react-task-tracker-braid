import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete}) => {
  return <div className = "task">
      <h3>{task.name} 
        <FaTimes 
            style={{color:'red', cursor:'pointer'}}
             onClick={() => onDelete(task.name) }/> 
        </h3>
      <h4>Authors: {task.authors}</h4>
      <p>{task.size}</p>
  </div>;
};

export default Task;
