function tabs () {

    function toggleTabs (tabSel, contentSel, active) {
        const tabs = document.querySelectorAll(tabSel);
        tabs.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                const e = event.target;
                if (e && e.parentNode.classList.contains(tabSel.replace(/\./,''))){
                    removeActiveClass(tabs, active);
                    item.classList.add(active);
                    toggleContent(contentSel, i);
                }
            });
        });
    }

    function removeActiveClass (tabs, active) {
        tabs.forEach(item => item.classList.remove(active)); 
    }

    function toggleContent (contentSele, index) {
        const contents = document.querySelectorAll(contentSele);
        contents.forEach((item, i) => {
            item.style.display = 'none';
            if (i === index) {
                item.style.display = 'block';
            }
        });
    }

    toggleTabs('.glazing_block','.glazing_content', 'active');
    toggleTabs('.no_click','.decoration_content > div > div', 'after_click');
}

export default tabs;