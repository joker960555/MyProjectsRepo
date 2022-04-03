
const timer = (deadline) => {

    const getTimeRemaining = (deadline) => {
        const t = Date.parse(deadline) - Date.parse(new Date()),
              seconds = Math.floor(t/1000 % 60),
              minutes = Math.floor(t/1000/60 % 60),
              hours = Math.floor(t/1000/60/60 % 24),
              days = Math.floor(t/1000/60/60/24);

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    };
    

    const setClock = (deadline) => {
        const seconds = document.querySelector('#seconds'),
              minutes = document.querySelector('#minutes'),
              hours = document.querySelector('#hours'),
              days = document.querySelector('#days'),
              interval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock () {
            const date = getTimeRemaining(deadline);
            seconds.textContent = addZero(date.seconds);
            minutes.textContent = addZero(date.minutes);
            hours.textContent = addZero(date.hours);
            days.textContent = addZero(date.days);

            if (date.total <= 0) {
                clearInterval(interval);
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                days.textContent = '00';
            }
        }
    };

    const addZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };

    setClock(deadline);
};

export default timer;