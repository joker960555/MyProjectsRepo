const modals = () => {

    function bindOpenModal (selectorOpen, selectorModal, selectorClose) {
        const openModal = document.querySelectorAll(selectorOpen),
        modal = document.querySelector(selectorModal),
        closeModal = document.querySelector(selectorClose);

        openModal.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
            
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        closeModal.addEventListener('click',(e) => {
            if (e.target) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            });
        modal.addEventListener('click',(e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            });
        });
    }
    function modalTimeout (selectorModal, time) {
        setTimeout(()=>{
            document.querySelector(selectorModal).style.display = 'block';
            document.body.style.overflow = 'hidden';
        },time);
    }
    bindOpenModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindOpenModal('.phone_link', '.popup', '.popup .popup_close');
    // modalTimeout('.popup', 60000);
};

export default modals;