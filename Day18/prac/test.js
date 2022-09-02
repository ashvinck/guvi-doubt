

///Fetching the data from rest countries and saving it.
const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    localStorage['jsonData'] = JSON.stringify(myJson);

///Creating the HTML elements
    const div1 = document.createElement('div');
    div1.className = 'container';
    document.body.appendChild(div1);
    
    const div2 = document.createElement('div');
    div2.className = 'row';
    div1.appendChild(div2);

   
  function Data() {  
    const div3 = document.createElement('div');
    div3.className = "col-lg-4";
    div2.appendChild(div3);
    
    const div4 = document.createElement('div');
    div4.className = "col-sm-12";
    div3.appendChild(div4);
    
    const div5 = document.createElement('div');
    div5.className = "card";
    div4.appendChild(div5);
    
    const div6 = document.createElement('div');
    div6.className = "card-header";
    div5.appendChild(div6);
    const h51 = document.createElement('h3');
    h51.id = 'countryname';
    h51.textContent = myJson[i].name;
    div6.appendChild(h51);
        
    const image = document.createElement("img");
    image.src =myJson[i].flag;
    image.className = 'card-img';
    image.alt = 'Countries Flag';
    image.id="flag";
    div5.appendChild(image);
    
    const div7 = document.createElement('div');
    div7.className = "card-body";
    div5.appendChild(div7);
    
    const h52 = document.createElement('h5');
    h52.id='capital';
    h52.textContent = `Capital: ${myJson[i].capital}`;
    div7.appendChild(h52);
    
    const h53 = document.createElement('h5');
    h53.id='region';
    h53.textContent = `Region : ${myJson[i].region}`;
    div7.appendChild(h53);
    
    const h54 = document.createElement('h5');
    h54.id='code';
    h54.textContent= `Country Code : ${myJson[i].alpha3Code}`;
    div7.appendChild(h54);

    const h55 = document.createElement('h5');
    h55.id='latlog';
    h55.textContent= `LatLong : ${myJson[i].latlng}`;
    div7.appendChild(h55);
    
    const button = document.createElement('button');
    button.innerHTML ="Click for Weather";
    button.className = "btn btn-primary mx-auto d-block collapse";
    button.type="button";
    button.id =`weather${[i]}`;
    button.onclick = function() {onclick()};
    function onclick () {
          const weather = document.createElement('input');
          weather.type = "text";
          weather.disabled = true;
          weather.className = "collapse";

          // weather.innerText = "weather data";
          div7.appendChild(weather);
          const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
        //   const idnum = () =>{
        //   weather.id=`popup${count++}`;
        // } 
        // idnum();
        // weatherData = document.querySelectorAll(`[id^="popup"]`);
        // const classes = weatherData.classList
        // const result11 = classes.toggle("show")
        // console.log(weatherData);
      //   weatherData.forEach(val => val.classList.toggle("hide"));
      // //  weatherData.forEach(clik => clik.classList.toggle("show"))
        
        
          

    }
    div7.appendChild(button);
  }
  for (var i = 0; i < myJson.length; i++) {
    Data()
 }

}

fetchCountries();
  ////////////////////////////////////////////////////////////////////////////////////////////////
//  document.onload = function () {
//  let buttons = document.getElementsByClassName('btn')

//  buttons.addEventListener('click', function clickWeather () {
//       const weather = document.createElement('input');
//       weather.type = "text";
//       weather.disabled = true;
//       weather.id="popup"
//       weather.className = "hide";
//       weather.innerText = "weather data";
//       document.body.div7.appendChild(weather);
  
//       var weatherData = document.getElementById("popup");
//       weatherData.classList.toggle("hide");
//       weatherData.classList.toggle("show");
//   })
//  };
// buttons.forEach(clickWeather);
//  function clickWeather () {
//     const weather = document.createElement('input');
//     weather.type = "text";
//     weather.disabled = true;
//     weather.id="popup"
//     weather.className = "hide";
//     weather.innerText = "weather data";
//     div7.appendChild(weather);

//     var weatherData = document.getElementById("popup");
//     weatherData.classList.toggle("hide");
//     weatherData.classList.toggle("show");
// };
 
 
// let coordinates;
// let lats =[];
// let longs=[];
// for (var i = 0; i < myJson.length; i++) {
// coordinates = document.querySelector(`#latlog${[i]}`).textContent ;
// let split = coordinates.split(" : ");
//   let split2= split[1].split(",");
//   lats.push(split2[0]);
//   longs.push(split2[1]);
// }
// console.log(lats);
// console.log(longs);



// let allButtons = document.querySelectorAll(`[id^="weather"]`);
// //  console.log(allButtons);
// allButtons.forEach(element => element.addEventListener("click", weatherData, false));
// async  function weatherData()  {
//    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${longs}&appid={API key}`);
//    const myJson = await response1.json(); //extract JSON from the http response
//    console.log(myJson);
//    localStorage['jsonData'] = JSON.stringify(myJson);
 // const weather = document.createElement('input');
 //         weather.type = "text";
 //         weather.disabled = true;
 //         weather.id="popup"
 //         weather.className = "hide";
 //         weather.innerText = "weather data";
 //         document.body.div7.appendChild(weather)
     
 //         var weatherData = document.getElementById("popup");
 //         weatherData.classList.toggle("hide");
//  //         weatherData.classList.toggle("show");
//  button.onclick = () => {
//   const weather = document.createElement('input');
//   weather.type = "text";
//   weather.disabled = true;
//   weather.id="popup"
//   weather.className = "hide";
//   weather.innerText = "weather data";
//    }
//   var weatherData = document.getElementById("popup");
//   weatherData.classList.toggle("hide");
//   weatherData.classList.toggle("show");

// const tag1 = document.querySelector('.row');
// const tag2 = document.querySelector('.col-lg-4');
// const tag3 = document.querySelector('.card');
// const tag4 = document.querySelector('.card-body');
// console.log(tag1);

