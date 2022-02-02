import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTask'
import {useState} from 'react'; 
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        name: 'file1.txt',
        authors: ['John Doe ', 'Jane Doe']
    },
    {
        name: 'file2.txt',
        authors: ['John Doe ', 'Jane Doe']
    },
    {
      name: 'file3.txt',
      authors: ['John Doe ', 'Jane Doe']
  }
])

const addTask = (task) => {
  console.log(task)
  setTasks([...tasks, task])
}

const deleteTask = (name) => {
  console.log('delete: ' , name);
  setTasks(tasks.filter(task => task.name !== name));
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete ={deleteTask}/>) 
        : ("No tasks to show babbyyy")}
    </div>
  );
}

export default App;
