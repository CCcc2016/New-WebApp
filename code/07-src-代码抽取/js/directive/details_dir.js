/**
 * Created by Administrator on 2017/7/10.
 */
// 自定义指令
angular.module('app').directive('details',function () {
    return {
        restrict:'EA',
        template:'<div class="home_detail"><div ui-view></div></div>',
        replace:true,
        link:function ($scope,ele,attr) {
            ele.html($scope.item.content);
        }
    }
})