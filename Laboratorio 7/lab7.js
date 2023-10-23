var resultado;

function cambiarColor() {
    var paragraph = document.getElementById("colorParagraph");
    paragraph.style.color = "blue";
}

function agregarTexto() {
    var paragraph = document.getElementById("textoParagraph");
    paragraph.innerHTML += " WASAAAAAAAAA";
}

function concatenarTexto() {
    var texto1 = "Pinel, ";
    var texto2 = "Alexis";
    resultado = texto1 + texto2;
    document.getElementById("concatenarP").innerHTML = resultado;
}

function eliminarOpcion() {
    var select = document.getElementById("listaDesplegable");
    select.remove(select.selectedIndex);
}

function irAYoutube() {
    window.location.href = "https://youtu.be/oplra1FJxWI?si=KnQV6KQqwbQkh9wZ";
}

function mostrarAlerta() {
    var resultado = "Alexis"
    alert("Qxopa " + resultado);
}

function mostrarNombreEnConsola() {
    var nombre = "Alexis";
    console.log(nombre);
}

function mostrarEstadoCheckbox() {
    var checkbox = document.getElementById("checkboxEstado");
    alert("El estado del checkbox es: " + checkbox.checked);
}

function mostrarEstadoRadio() {
    var radios = document.getElementsByName("radioEstado");
    var seleccionado = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            seleccionado = radios[i].value;
        }
    }
    alert("El estado del radio button seleccionado es: " + seleccionado);
}

function validarTecla() {
    var input = document.getElementById("inputTecla");
    input.addEventListener("keydown", function (e) {
        if (!((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) || e.key.length > 1) {
            e.preventDefault();
            alert("Solo se permiten teclas.");
        }
    });
}

function ObtenerDatos() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then(response => response.json())
        .then(data => {
            MapearPokemon(data.results);
        })
        .catch(error => console.error("Error:", error));
}

function MapearPokemon(pokemonList) {
    const pokemonTable = document.getElementById("pokemonTable");
    pokemonTable.innerHTML = "";

    pokemonList.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => {
                const name = pokemonData.name;
                const types = pokemonData.types.map(type => type.type.name).join(", ");
                const image = pokemonData.sprites.front_default;

                const pokemonRow = `
                    <tr>
                        <td>${name}</td>
                        <td>${types}</td>
                        <td><img src="${image}" alt="${name}"></td>
                    </tr>
                `;

                pokemonTable.innerHTML += pokemonRow;
            })
            .catch(error => {
                console.error("Error al cargar los datos de Pokémon", error);
            });
    });
}

function LimpiarDatos() {
    const pokemonTable = document.getElementById("pokemonTable");
    pokemonTable.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const loadPokemonButton = document.getElementById("loadPokemon");
    const clearPokemonButton = document.getElementById("clearPokemon");

    loadPokemonButton.addEventListener("click", function () {
        ObtenerDatos();
    });

    clearPokemonButton.addEventListener("click", function () {
        LimpiarDatos();
    });
});
