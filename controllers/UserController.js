hackerNews.controller('UserCtrl', function UserCtrl($scope, UserFactory){
    $scope.user= UserFactory.user;
    $scope.UserFactory = UserFactory;
    var login_user=[];

    $scope.checkin = function(){

        angular.forEach($scope.user, function(value,key){
            if(($scope.new_email == value.email) && ($scope.new_password == value.password)){
                login_user.push(value.email);
                value.status = true;
                console.log(value);
            }
         });


    };
});
