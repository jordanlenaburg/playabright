angular.module("mainApp")

.directive("navbar", function () {

    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    }
})

.directive("footer", function () {

    return {
        templateUrl: "components/navbar/footer.html",
        restrict: "E"
    }
});