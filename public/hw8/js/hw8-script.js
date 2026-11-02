// HW8 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan



    // 8.6
    function TaskCard(props) {

        return (
        
       
        <div className={"badge " + props.task.priority.toLowerCase()}>
        <button onClick={() => props.onDelete(props.task.id)}>Delete</button>
        </div>
       
        
        );
    };


    // 8.7
    function TaskList(props) {
    if (props.tasks.length === 0) 
        {return  <p onChange="No tasks yet"></p>}


    <div>

    <TaskList onDelete={props.onDelete}></TaskList>
    <TaskList  task={task}></TaskList>
    <TaskList key={task.id}></TaskList>
    </div>     

};


    // 8.9
    function deleteTask(id) {
        
        setTasks(tasks.filter(t => t.id !== id));
    
    };
        
        const clearAll = () => {setTasks([])}

    
    <TaskList tasks={tasks} onDelete={deleteTask}/>




// 8.8
function App() {


    const [ tasks, setTasks ] = React.useState([]);


    // 8.3

    const [ taskName, setTaskName] = React.useState('');
    <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)}> </input>
    console.log(taskName)

    // 8.4

    const [ priority, setPriority] = React.useState('Medium');
    <select value={priority} onChange={e => setPriority(e.target.value)}>
    <option value='Low'>Low </option>
    <option value='Medium'>Medium </option>
    <option value='High'>High </option>
    </select>



    // 8.5
    const [ error, setError] = React.useState(''); 
    if (taskName.trim() === '') return setError('Task name cannot be empty.')
    setError('')
    {error && <p className="error-message">{error}</p>}

    // 8.8
    const newTask = { id: Date.now(), name: taskName.trim(), priority }
     setTasks([...tasks, newTask])
     setTaskName('');
     setPriority('Medium');

    <p>className=`${tasks.length} task${tasks.length === 1 ? '' : 's'}`</p>

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);