// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');

// searchButton.addEventListener('click', function () {
//     const searchText = searchInput.value;



// })

// const loadCountries = () => {
//     const url = `https://restcountries.eu/rest/v2/name/${searchText}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// loadCountries()
// const displayCountries=()=>{



// }


const searchcountries = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    console.log(searchText)



    searchInput.value = ''

    const url = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))

}

const displayCountries = countries => {
    const searchButton = document.getElementById('search-result');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
                <div class="card h-100">
                    <img src="${country.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-title">Name:${country.name}</p>
                        <p class="card-title"> Population:${country.population}</p>
                    </div>
                </div>
            </div>
        `;
        searchButton.appendChild(div)
    })
}