
function currentTime() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    rightNow = updateTime(rightNow);
    document.getElementById('clock').innerText = rightNow;
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


function newYork() {
    var a = moment("2013-11-18 11:55").tz("Asia/Taipei");
    var b = moment("2013-11-18 11:55").tz("America/Toronto");
       
    a.format(); // 2013-11-18T19:55:00+08:00
    b.format(); // 2013-11-18T06:55:00-05:00
    
    a.utc().format(); // 2013-11-18T11:55Z
    b.utc().format(); // 2013-11-18T11:55Z
    
}

newYork()