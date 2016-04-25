// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var app = angular.module('weddingApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when("/ourwedding", {
            templateUrl: "/partials/ourwedding.html.erb",
            // controller: "playersController"
        })
        .when("/details", {
            templateUrl: "/partials/details.html",
            // controller: "teamsController"
        })
        .when("/photos", {
            templateUrl: "/partials/photos.html",
            // controller: "associationsController"
        })
        .when("/registry", {
            templateUrl: "/partials/registry.html",
            // controller: "associationsController"
        })
        .when("/rsvp", {
            templateUrl: "/partials/rsvp.html",
            controller: "rsvpsController"
        })
        .otherwise({
            templateUrl: "/partials/ourwedding.html.erb",
        })
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});




app.factory("rsvpFactory", function($http){
    var factory = {};

    factory.create = function(rsvpInfo, callback){
        $http.post("/rsvps", rsvpInfo).success(function(output){
            callback(output);
        })
    }
    return factory
})


    // ------rsvps controller------

app.controller("rsvpsController", function($scope, rsvpFactory){

    $scope.createRsvp = function(){
        rsvpFactory.create($scope.newRsvp, function(json){
            $scope.rsvps = json;
            $scope.newRsvp = {};
        })
    }

})


