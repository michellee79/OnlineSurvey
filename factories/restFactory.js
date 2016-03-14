App.factory('restFactory', ['$rootScope', '$http', function($rootScope, $http) {

    var urlBase = 'http://localhost:8090/';
    var restFactory = {};

    restFactory.getServices = function (service) {
      console.log('GET');
      return promise()
    };

    function promise(){
      return {
        success: function(cb){
          cb()
          return promise()
        },
        error: function (cb){
          return promise()
        }
      }
    }

    restFactory.getService = function (service, id) {
      console.log('GET');
      return promise()
    };

    restFactory.getServiceParams = function (service, paramStr) {
      console.log('GET');
      return promise()
    };

    restFactory.postService = function (service, values) {
        console.log('POST');
        console.log(values);
      return promise()
    };

    restFactory.putService = function (service, values) {
      console.log('PUT');
      console.log(values);
      return promise()
    };

    restFactory.deleteService = function (service, id) {
      console.log('DELETE');
      console.log(values);
      return promise()
    };
    
    restFactory.send_data = function(var_data, var_name) {
        $rootScope[var_name] = var_data;
    };

    return restFactory;
}]);
