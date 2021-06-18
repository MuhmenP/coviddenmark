        var APIUrl = "https://api.covid19api.com/summary";
function getCovidData()
 {
        fetch(APIUrl)
        .then((responseFromApi) => responseFromApi.json())
        .then((responseFromApi) => {
            console.log(responseFromApi.Countries[46]);

            let newConfirmed = responseFromApi.Countries[46].NewConfirmed;
            console.log(newConfirmed);
            let NewDeaths = responseFromApi.Countries[46].NewDeaths;
            let NewRecovered = responseFromApi.Countries[46].NewRecovered;
            let TotalConfirmed = responseFromApi.Countries[46].TotalConfirmed;
            let TotalDeaths = responseFromApi.Countries[46].TotalDeaths; 
            let TotalRecovered = responseFromApi.Countries[46].TotalRecovered; 
            
            $("#newConfirmed").append(newConfirmed)
            $("#newDeaths").append(NewDeaths)   
            $("#NewRecovered").append(NewRecovered)
            $("#TotalConfirmed").append(TotalConfirmed)
            $("#TotalDeaths").append(TotalDeaths)
            $("#TotalRecovered").append(TotalRecovered)
        });
    }
    getCovidData()