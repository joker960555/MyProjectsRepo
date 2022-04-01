import formInputCheck from "./formInputCheck";


function forms (state) {

    const message = {
        loading: 'Ожидайте, данные загружаются.',
        success: 'Отлично! Ожидайте обратного звонка!',
        failure: 'Упс! Что-то пошло не так...'
    };
    const messageBlock = document.createElement('div');

    formInputCheck('input[name="user_phone"]');

    function formMessage (form, text, classSelector) {
        messageBlock.classList.add(classSelector);
        form.append(messageBlock);
        messageBlock.textContent = text;
    }


    function formInput () {
        const forms = document.querySelectorAll('form');

        forms.forEach((item) => {
            item.addEventListener('submit', (event) => {
                event.preventDefault();
                let formData = new FormData(item);
                if (item.getAttribute('data-calc') === 'end') {
                    for (let key in state) {
                        formData.append(key, state[key]);
                    }
                }
                
                item.reset();
                formMessage(item, message.loading, 'status');
                postData(formData, 'assets/server.php')
                .then(data => {
                    messageBlock.textContent = message.success;
                    console.log(data);
                })
                .catch(err => {
                    messageBlock.textContent = message.failure;
                    console.error(err);

                })
                .finally(() => setTimeout(()=> messageBlock.remove(),2000));
            });
        });
    }

    async function postData (formData, url) {
        let responce = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        return await responce.text();
    }

    formInput();
}

export default forms;