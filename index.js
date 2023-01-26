$(document).ready(function () {
    var FirstView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        render: function () {
            console.log("Hello OWT");
        },
    });

    var firstview = new FirstView();
});
