




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
    h55.id=`latlog${[i]}`;
    h55.textContent= `LatLong : ${myJson[i].latlng}`;
    div7.appendChild(h55);
     
    
    const button = document.createElement('button');
    button.innerHTML ="Click for Weather";
    button.className = "btn btn-primary mx-auto d-block ";
    button.type="submit";
    button.id =`weather${[i]}`;
    div7.appendChild(button);
  }

/////Looping through the above function
for (var i = 0; i < myJson.length; i++) {
    Data()
 };
}

 fetchCountries(); //Calling the function

 
  
