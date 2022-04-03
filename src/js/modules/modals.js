function modals () {
    const windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll ();


    function triggerPush (selectorTrigg, selectorModal, selectorClose, clickCloseOverlay = true ) {
        const trigger = document.querySelectorAll(selectorTrigg),
              modal = document.querySelector(selectorModal);
        if (modal.classList.contains('popup')) {
            setTimeout(() => openModal(modal, selectorModal, selectorClose, clickCloseOverlay),
             600000);
        }
        trigger.forEach((item)=>{
            item.addEventListener('click', (event) => {
                const e = event.target;
                if (e && e.classList.contains(selectorTrigg.replace(/\./,''))){
                    event.preventDefault();
                    closeAllWindows(windows, clickCloseOverlay);
                    closeModal(windows);
                    openModal(modal, selectorModal, selectorClose, clickCloseOverlay);
                }
            });
        });
    }

    function openModal (modal, selectorModal, selectorClose, clickCloseOverlay) {
       modal.style.display = 'block';
       document.body.style.overflow = 'hidden';
       document.body.style.marginRight = `${scroll}px`;
       modal.addEventListener('click', (event) =>{
           const e = event.target;
           if (e.classList.contains(selectorClose.replace(/\./,'')) || 
           e.parentNode.classList.contains(selectorClose.replace(/\./,''))){
            closeAllWindows(windows, clickCloseOverlay);
            closeModal(windows);
           }
           if (e.classList.contains(selectorModal.replace(/\./,''))) {
            closeAllWindows(windows, clickCloseOverlay);
           }
       });
    }   

    function closeAllWindows (modalWindows, clickCloseOverlay) {
        if (clickCloseOverlay) {
            modalWindows.forEach(item => {
                item.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            });
        } 
    }

    function closeModal (modalWindows) {
        modalWindows.forEach(item => {
            item.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    }

    function calcScroll () {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.heigth = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        const width = div.offsetWidth - div.clientWidth;
        div.remove();
        return width;
    }

    triggerPush('.header_btn', '.popup_engineer', '.popup_close');
    triggerPush('.phone_link', '.popup', '.popup_close');
    triggerPush('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    triggerPush('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    triggerPush('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modals;