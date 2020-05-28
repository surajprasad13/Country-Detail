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

function displayResult(data) {
  const html = data
    .map((result) => `<li><h1>Country:${result.name}</h1>
    <h3>Capital:${result.capital}</h3>
    </li>`)
    .join("");
  listDiv.innerHTML = html;
}
fetchUrl();
