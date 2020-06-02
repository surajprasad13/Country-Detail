const listDiv = document.getElementById("list");
const popupCard = document.getElementById("popupCard");
const form = document.querySelector("form");
const input = document.querySelector("input");

const countryCache = {};
const url = "https://restcountries-v1.p.rapidapi.com/all";

//search url ...............

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value;
  const path="name"||"capital"
  const searchUrl = async () => {
    const res =await fetch(`https://restcountries-v1.p.rapidapi.com/${path}/${inputValue}`, {
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
    },
  });
   const data= await res.json();
   displayResult(data)
  }
  searchUrl();
  input.value = "";
});

//fetch url ............

const fetchUrl = async () => {
  const res = await fetch("https://restcountries-v1.p.rapidapi.com/all", {
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
    },
  });
  const data = await res.json();
  displayResult(data);
};

//display data...............

const displayResult = (data) => {
  const html = data
    .map(
      (result) => `<li onclick="selectCountry(${result.callingCodes})">
  <img src="https://www.countryflags.io/${result.alpha2Code}/shiny/64.png">
     <h1>${result.name}</h1>
     <h3>Capital:${result.capital}</h3>
    </li>`
    )
    .join("");
  listDiv.innerHTML = html + listDiv.innerHTML;
};

//display popup..............

const selectCountry = async (data) => {
  if (!countryCache[data]) {
    const res = await fetch(
      `https://restcountries-v1.p.rapidapi.com/callingcode/${data}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
        },
      }
    );
    const response = await res.json();
    countryCache[data] = response;
    displayCountry(response);
  }
  displayCountry(countryCache[data]);
};

//display popup................

const displayCountry = (response) => {
  const html = response
    .map(
      (result) => `<div class="popup">
    <button id="closeBtn" onclick="closePopup()">&times;</button>
    <center><img src="https://www.countryflags.io/${result.alpha2Code}/shiny/64.png">
    <h1>${result.name}</h1>
    </center>
            <ul>
                <li><p>alpha2Code:-${result.alpha2Code}</p></li>
                <li><p>alpha3Code:-${result.alpha3Code}</p></li>
                <li><p>area:-${result.area}</p></li>
                <li><p>borders:-${result.borders}</p></li>
                <li><p>callingCodes:-${result.callingCodes}</p></li>
                <li><p>capital:-${result.capital}</p></li>
                <li><p>currencies:-${result.currencies}</p></li>
                <li><p>demonym:-${result.demonym}</p></li>
                <li><p>gini:-${result.gini}</p></li>
                <li><p>languages:-${result.languages}</p></li>
                <li><p>latlng:-${result.latlng}</p></li>
                <li><p>nativeName:-${result.nativeName}</p></li>
                <li><p>numericCode:-${result.numericCode}</p></li>
                <li><p>population:-${result.population}</p></li>
                <li><p>region:-${result.region}</p></li>
                <li><p>subregion:-${result.subregion}</p></li>
                <li><p>timezones:-${result.timezones}</p></li>
                <li><p>toplevelDomain:-${result.toplevelDomain}</p></li>
                <li><p>translocations:-${result.translocations}</p></li>
                </ul>
        </div>`
    )
    .join("");
  listDiv.innerHTML = html + listDiv.innerHTML;
};

//close popup

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};
fetchUrl();
