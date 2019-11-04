/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=7d9ab1f237d14cf0daf5898c7036e76f';
const baseURL = `api.openweathermap.org/data/2.5/weather?zip=${zip}${apiKey}`;



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const zip = document.getElementById('zip').value;
  const feeling = document.getElementById('feelings').value;

getLocation(baseURL, zip, apiKey)

.then(function(data){
  console.log(data);
  //Add data to post request  date: data.date,
  postData('/add', { temp:data.temp, zip:zip, feeling:feeling})

  // show in UI
  updateUI()
});
};

const getLocation = async(baseURL, zip, key) =>{

  const res = await fetch(baseURL + zip + key);

  try {
    const data = await res.json();
    console.log(data);
} catch(error){
  console.log("error", error);
  }
}
const postData = async ( url = '', data = {})=>{
    console.log(data);      
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ (d.getMonth()+1)+'.'+ d.getFullYear();
console.log(`Today is : ${newDate}`);
// const content = document.getElementById('date').innerHTML = `<h2>Today is ${newDate}</h2>`;

// UI UPDATE
const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json()
    console.log(allData);
    const content = document.getElementById('date').innerHTML = `<h2>${newDate}</h2>`;
    // document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].feeling;
  
  }catch(error){
    console.log("error", error);
  }
}

postData('/add', {temp:'38', feeling: 'Today was cold.'})
