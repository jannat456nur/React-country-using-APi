

//connect enter button

var searchbutton = document.getElementById("search-button");
var txtbutton = document.getElementById("search-input");

txtbutton.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        searchbutton.click();
    }

});
//add spinner
const toogleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle;
}
//load country
const searchcountries = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    console.log(searchText)


    //clear inputfeild
    searchInput.value = ''
    //load data
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))

}
//display data and appenddiv
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