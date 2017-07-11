/**
 * Created by Administrator on 2017/7/10.
 */
angular.module('app').controller('TabbarController',['$scope',function ($scope) {
    $scope.tabChange = function (index) {
        // 发送广播
        $scope.$emit('tab_notifice',{id:index});
    }
}]);