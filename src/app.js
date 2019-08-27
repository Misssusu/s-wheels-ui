import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./buttonGroup";
import Input from "./input";
import Tabs from "./tabs";
import TabsNav from "./tabs-nav";
import TabsItem from "./tabs-item";
import TabsBody from "./tabs-body";
import TabsPane from "./tabs-pane";

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);
Vue.component('s-tabs', Tabs);
Vue.component('s-tabs-nav', TabsNav);
Vue.component('s-tabs-item', TabsItem);
Vue.component('s-tabs-body', TabsBody);
Vue.component('s-tabs-pane', TabsPane);

new Vue({
    el: "#app",
    data: {
        loadings: false,
        message: '',
        selectedTab: 'four'
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        }
    }
});

