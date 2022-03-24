const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    const message = {
        loading: 'Подождите, данные загружаются.',
        success: 'Отлично! Данные загружены',
        failure: 'Упс! Что-то пошло не так...'
    };
    const div = document.createElement('div');
    inputForm();

    function clearInputs () {
        inputs.forEach(item => item.value = '');
    }

    phoneInputs.forEach(item => {
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/\D/,'');
        });
    });

    async function postInput (url, data) {
        let response = await fetch (url, {
            method: 'POST',
            body: data
        });
        return response;
    }

    function collectAndSend (elem) {
        const formData = new FormData(elem);
        postInput('assets/server.php', formData)
        .then(response => {
                const log = response.text();
                console.log(log);
                div.textContent = message.success;  
            }) 
            .catch (() => {
                console.error('333');
                div.textContent = message.failure;
            })
            .finally (() => {
                setTimeout(() => div.textContent = '', 2000);
            });
        }
    

    function inputForm () {
        form.forEach((item) => {
            item.addEventListener('submit', (event) => {
                event.preventDefault();
                collectAndSend(item);
                div.classList.add('status');
                div.textContent = message.loading;
                item.append(div);
                clearInputs();
            });
        });
    }
};

export default forms;

