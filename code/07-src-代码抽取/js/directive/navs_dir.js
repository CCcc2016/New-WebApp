/**
 * Created by Administrator on 2017/7/10.
 */
// 3.自定义指令
angular.module('app').directive('navs',function () {
    return {
        restrict:"EA",
        templateUrl:'../views/nav_tpl.html',
        controller:['$scope',function ($scope) {
            // 接收广播
            $scope.$on('home_notifice',function (e,regs) {
                console.log(regs.title);
                $scope.title = regs.title;
            });

        }],
        link:function ($scope,ele,attr) {
            if (attr.isBack != 'true'){
                ele.find('span').css({
                    display:'none'
                })
            }

        }
    }
});