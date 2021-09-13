const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggleTheme");
const toggle12 = document.querySelector(".toggle12");
const toggle24 = document.querySelector(".toggle24");
const toggleClock = document.querySelector(".toggleClock")
const html = document.querySelector("html");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener("click", () => {
    html.classList.toggle("dark");

    if(html.classList.contains("dark")){
        toggleEl.innerHTML = "Light Mode";
    } else {
        toggleEl.innerHTML = "Dark Mode";
    }
});

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hoursForClock = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`;

    toggle12.addEventListener("click", () => {
        timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    });

    toggle24.addEventListener("click", () => {
        timeEl.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    });

    toggleClock.addEventListener("click", () => {
        timeEl.innerHTML = " ";
        timeEl.style.transition = "all 0.5s ease-in";
    });

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);

