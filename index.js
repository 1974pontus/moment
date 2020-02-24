
function currentTime() {


    let rightNow = moment().tz('Australia/Sydney').format('MMMM Do YYYY, h:mm:ss a'); //DET ÄR HÄR DET HÄNDER!!!



    rightNow = updateTime(rightNow);
    document.getElementById('clock').innerText = 'Sydney: ' + ' ' + rightNow;
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

// 'Australia/Sydney'??