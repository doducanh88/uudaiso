$(document).ready(function() {

    $('.sidenav').sidenav();
});
var app = angular.module('uudaiso', []);
app.controller('uudaisoCtrl', function($scope, $http, maqrFactory, $timeout) {
    // fn_get_vouchers();
    $scope.count = 0;
    $scope.openFunc = function() {
        if ($scope.count % 2 == 0) {
            $scope.show1 = true;
        } else {
            $scope.show1 = false;
        }
        $scope.count++;
    };

    fn_danhsachquangcao();

    function fn_danhsachquangcao(a) {
        //		var rq = $cookies.get('mht_ck_serverSession');
        maqrFactory.f_get2('/admin/v1/voucher/danhsachquangcao').then(function(rp) {
            //		maqrFactory.f_get('/admin/v1/quangcao/danhsachquangcao').then(function (rp) {
            if (rp.status == 200) {
                $scope.maqr_ds_quangcao = rp.data.data;
                console.log(rp.data);
                $timeout(function() {
                    $('.carousel.carousel-slider').carousel({
                        fullWidth: true,
                        indicators: true,
                        duration: 100
                    });
                }, 300);
                // $scope.gridOptionsQuangcao.data = rp.data.data;
                // $timeout(function() {
                //     //					$scope.maqr_s_tintucs_totalPages = Math.ceil($scope.maqr_s_tintucs.length / 3);
                //     //					console.log($scope.maqr_s_tintucs_totalPages);
                //     //					$scope.maqr_cl_selectedPage(0);
                // }, 300);
            } else {
                M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
            }
            $timeout(function() {
                // $("#maqr_id_uiview").LoadingOverlay("hide", true);
            }, 900);
        }, function(rp) {
            if (rp.status == 404) {
                M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
            } else {
                // $("#maqr_id_uiview").LoadingOverlay("hide", true);
            }
            $timeout(function() {
                // $("#maqr_id_uiview").LoadingOverlay("hide", true);
            }, 900);
        });
    }

    fn_danhsachvoucher();

    function fn_danhsachvoucher(a) {
        //		var rq = $cookies.get('mht_ck_serverSession');
        maqrFactory.f_get2('/admin/v1/voucher/danhsachvoucherdangtrienkhai').then(function(rp) {
                // maqrFactory.f_get('/admin/v1/quangcao/danhsachquangcao').then(function(rp) {
                if (rp.status == 200) {
                    $scope.maqr_ds_dangquangcao = rp.data.data;
                    // if ($scope.maqr_ds_dangquangcao[0].voucher_ex[0].data.chude.value == "3") {
                    //     console.log($scope.maqr_ds_dangquangcao);
                    // } else {
                    //     console.log("2")
                    // }
                    console.log(rp.data);
                    // $scope.gridOptionsQuangcao.data = rp.data.data;
                    // $timeout(function() {
                    //     //					$scope.maqr_s_tintucs_totalPages = Math.ceil($scope.maqr_s_tintucs.length / 3);
                    //     //					console.log($scope.maqr_s_tintucs_totalPages);
                    //     //					$scope.maqr_cl_selectedPage(0);
                    // }, 300);
                } else {
                    M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
                }
                $timeout(function() {
                    // $("#maqr_id_uiview").LoadingOverlay("hide", true);
                }, 900);
            },
            function(rp) {
                if (rp.status == 404) {
                    M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
                } else {
                    // $("#maqr_id_uiview").LoadingOverlay("hide", true);
                }
                $timeout(function() {
                    // $("#maqr_id_uiview").LoadingOverlay("hide", true);
                }, 900);
            });
    }

    //     function fn_get_vouchers(a) {
    //         //		var rq = $cookies.get('mht_ck_serverSession');
    //         maqrFactory.f_get('/admin/v1/users/danhsachvoucher').then(function(rp) {
    //             if (rp.status == 200) {
    //                 if (rp.data.code == 200) {
    //                     console.log(rp.data);
    //                     $scope.maqr_s_ds_vouchers = rp.data.data;
    //                     $timeout(function() {
    //                         $('.carousel.carousel-slider').carousel({
    //                             fullWidth: true,
    //                             indicators: true,
    //                             duration: 100
    //                         });
    //                     }, 300);

    //                 } else {
    //                     $location.path('/404');
    //                 }
    //             } else {
    //                 M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
    //             }
    //             $timeout(function() {
    //                 // $("#maqr_id_uiview").LoadingOverlay("hide", true);
    //             }, 900);
    //         }, function(rp) {
    //             if (rp.status == 404) {
    //                 M.toast({ html: "Vui lòng kiểm tra kết nối mạng!" });
    //             } else {
    //                 // $("#maqr_id_uiview").LoadingOverlay("hide", true);
    //             }
    //             $timeout(function() {
    //                 // $("#maqr_id_uiview").LoadingOverlay("hide", true);
    //             }, 900);
    //         });
    //     }
});
app.factory('maqrFactory', ['$http', function($http) {
    var lh = 'http://localhost:8080';
    // var lh = 'http://192.168.31.97:8080';
    //          var lh = 'http://192.168.1.14:8080';
    //	var lh = 'https://maqr.vn';
    //        var lh = 'https://api2.maqr.vn';
    var s = {};
    s.f_put = function(u, d) {
        return $http({
            method: 'PUT',
            url: lh + '/maqr_voucher_api' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: d
        });
    };
    s.f_post = function(u, d) {
        return $http({
            method: 'POST',
            url: lh + '/maqr_voucher_api' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: d
        });
    };
    s.f_delete = function(u, d) {
        return $http({
            method: 'DELETE',
            url: lh + '/maqr_voucher_api' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: d
        });
    };
    s.f_get = function(u, d) {
        return $http({
            method: 'GET',
            url: lh + '/project1' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    };

    s.f_get2 = function(u, d) {
        return $http({
            method: 'GET',
            url: lh + '/maqr_voucher_api' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    };
    s.f_get0 = function(u, d) {
        return $http({
            method: 'GET',
            url: 'https://api2.maqr.vn/maqr_url_api' + u,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    };
    return s;
}]);

app.controller('sanphamCtrl', function($scope, $http, maqrFactory, $timeout) {

});