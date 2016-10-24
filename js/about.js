
var sidebar = new Vue({
    el: '#icon-bottom',
    data: {
        show: true,
    },
    methods: {
        transfer: function () {
            this.show = !this.show;
        }
    }
});



