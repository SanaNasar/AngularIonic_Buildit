angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
//add $http promises from angular
.controller('usersCtrl', function($scope, $http) {
  $http.get("https://myapi.profstream.com/api/29d5ee/persons")
    .success(function(users){
      $scope.users = users;

  })
  .error(function() {
    alert("Error getting users");
  });
 
})

.controller('UserDetailCtrl', function($scope, $http, $stateParams) {
  $http.get("https://myapi.profstream.com/api/29d5ee/persons/" + $stateParams.userId)
    .success(function(user) {
      $scope.user = user;

    })
    .error(function() {
      alert("Error getting the user info");
    });
})

.controller('cameraCtrl', function($scope) {
  // $scope.settings = camera;
  $scope.takePicture = function() {
    navigator.camera.getPicture(cameraSuccess, cameraFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
  });

  function cameraSuccess(imageURI) {
    $scope.picture_takens = imageURI;
  }

  function cameraFail(message) {
      alert("Error getting the user info");
  }
  };
})

.controller('mapCtrl', function($scope) {
 navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

function geoSuccess(position) {
    initializeMap(position.coords.latitude, position.coords.longitude, "map");
}

function geoError(error) {

}
//Get profile map

function initializeMap(lat, lng, where) {
    var myLatlng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        zoom: 15,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById(where), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
}
});


