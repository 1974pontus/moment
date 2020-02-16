
function currentTime() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    rightNow = updateTime(rightNow);
    document.getElementById('clock').innerText = rightNow
    let t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();
