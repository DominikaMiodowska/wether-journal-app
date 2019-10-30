/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = 'api.openweathermap.org/data/2.5/weather?q=';
// 'London,uk&APPID='
const apiKey = '7d9ab1f237d14cf0daf5898c7036e76f';


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  const newLocation = document.getElementById('zip').value;
  getLocation(baseURL, newLocation, apiKey)
}

const getLocation = async(baseURL, location, key) =>{
  const res = await fetch(baseURL+location+key)
 try {
  const data = await res.json();
  console.log(data);
  
  } catch(error){
  console.log("error", error);
  }
}



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();
console.log(`Today is : ${newDate}`);

// UI UPDATE
const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json()
    console.log(allData);
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].feeling;
  
  }catch(error){
    console.log("error", error);
  }
}
// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }

//  postData('/addMovie', {movie:' the matrix', score: 5})
