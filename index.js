
function currentTime() {
    let rightNow = moment().tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a');
    rightNow = updateTime(rightNow);
    document.getElementById('clock').innerText = 'New York: ' + ' ' + rightNow;
    let t = setTimeout(currentTime, 1000);
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
