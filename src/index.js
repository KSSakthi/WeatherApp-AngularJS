import angular from "angular";

angular
  .module("myModule", [])
  .controller("myController", function ($scope, $http) {
    $http
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=9.91&longitude=78.11&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
      )
      .then(function (response) {
        console.log(response.data.current_weather.temperature);
        $scope.result = response.data.current_weather.temperature;
        console.log(response.data.current_weather.time);
        $scope.result1 = response.data.current_weather.time;
        console.log(response.data.current_weather.winddirection);
        $scope.result2 = response.data.current_weather.winddirection;
        console.log(response.data.current_weather.windspeed);
        $scope.result3 = response.data.current_weather.windspeed;

        // console.log(response.data);
        // $scope.result = response.data;
      })
      .catch(function (error) {
        console.log(error);
        $scope.result = "Something Went Error";
      });
  });
