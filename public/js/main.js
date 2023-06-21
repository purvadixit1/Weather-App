
const cityName = document.getElementById('cityName');
const submitbtn=document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getInfo = async (event)=>
{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === "")
    {
   city_name.innerText='Please, Write the name before search';
    }
    else{
        try{ 
            let url = 'https://api.openweathermap.org/data/2.5/weather?q=&{cityval}&units=metric&appid=b5e1a8a63f54e47d7a7f1f0e87b23743'
            // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
                const response= await fetch(url);
        const data=  await response.json();
     
        
        const arrData=[data];
        city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;

        }
        catch{
            city_name.innerText='Please, Enter the city name properly';
        }
    }
}
submitbtn.addEventListener('click',getInfo);