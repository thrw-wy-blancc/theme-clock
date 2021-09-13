const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggleTheme");
const toggle12 = document.querySelector(".toggle12");
const toggle24 = document.querySelector(".toggle24");
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
    const hour = time.getHours();
    const hoursForClock = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    toggle12.addEventListener("click", () => {
        timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    });

    toggle24.addEventListener("click", () => {
        timeEl.innerHTML = `${hour} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    });

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);

