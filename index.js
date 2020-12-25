// get the button element id and assign it to a variable
let btn = document.getElementById('btn');

// 'lookup' function to fetch data from an API
const lookup = async(url) => {
  // fetches the data and returns it in a json format
  try {
    const response = await fetch(url);
    return await response.json();
  }
  // catches an error should any occur
  catch(e) {
    alert(e);
  }
 
}

// 'result' function to display fetched data from the 'lookup' function
const result = async() => {
  let  url = 'https://restcountries.eu/rest/v2/alpha/col';
  url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';
  let data = await lookup(url);
  // initialized and assigned an index from the array of data fetched
  let index = 162;
  
  // accessing the data with an index as preferred location
  let preferredLocation = `<h4>Preferred Location</h4>`;
  preferredLocation +=`
    <div class='card card1'>
      <p>
        <strong> Country: </strong> <span> ${data[index].name} </span><br>
        <strong> Capital: </strong> <span> ${data[index].capital} </span>
      </p>
    </div>
  ` 
// mapping through the data as possible locations
  let possibleLocation = `<h4>Possible Locations</h4>`;
  
  data.map((x) => {
    possibleLocation += `
      <div class='card card2'>
        <p>
          <strong> Country: </strong> <span> ${x.name} </span><br>
          <strong> Capital: </strong> <span> ${x.capital} </span>
        </p>
      </div>
          `;
  });

  // get the div element for display id and assign it to a variable
  let displayCard = document.getElementById('display');
  
  displayCard.innerHTML = preferredLocation;
  displayCard.innerHTML += possibleLocation;
  
}
  