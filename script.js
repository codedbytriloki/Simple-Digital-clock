const digitalClock = document.getElementById('digitalclock');

const timeClock = () => {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds();

  hour = hour % 12 || 12;

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let ampm = hour >= 12 ? 'PM' : 'AM';
  
  digitalClock.innerHTML = `${hour}:${minute}:${seconds}  ${ampm}`
}

setInterval(()=>{
  timeClock();
},1000)