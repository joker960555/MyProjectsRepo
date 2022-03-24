function modals () {

    function triggerPush (selectorTrigg, selectorModal, selectorClose) {
        const trigger = document.querySelectorAll(selectorTrigg),
              modal = document.querySelector(selectorModal);
        if (modal.classList.contains('popup')) {
            setTimeout(() => openModal(modal, selectorModal, selectorClose),
             600000);
        }
        trigger.forEach((item)=>{
            item.addEventListener('click', (event) => {
                const e = event.target;
                if (e && e.classList.contains(selectorTrigg.replace(/\./,''))){
                    event.preventDefault();
                    openModal(modal, selectorModal, selectorClose);
                }
            });
        });
    }

    function openModal (modal, selectorModal, selectorClose) {
       modal.style.display = 'block';
       document.body.style.overflow = 'hidden';
       modal.addEventListener('click', (event) =>{
           const e = event.target;
           if (e.classList.contains(selectorClose.replace(/\./,'')) || 
           e.parentNode.classList.contains(selectorClose.replace(/\./,''))){
            closeModal(modal);
           }
           if (e.classList.contains(selectorModal.replace(/\./,''))) {
            closeModal(modal);
           }
       });
    }   

    function closeModal (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    triggerPush('.header_btn', '.popup_engineer', '.popup_close');
    triggerPush('.phone_link', '.popup', '.popup_close');
}

export default modals;