function abut() {
    let data0 = document.getElementsByClassName("menubar-abut")[0];
    let data1 = document.getElementsByClassName("menubar-abut")[1];
    let data2 = document.getElementsByClassName("menubar-abut")[2];
    let data3 = document.getElementsByClassName("menubar-abut")[3];
    data0.style.opacity = "1";
    data0.style.transition = "0.5s";
    data1.style.opacity = "1";
    data1.style.transition = "1.5s";
    data2.style.opacity = "1";
    data2.style.transition = "2.5s";
    data3.style.opacity = "1";
    data3.style.transition = "3s";
}

function abutBack() {
    let data0 = document.getElementsByClassName("menubar-abut")[0];
    let data1 = document.getElementsByClassName("menubar-abut")[1];
    let data2 = document.getElementsByClassName("menubar-abut")[2];
    let data3 = document.getElementsByClassName("menubar-abut")[3];
    data0.style.opacity = "0";
    data0.style.transition = "0.5";
    data1.style.opacity = "0";
    data1.style.transition = "1.5s";
    data2.style.opacity = "0";
    data2.style.transition = "2.5s";
    data3.style.opacity = "0";
    data3.style.transition = "3s";
}
