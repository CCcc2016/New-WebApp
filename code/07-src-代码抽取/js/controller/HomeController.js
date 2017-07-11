/**
 * Created by Administrator on 2017/7/10.
 */
// 5.创建首页控制器
angular.module('app').controller('HomeController',['$scope','$http',function ($scope,$http) {
    $scope.title = '首页1';

    /*跨域
     * http://localhost:8080/api/home.php?callback=fn
     * http://localhost:9999/#!/home
     * */
    $http({
        url:'http://localhost:8080/api/home.php',
        method:'jsonp'
    }).then(function (regs) {

        $scope.homeData = regs.data;
        console.log($scope.homeData);
    }).catch(function (err) {
        console.log(err);
    })
}]);