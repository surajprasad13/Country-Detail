const listDiv = document.getElementById("list");
const url = "https://restcountries-v1.p.rapidapi.com/all";
const fetchUrl = async () => {
  const res = await fetch("https://restcountries-v1.p.rapidapi.com/all", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
    },
  });
  const data = await res.json();
  console.log(data);
  displayResult(data);
};

const displayResult=(data)=> {
  const html = data
    .map(
      (result) => `<li onclick="selectCountry(${result.callingCodes})">
  <img src="https://www.countryflags.io/${result.alpha2Code}/shiny/64.png">
     <h1>${result.name}</h1>
     <h3>Capital:${result.capital}</h3>
    </li>`
    )
    .join("");
  listDiv.innerHTML = html;
}

const selectCountry = async (data) => {
  const res = await fetch(
    `https://restcountries-v1.p.rapidapi.com/callingcode/${data}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
      },
    }
  );
  const result = await res.json();
  displayCountry(result);
};


const displayCountry=(result)=>{

const html=``;
console.log(result);

}




fetchUrl();
