angular.module("mainApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/about.html",
            controller: "homeCtrl"
        })
        .when("/faq", {
            templateUrl: "components/faq/faq.html"
        })
        .when("/products", {
            templateUrl: "components/products/products.html"
        })
        .when("/about", {
            templateUrl: "components/about/about.html"
        })
        .when("/gallery", {
            templateUrl: "components/gallery/gallery.html"
        })
        .when("/contact", {
            templateUrl: "components/contact/contact.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);