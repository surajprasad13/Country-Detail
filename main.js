fetch("https://restcountries-v1.p.rapidapi.com/all", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
  },
})
  .then((response) =>response.json())
  .then((data)=>{
      console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
