/**
 * Created by vernal liu on 3/8/2016.
 */
App.factory('models.common', function(Class) {
    var model = Class.extend({
        init: function() {
            this.data = this.template;
        },
        loadFromQuestion: function() {

        },
        serialize: function() {
            return {
                'version' : this.data.version,
                'question': this.data.question,
                'response': this.data.response
            }
        },
        getModelData: function(){
            return this.data;
        }

    })

    return model;

});