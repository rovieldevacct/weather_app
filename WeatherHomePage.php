<html>

<head>
    <link rel="stylesheet" href="./css/bootstrap.css">
    <link rel="stylesheet" href="./css/customCss.css">
    <script src="js/jquery-3.7.0.js"></script>
    <script src="./js/bootstrap.js"></script>
    <script src="./js/weatherForecast.js"></script>
    <script src="Constants.js"></script>
</head>

<body>
    <div class="row">&nbsp;</div>
    <div class="container">
        <nav>
            <div class="nav nav-tabs fs-4" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-tab" data-bs-toggle="tab" data-bs-target="#nav-weather"
                    type="button" role="tab" aria - controls="nav-weather" aria - selected="true"> Weather
                    Forecast</button>
                <!-- <button class="nav-link " id="nav-tab" data-bs-toggle="tab" data-bs-target="#nav-four-square"
                    type="button" role="tab" aria - controls="nav-four-square" aria - selected="false"> Find Location
                </button> -->
            </div>
        </nav>
        <div class="tab-content text-center" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-weather" role="tabpanel" aria-labelledby="nav-weather-tab">
                <div class="row">&nbsp;</div>
                <div id="divLocationSelector" class="row">
                    <div class="col-sm-1">
                        Location
                    </div>
                    <div class="col-sm-2">
                        <select id="locationSelector" class="form-select">
                            <option value="-">--Select--</option>
                        </select>
                    </div>
                </div>
                <div class="row">&nbsp;</div>
                <div id="divWeatherDetails">
                    <nav>
                        <div class="nav nav-tabs fs-3" id="nav-tab-weather" role="tablist">
                        </div>
                    </nav>
                    <div class="row">&nbsp;</div>
                    <div class="tab-content text-center" id="nav-tabWeatherContent">
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-four-square" role="tabpanel" aria-labelledby="nav-four-square-tab">...
            </div>

        </div>

    </div>


</body>


</html>