$(document).ready(function () {

    let latLongVal;

    function loadAllLocationDetails() {
        $.ajax({
            url: 'controller/getLocationsData.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                latLongVal = data;
                $.each(latLongVal, function (i, item) {
                    $("#locationSelector").append('<option value="' + item.id + '">' + item.id + '</option>');

                })
            },
            error: function (request, error) {
                alert('Request: ' + JSON.stringify(request));
            }
        })
    }

    loadAllLocationDetails();

    function weatherFetchApiCall(lat_val, lon_val) {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?',
            type: 'GET',
            data: {
                lat: lat_val,
                lon: lon_val,
                appid: API_KEY_OPENWEATHER,
                units: "imperial"
            },
            dataType: 'json',
            success: function (data) {
                let arrayOfDates = [];
                let selectedCtr = true;
                let selectedActive = 'active';
                let selectedShow = 'show';

                $.each(data.list, function (i, item) {
                    let forecastDate = item.dt_txt.split(" ");
                    let weatherIcon = item.weather[0].icon;
                    let weatherIconSrc = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
                    let weatherDesc = item.weather[0].description;
                    let weatherTemp = item.main.temp;

                    if (!arrayOfDates.includes(forecastDate[0])) {
                        arrayOfDates.push(forecastDate[0]);

                        $("#nav-tab-weather").append(
                            '<button class="nav-link ' + selectedActive + '" id="nav-' + forecastDate[0] + '-tab" data-bs-toggle="tab" data-bs-target="#nav-' + forecastDate[0] + '"' +
                            'type = "button" role = "tab" aria - controls="nav-' + forecastDate[0] + '" aria - selected="' + selectedCtr + '" > ' + forecastDate[0] + '</button > '
                        );
                        $("#nav-tabWeatherContent").append(
                            '<div class="tab-pane fade ' + selectedShow + ' ' + selectedActive + '" id="nav-' + forecastDate[0] + '" role="tabpanel" aria-labelledby="nav-' + forecastDate[0] + '-tab">' +
                            '<div class="container " id="container-' + forecastDate[0] + '">' +
                            '<div class="row fs-3 containerContentHeader">' +
                            '<div class="col bg-primary text-white">Forecast time' +
                            '</div>' +
                            '<div class="col bg-primary text-white">Weather' +
                            '</div>' +
                            '<div class="col bg-primary text-white">Description' +
                            '</div>' +
                            '<div class="col bg-primary text-white">Temp' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        );
                    }

                    $("#container-" + forecastDate[0]).append(
                        '<div class="row fs-3">' +
                        '<div class="col bg-light">' + forecastDate[1] + '</div>' +
                        '<div class="col bg-light"> <img src="' + weatherIconSrc + '" alt="' + weatherDesc + '"></img></div>' +
                        '<div class="col bg-light">' + weatherDesc + '</div>' +
                        '<div class="col bg-light">' + weatherTemp + '</div>' +
                        '</div>' +
                        '</div>'
                    );

                    selectedCtr = false;
                    selectedActive = '';
                    selectedShow = '';

                })
            },
            error: function (request, error) {
                alert('Request: ' + JSON.stringify(request));
            }
        })
    }


    $("#locationSelector").on("change", function (e) {
        let currentSelected = this.value;

        if (currentSelected !== "-") {
            $("#nav-tab-weather").empty();
            $("#nav-tabWeatherContent").empty();

            latLongVal.forEach(function (val) {
                if (val.id === currentSelected) {
                    weatherFetchApiCall(val.lat, val.lon);
                }
            });
        }

    });

});
