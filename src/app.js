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
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);
Vue.component('s-tabs', Tabs);
Vue.component('s-tabs-nav', TabsNav);
Vue.component('s-tabs-item', TabsItem);
Vue.component('s-tabs-body', TabsBody);
Vue.component('s-tabs-pane', TabsPane);
Vue.component('s-popover', Popover);
Vue.component('s-collapse', Collapse);
Vue.component('s-collapse-item', CollapseItem);

new Vue({
    el: "#app",
    data: {
        loadings: false,
        message: '',
        selectedTab: 'four',
        isSelected: ['2','4']
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        },
        yyy(){
            console.log('yyy');
        }
    }
});

