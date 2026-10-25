// HW7 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan




// 7.6

function PokemonCard(props) {



    return (
        <div className="pokemon-card">
        <div className="image-frame">
        <img src={"https://placehold.co/150x150/4FC3F7/333333?text=" + props.name}/>
        </div>
        {props.name}
        </div>
    );
}

// 7.7

function PokemonRoster(props) {
    return (
        <div className="character-list">
        {props.characters.map(function (pokemon, index) {
            return (
            <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            />
        );
    })}
    </div>
    );
}



// 7.3

async function loadRoster(name) {

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

        // 7.4
       const filtered = data.results.filter(name).length <= 6


        // 7.5
        const sorted = data.results.sort(a.name.length - b.name.length)
        


        // 7.8

    function App(props) {

    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(<App roster={sortedArray} />)

    
    return (
        <div className="pokemon-card">
        <div className="image-frame">
        </div>
        <PokemonRoster>
        <header>`Showing ${props.roster.length} short-named Pokemon, shortest name first`</header>
        </PokemonRoster>
        </div>
    );
}

        if (!response.ok) {
            throw new Error("Pokemon not found. Check the spelling and try again");
        }

        const data = await response.json();
        renderPokemon(data);
        statusMessage.textContent = "";
    } catch (error) {
        // 7.9
        document.querySelector("#root").innerHTML = "Something went wrong"
        
    
    }
}







