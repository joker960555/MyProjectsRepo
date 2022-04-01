// import { all } from "core-js/fn/promise";

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

    toggleContent('.big_img > img', 0, 'inline-block');
    toggleTabs('.glazing_block','.glazing_content', 'active');
    toggleTabs('.no_click','.decoration_content > div > div', 'after_click');
    toggleTabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
}

export default tabs;



//

function count (string) {  
    let counter = 0;
    let obj = {};
    let str = string.split('').sort();
    str.forEach((item, i) => {
        // console.log(str);
        if (i === 0 || item === string[i - 1]) {
            ++counter;
            obj[item] = counter;
            console.log(1);
        }
        if (item !== string[i - 1]) {
            console.log(2);
            counter = 0;
            // console.log(counter);
            ++counter;
            obj[item] = counter;
            // console.log(counter);
        }
        console.log(3);
    });
    console.log(obj);
    //  return {};
}

const ans = count("ababta");
console.log(ans);