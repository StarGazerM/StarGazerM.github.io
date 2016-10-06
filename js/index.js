
var icon_vm = new Vue({
    el: '#mysvg',
    data: {
        name: "syh",
        show: true,
        showtext: false,
    },
    methods: {
        transfer: function () {
            this.show = !this.show;
            this.showtext = !this.showtext;
        }
    }
});
