import Popover from '../popover';

describe('As a PopOver', () => {

  // feature:
  //  1. as a user, i use a popover component.
  //  2. when user click popover handler can pop up content.
  //  3. then user can view that content.
  //  4. when click handler again， close。
  //  5. when click document, close.
  //  6. user can set position. top | left | right | bottom
  //  7. click content DO NOT CLOSE.
  //  8. when hover, open.


  it('should have a popover component', function () {
      expect(Popover).to.exist;
  });

  it('should render a correct popover', function () {
    const warp = document.createElement('div');
    warp.innerHTML = `
      <s-popover>
        <p>这是弹出的内容</p> 
        <div></div>
      </s-popover>  
    `
    // <button popover.left.hover="">brm</button>

    const $vm = new Vue({
      el: warp,
      component: {
        's-popover': Popover
      }
    })



  });


})