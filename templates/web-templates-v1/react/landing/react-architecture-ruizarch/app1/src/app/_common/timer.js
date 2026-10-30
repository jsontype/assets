export const Timer = () => {

    // timer
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 99);

    timer = setInterval(function () {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            const daysElemement = document.querySelector('#days');
            if( daysElemement != undefined ) {
                daysElemement.innerHTML = days;
            }
            
            const hoursElemement = document.querySelector('#hours');
            if ( hoursElemement != undefined ) {
                hoursElemement.innerHTML = hours;
            }

            const minutesElemement = document.querySelector('#minutes');
            if ( minutesElemement != undefined ) {
                minutesElemement.innerHTML = minutes;
            }
            
            const secondsElemement = document.querySelector('#seconds');
            if ( secondsElemement != undefined ) {
                secondsElemement.innerHTML = seconds;
            }
        }
    }
}