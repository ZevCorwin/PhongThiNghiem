function getCurrentDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    day = String(day).padStart(2, "0");
    month = String(month).padStart(2, "0");
    
    let format1 = `${month}-${day}-${year}`;
    let format2 = `${month}/${day}/${year}`;
    let format3 = `${day}/${month}/${year}`;
    let format4 = `${day}/${month}/${year}`;

    console.log(format1 + ", " + format2 + " or " + format3 + ", " + format4);
}
getCurrentDate();