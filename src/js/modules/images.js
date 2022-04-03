function images () {

    const container = document.querySelector('.works'),
          imageForm = document.createElement('div'),
          bigImage = document.createElement('img');

    container.append(imageForm);
    imageForm.append(bigImage);

    imageForm.classList.add('popup');
    imageForm.style.justifyContent = 'center';
    imageForm.style.alignItems = 'center';
    imageForm.style.display = 'none';

    container.addEventListener('click', (event) => {
        event.preventDefault();
        const e = event.target;

        if (e && e.classList.contains('preview')) {
            imageForm.style.display = 'flex';
            const path = e.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (e && e.matches('div.popup')) {
            imageForm.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

}

export default images;