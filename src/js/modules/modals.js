const modals = () => {
  function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    trigger.forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        // close all modal windows opened on page
        windows.forEach(item => item.style.display = 'none');

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; //freeze scroll page except modal
        // document.body.classList.add('modal-open'); // same but using boostrap class
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => item.style.display = 'none');

      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => item.style.display = 'none');
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
        document.body.style.marginRight = `0px`;
      }
    });
  }
  // show modal in a few seconds (60sec)
  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

  // чтобы при появлении модального окна не прыгала страница по ширине, т.к. в этот момент появляется и пропадает скролл на ней
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  showModalByTime('.popup', 60000);
};

export default modals;