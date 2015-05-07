var hackerNews= angular.module('hackerNews', ['ui.router']);

    hackerNews.config(function($stateProvider) {
        $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state('news',{
        url: "/news",
        templateUrl: "partials/news.html",
        controller: 'NewsCtrl'
    });

    $stateProvider.state('news.articleContent',{
        url: "/:articleId",
        templateUrl: "partials/news.contents.html",
        controller: 'CommentsCtrl'
    });

    $stateProvider.state('login',{
        url: "/login",
        templateUrl: "partials/login.html",
        controller: 'UserCtrl'
    });

});
