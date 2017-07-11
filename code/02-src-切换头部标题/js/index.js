/**
 * Created by Administrator on 2017/7/10.
 */
// 1.创建模块
var app = angular.module('app',[]);

// 2.创建控制器
app.controller('AppController',['$scope',function ($scope) {
    $scope.appTitle = '每日一刻';

    $scope.title = '首页';

    // 接收广播
    $scope.$on('tab_notifice',function (e,regs) {
        console.log(regs.id);
        // var title = '首页';
        var titleArray = ['首页','作者','栏目','我'];

        // 发送广播
        // $scope.$broadcast('home_notifice',{title:titleArray[regs.id]});

        $scope.title = titleArray[regs.id];

    })
}]);

// 3.自定义指令
app.directive('navs',function () {
    return {
        restrict:"EA",
        templateUrl:'../views/nav_tpl.html',
        controller:['$scope',function ($scope) {
            // 接收广播
            $scope.$on('home_notifice',function (e,regs) {
                console.log(regs.title);
                $scope.title = regs.title;
            })
        }]
    }
});
// tabbar
app.directive('tabbar',function () {
    return {
        restrict:"EA",
        templateUrl:'../views/tabbar_tpl.html',
        controller:'TabbarController'
    }
});
app.controller('TabbarController',['$scope',function ($scope) {
    $scope.tabChange = function (index) {
        // 发送广播
        $scope.$emit('tab_notifice',{id:index});
    }
}]);


