/**
 * Created by Vernal Liu on 3/8/2016.
 */
'use strict'
App.factory('models.histogram', ['models.common', function(commonModel) {
    var model = commonModel.extend({
        template: {
            version: 2,
            question: {
                type: 'simplechart',
                stimulus: '[This is the stem.]',
                ui_style: {
                    chart_type: 'histogram'
                },
                max_y_value: 8,
                chart_data: {
                    data: [
                        {
                            x: '1',
                            y: 5
                        },
                        {
                            x: '2',
                            y: 2
                        },
                        {
                            x: '3',
                            y: 6
                        },
                        {
                            x: '4',
                            y: 3
                        },
                        {
                            x: '5',
                            y: 3
                        }],
                    name: 'chart_title'
                },
                validation: {
                    scoring_type: 'exactMatch',
                    valid_response: {
                        score: 1,
                        value: [{
                            x: '1',
                            y: 4
                        },{
                            x: '2'
                        },{
                            x: '3'
                        },{
                            x: '4'
                        },{
                            x: '5'
                        }]
                    }
                },
                x_axis_label: 'X Axis Title',
                y_axis_label: 'Y Axis Title'
            }
        },
        addPoint: function()
        {
            this.data.question.chart_data.data.push({
                x:'',
                y: 5
            });
        },
        removePoint: function(idx)
        {
            this.data.question.chart_data.data.splice(idx, 1);
        },
        addValidResponseValue: function()
        {
            this.data.question.validation.valid_response.value.push({
                x: ''
            });
        },
        removeValidResponseValue: function(idx)
        {
            this.data.question.validation.valid_response.value.splice(idx, 1);
        }
    });
    return model;
}]);