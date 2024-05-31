function reqListener() {
    const countryarr=JSON.parse(this.responseText);
    console.log(countryarr);
    for(let country of countryarr){
        console.table(country.name.common);
        console.table(country.postalcode.region);
        console.table(country,postalcode.subregion);
    }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
