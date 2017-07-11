/**
 * Created by Administrator on 2017/7/10.
 */
// tabbar
angular.module('app').directive('tabbar',function () {
    return {
        restrict:"EA",
        templateUrl:'../views/tabbar_tpl.html',
        controller:'TabbarController',
        replace:true,
        link:function ($scope,ele,attr) {
            $scope.$watch('id',function (newV,oldV) {
                var list = ele.children()[0].children;
                for (var i = 0; i<list.length; i++){
                    list[i].className = '';
                }
                list[$scope.id].className = 'active';
            })
        }
    }
});