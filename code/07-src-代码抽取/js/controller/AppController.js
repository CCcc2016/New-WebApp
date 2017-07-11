/**
 * Created by Administrator on 2017/7/10.
 */
// 2.创建控制器
angular.module('app').controller('AppController',['$scope','$window',function ($scope,$window) {
    $scope.appTitle = '每日一刻';

    // 当前的标题
    $scope.title = '首页';
    // 记录当前选中的索引
    $scope.id = 0;
    // 接收广播
    $scope.$on('tab_notifice',function (e,regs) {
        console.log(regs.id);
        // var title = '首页';
        var titleArray = ['首页','作者','栏目','我'];
        $scope.id = regs.id;

        // 发送广播
        // $scope.$broadcast('home_notifice',{title:titleArray[regs.id]});

        $scope.title = titleArray[regs.id];
    })
    // 返回按钮
    $scope.back = function () {
        // 返回上一页
        $window.history.back();
    }
}]);