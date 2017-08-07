/**
 * Created by steve on 8/7/17.
 */
var app = angular.module('iebc', []).config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

app.controller('resultsController', function ($http, $scope) {
    // var debtor = this;
    // debtor.users = [];

    $http.get('https://apitest.secured.vote/jsons/round1/results/Kenya_Elections_Presidential/1/info.json', {'Content-Type' : 'application/json'})
        .then(function (response) {
            // var iebc = this;
            console.log('SUCCESS');
            console.log(response.data);
            $scope.progress = response.data['progress'];
            $scope.results = response.data.results.parties;
        }, function (error) {
            console.log('ERROR');
            console.log(error);
        });
});
