const slackName = document.getElementById("slackName");
slackName.dataset.testid = "slackDisplayName";

const currentTime = document.getElementById("time");
currentTime.dataset.testid = "currentTimeUTC";

const currentDay = document.getElementById("day");
currentDay.dataset.testid = "currentDay";

const slackEmail = document.getElementById("email");
slackEmail.dataset.testid = "slackEmail";

const slackPicture = document.getElementById("picture");
slackPicture.dataset.testid = "slackProfilePicture";

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

currentDayOfWeek.innerText = dayName;

const getCurrentUTCTime = () => {
  const date = new Date();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  currentTimeOfDay.innerText = `${hours.toString().padStart(2, "0")}:${minutes
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