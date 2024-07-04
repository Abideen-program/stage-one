const slackName = document.getElementById("slackName");
slackName.dataset.testid = "Abideen Olafimihan";

const currentTime = document.getElementById("time");

const currentDay = document.getElementById("day");


const slackEmail = document.getElementById("email");
slackEmail.dataset.testid = "olafimihana@gmail.com";

const slackPicture = document.getElementById("picture");
slackPicture.dataset.testid = "abideen.jpg";

const currentDayOfWeek = document.getElementById("currentDay");
const currentTimeOfDay = document.getElementById("currentTime");

const DATE = new Date();

const dayOfWeek = DATE.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayName = daysOfWeek[dayOfWeek];

currentDay.dataset.testid = dayName;

const getCurrentUTCTime = () => {
  const date = new Date();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  currentTimeOfDay.innerText = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  currentTime.dataset.testid = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// console.log("Current time in UTC:", getCurrentUTCTime());

window.addEventListener("load", () => {
  const interval = setInterval(() => {
    getCurrentUTCTime();
  }, 1000);
});
