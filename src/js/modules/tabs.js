function tabs () {

    function toggleTabs (tabSel, contentSel, active, display = 'block') {
        const tabs = document.querySelectorAll(tabSel);
        tabs.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                const e = event.target;
                if (e && e.parentNode.classList.contains(tabSel.replace(/\./,''))){
                    removeActiveClass(tabs, active);
                    item.classList.add(active);
                    toggleContent(contentSel, i, display);
                }
            });
        });
    }

    function removeActiveClass (tabs, active) {
        tabs.forEach(item => item.classList.remove(active)); 
    }

    function toggleContent (contentSele, index, display) {
        const contents = document.querySelectorAll(contentSele);
        contents.forEach((item, i) => {
            item.style.display = 'none';
            if (i === index) {
                item.style.display = display;
            }
        });
    }

    toggleTabs('.glazing_block','.glazing_content', 'active');
    toggleTabs('.no_click','.decoration_content > div > div', 'after_click');
    toggleTabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
}

export default tabs;