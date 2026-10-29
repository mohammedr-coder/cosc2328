// 1. Prop drilling is when you pass a component through every layer, and a situation where it could be a problem is when it creates unnecessary coupling.

// 2. The three things that you need to use the Context API are to create a shared context using react, provide context to a component tree using the Provider component, and consume shared context to any child component using react without receiving props.

// 3. ModeToggle gets access by the context Provider that handled the connection, it reads the sharded context and calls the sharded function.

// 4. It must be called at the top of the file, and it is created at the top of the file because it created the context object, and creates the thing to allow connections to state and wrapping the component tree.

// 5. The thing that would change is that there would be another const and then mode, using the react use context.

// IC18 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan


console.log('React version:', React.version);
console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');

// ---- Context ----

const HabitatContext = React.createContext();


// ----- Components -----
 const Header = () => {
    // Consume context - no props needed
    const { mode } = React.useContext(HabitatContext);
    return (
        <header>
            <h1> 🌍 Pixel's Habitat</h1>
            <p>{mode === 'day' ? '☀️ Day Mode' : '🌙 Night Mode'}</p>
        </header>
    );
 };

 const HabitatView = () => {
        const { mode } = React.useContext(HabitatContext);
    return (
        <div className="scene">
            {mode === 'day' ? '☀️ 🌿 🐾 ':' 🌙 ⭐ 🐾 '}
        </div>
    );

 };

 const ModeToggle = () => {
    // Consumes both mode and toggleMode - no props received from App
    const { mode, toggleMode } = React.useContext(HabitatContext);
    return (
        <div className="controls">
            <button onClick={toggleMode}>
                {mode === 'day' ? 'Switch to Night Mode' : 'Switch to Day Mode'}
            </button>
        </div>
    );
 };

    const App = () => {
        const [mode, setMode] = React.useState('day');
        const toggleMode = () => setMode(prev => prev === 'day' ? 'night' : 'day');

        return (
            // provider wraps all consumers; value broadcasts mode and toggleMode
            <HabitatContext.Provider value={{ mode, toggleMode }}>
                <div className={"habitat " + mode}>
                    <Header />
                    <HabitatView />
                    <ModeToggle />
                </div>
            </HabitatContext.Provider>
        )
    };




 // --- Mount ----

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);