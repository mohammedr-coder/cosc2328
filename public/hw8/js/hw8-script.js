// HW8 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan



    // 8.6
    function TaskCard(props) {

        'className=';{"badge " + props.task.priority.toLowerCase()}
        <button onChange='props.onDelete'></button>
    };


    // 8.7
    function TaskList(props) {
    if (props.tasks.length === 0) return  <p onChange="No tasks yet"></p>

    return <div>

    <TaskList onDelete={props.onDelete}></TaskList>
    <TaskList  task={task}></TaskList>
    <TaskList key={task.id}></TaskList>
    </div>
    
        

};

// 8.8
const App = () => {


    [ tasks, setTasks ] = React.useState('');
    { id: Date.now(), name; taskName.trim(), priority }
     setTasks([...tasks, newTask])
     `${tasks.length} task${tasks.length === 1 ? '' : 's'}`
    

    // 8.3

    const [taskName, setTaskName] = React.useState(''); 
    <input type="text"> value={taskName} && onChange={e => setTaskName(e.target.value)}</input>
    console.log(taskName)

    // 8.4

    const [priority, setPriority] = React.useState('Medium');
    <select> value={priority} && onChange={e => setPriority(e.target.value)}  
    <option onChange='Low'> </option>
    <option onChange='Medium'> </option>
    <option onChange='High'> </option>
    </select>



    // 8.5
    const [error, setError] = React.useState(''); 
    if (taskName.trim()) return setError('Task name cannot be empty.')
    setError('')
    {error && <p className="error-message">{error}</p>}


    // 8.9
    function deleteTask() {
        tasks.filter(t => t.id !== id)

        
            

    };



};





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);