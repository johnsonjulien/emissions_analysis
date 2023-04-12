const url = "https://raw.githubusercontent.com/johnsonjulien/project_3/main/emissions.json";

fetch(url)

  .then(response => response.json())
  .then(data => {
    // console.log(data);
    const totalEmissionsByCountry = {};
    for (const entry of data) {
      const country = entry.Country;
      const year = entry.Year;
      const total = parseFloat(entry.Total);
      if (!totalEmissionsByCountry[country]) {
        totalEmissionsByCountry[country] = 0;
      }
      totalEmissionsByCountry[country] += total;
    }
    console.log(totalEmissionsByCountry);


    var sorted = totalEmissionsByCountry.slice(0,5).reverse();
      console.log(sorted);
  })



  