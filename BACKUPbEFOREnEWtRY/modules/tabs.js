const tabs = (tabsSelector, contentSelector, headerSelector, activeClass) => {
    const tab = document.querySelectorAll(tabsSelector),
    contents = document.querySelectorAll(contentSelector),
    header = document.querySelector(headerSelector);

    function hideTab () {
        contents.forEach((item) => {
            item.style.display = 'none';
        });
    }

    function showTab () {
        header.addEventListener('click', (event) => {
            const e = event.target;
            if (e && (e.classList.contains(tabsSelector.replace(/\./, '')) ||
            e.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
                tab.forEach((item, i ) => {
                    item.classList.remove(activeClass);
                    if (item === e || item === e.parentNode) {
                        hideTab();
                        contents[i].style.display = 'block';
                        item.classList.add(activeClass);
                    }
                });
            }
        });
    }
    showTab();
};

export default tabs;