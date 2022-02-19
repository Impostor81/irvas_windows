import checkNumInput from './checkNumInput';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInput('#width');
  checkNumInput('#height');

  function bindActiontoElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index;
          break;

          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach((box, i) => {
                box.checked = false;
                if (index === i) {
                  box.checked = true;
                }
              })
            } else {
              state[prop] = item.value;
            }
          break;

          case 'SELECT':
            state[prop] = item.value;
          break;

          default:
            break;
        }

        console.log(state);
      });
    });
  }

  bindActiontoElems('click', windowForm, 'form');
  bindActiontoElems('input', windowWidth, 'width');
  bindActiontoElems('input', windowHeight, 'height');
  bindActiontoElems('change', windowType, 'type');
  bindActiontoElems('change', windowProfile, 'profile');
};

export default changeModalState;