import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./buttonGroup";

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
new Vue({
    el: "#app",
    data: {
        loadings: false
    }
});
import chai from "chai";
import spies from "chai-spies";

chai.use(spies);

const expect = chai.expect;
console.log(Button);
try {
    //单元测试
    {
        //测试按钮含有icon
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'down'
            }
        });
        vm.$mount();
        const useElement = vm.$el.querySelector('use');
        console.log(useElement);
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-down');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: false
            }
        });
        vm.$mount();
        const useElement = vm.$el.querySelector('use');
        console.log(useElement);
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        });
        vm.$mount(div);
        const svgElement = vm.$el.querySelector('svg');
        console.log(svgElement);
        let {order} = window.getComputedStyle(svgElement);
        console.log(order);
        expect(order).to.eq('1');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        });
        vm.$mount(div);
        const svgElement = vm.$el.querySelector('svg');
        console.log(svgElement);
        let {order} = window.getComputedStyle(svgElement);
        console.log(order);
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        });
        vm.$mount();
        const spy = chai.spy(function () {
        });
        vm.$on('click', spy);
        //期待click执行
        let button = vm.$el;
        button.click();
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.map((error) => {
        console.error(error.message)
    })
}
