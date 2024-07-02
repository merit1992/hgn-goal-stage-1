const currentTimeUtc = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

const date = new Date();
const cth = date.getUTCHours();
const ctm = date.getUTCMinutes();
const cts = date.getUTCSeconds();
const cd = date.getDay();

const cdArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfTheWeek = cdArray[cd];

currentTimeUtc.textContent = `Current Time in UTC: ${cth} : ${ctm} : ${cts}`;
currentDay.textContent = `Current Day of the week: ${dayOfTheWeek}`;
