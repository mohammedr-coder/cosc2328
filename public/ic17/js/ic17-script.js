//1. The useState return's the current values and also the new value that the setter inputs. The initial values, which is the energy and hunger, it returns it in the current statement, then the setter function updates it and it re renders with the new values.

//2. You write the onClick={feedPet} instead of the other one because the one without () allows react to call this thing when the user clicks, but the other one won't.

//3. The thing that causes the hunger screen to update is the feed pet, and the buttons is what allows the hunger to be modified.

//4. The condition that matches first is the energy and the function is returned as ok.

//5. The difference between those two are that is a warning message that placed inside of the .pet-card div, and the approach is the right choice if the divs are inside one another.

// IC17 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan


// confim CDN scripts loaded before any JSX runs
console.log('React version:', React.version);
console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');


// -------------- Conponet ------------

const TamagotchiPet = () => {


    // State - hunger: 0 (full) -> 100 (starving); energy: 0 (exhausted) -> 100 (rested)
    const [hunger, setHunger] = React.useState(50);
    const [energy, setEnergy] = React.useState(50);


    // ---- Event Handlers

    const feedPet = () => {

        setHunger(Math.max(0, hunger - 15));

    };

    const playWithPet = () => {

    setEnergy(Math.max(0, energy - 10));
    setHunger(Math.min(100, hunger + 5));

    };

    const restPet = () => {

    setEnergy(Math.min(100, energy + 20));
    setHunger(Math.min(100, hunger + 8));

    };

    // ---- Conditional rending helper
    const getPetMood = () => {

    if (hunger > 75) return '😢 Starving!';
    if (energy < 25) return '😴 Exhausted!';
    if (hunger < 30 && energy > 70) return '😊 Thriving!';
    return 	'😐 Okay';

    };

    // ----- JSX

    return (
        <div className="pet-card">
            <h1>Pixel</h1>
            <div className="stats">
                <p className="stat"> 🍖 Hunger: {hunger}</p>
                <p className="stat"> ⚡Energy: {energy}</p>
            </div>
            <div className="mood">{getPetMood()}</div>

             <div className="controls">
                <button onClick={feedPet}> 🍖 Feed </button>
                <button onClick={playWithPet}> ⚽ Play </button>
                <button onClick={restPet}> 😴 Rest </button>
             </div>


        </div>

    );


};


// --- Mount



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TamagotchiPet />);
