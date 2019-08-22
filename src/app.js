import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./buttonGroup";
import Input from "./input";

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);
new Vue({
    el: "#app",
    data: {
        loadings: false
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        }
    }
});

