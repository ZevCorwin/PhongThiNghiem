function dayTime(){
    const currentDay = new Date();
    const days = ["Chủ nhât", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    const day = days[currentDay.getDay()];
    const hour = currentDay.getHours();
    const minite = currentDay.getMinutes();
    const second = currentDay.getSeconds();
    const period = "AM";
    if(hour === 0 ){
        hour = 12;
    }
    else if(hour === 12){
        period = "PM";
    }
    else if(hour > 12){
        hour -= 12;
        period = "PM"
    }
    console.log(`Today is: ${day}`);
    console.log(`Current time is: ${hour}${period}:${minite}:${second}`);
}
dayTime();