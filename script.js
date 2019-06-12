function checkDayValidate(str) {
    let regx = /(^[0|1|2]+[1-9]|[3]+[0|1])\/(^[0]+[1-9]|[1]+[0-2])\/(\d{2}|\d{4})/;
    let result = regx.test(str);
    if(result === true){
        alert(`${str} hợp lệ.`);
    }else{
        alert(`${str} không hợp lệ!.`);
    }
}
var str = prompt("Nhập ngày tháng năm sinh của bạn.");
checkDayValidate(str);

