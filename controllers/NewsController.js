hackerNews.controller('NewsCtrl', function NewsCtrl($scope, NewsFactory){
    $scope.news= NewsFactory.news;
    $scope.NewsFactory = NewsFactory;

    $scope.postNews = false;

    $scope.hidePostNews = function() {
        $scope.postNews = true;
        $scope.showPost = true;
    }
});
