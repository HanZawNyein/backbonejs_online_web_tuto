$(document).ready(function () {
    var FirstView = Backbone.View.extend({
        el: "#content",
        template: _.template($("#eventTemplate").html()),
        events:{
            "click #btnClick":"onClick"
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        onClick:function(){
            alert(
                "Hey Event"
            )
        }
    });

    var firstview = new FirstView();
});
