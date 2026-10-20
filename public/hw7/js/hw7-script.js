// HW7 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan



const pokemonInput = document.querySelector("#pokemon-input");
const statusMessage = document.querySelector("#status-message");
const pokemonCard = document.querySelector("#pokemon-card");

// 7.3

async function seachPokemon(name) {
    statusMessage.textContent = "Seaching...";
    statusMessage.className = "";
    pokemonCard.innerHTML = "";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151" + name.toLowerCase().trim());

        if (!response.ok) {
            throw new Error("Pokemon not found. Check the spelling and try again");
        }

        const data = await response.json();
        renderPokemon(data);
        statusMessage.textContent = "";
    } catch (error) {
        statusMessage.textContent = error.message;
        statusMessage.className = "status-error";
        pokemonCard.innerHTML = "";
    
    }
}

// 7.4


document.querySelector("#btn-filter-expensive").addEventListener("click", function() {
    const expensive = catalog.filter(function (product) {
    return product.isExpensive();
    });
    renderProducts(expensive);
    document.querySelector("#stats-container").innerHTML =
    "<div class='stat-item'>" + expensive.length + " expensive product(s) found (over $50).</div>";
});
document.querySelector("#btn-calculate-total").addEventListener("click", function() {
    const total = catalog.reduce(function (sum, product) {
        return sum + product.price;
    }, 0);
    document.querySelector("#stats-container").innerHTML =
    "<div class='stat-item' >Total catalog value: $" + total.toFixed(2) + "</div>";
});

// 7.5

    document.querySelector("#btn-show-all").addEventListener("click", function () {
        renderProducts(catalog);
    });
    document.querySelector("#btn-sort-price").addEventListener("click", function () {
        const sorted = [...catalog].sort(function (a,b) {
            return a.price - b.price;
        });
    renderProducts(sorted);
    });

// 7.6

// 7.7

// 7.8

// 7.9

