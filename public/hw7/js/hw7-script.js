// HW7 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan





// 7.3

async function loadRoster(name) {

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151" + name.toLowerCase().trim());

        // 7.4
        const filter = data.results.length < 7

        // 7.5
        const sorter = a.name.length - b.name.length

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




// 7.6

function PokemonCard(props) {
    return (
        <div className="character-card">
        <div className="image-frame">
        <img src={props.image} alt={props.name} />
        </div>
        <h3>{props.name}</h3>
        <p className="role">(props.role)</p>
        <p>{props.description}</p>
        </div>
    );
}

// 7.7

function PokemonRoster(props) {
    return (
        <div className="character-list">
        {props.characters.map(function (pokemon, index) {
            return (
            <CharacterCard
            key={index}
            name={pokemon.name}
            role={pokemon.role}
            image={pokemon.image}
            description={pokemon.description}
            />
        );
    })}
    </div>
    );
}


// 7.8

function App(props) {
    return (
        <div className="character-card">
        <div className="image-frame">
        <img src={props.image} alt={props.name} />
        </div>
        <header>`Showing ${props.roster.length} short-named Pokemon, shortest name first`</header>
        <p className="role">(props.role)</p>
        <p>{props.description}</p>
        </div>
    );
}

