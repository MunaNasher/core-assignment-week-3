// Do not modify this file
import {
  convertHoursToMinutes,
  convertMinutesToHours,
  convertDaysToHours,
  convertHoursToDays,
  convertMinutesToSeconds,
  convertSecondsToMinutes
} from './date.js';

console.log("=== Time Conversion Examples ===");
console.log("5 hours =", convertHoursToMinutes(5), "minutes");
console.log("120 minutes =", convertMinutesToHours(120), "hours");
console.log("3 days =", convertDaysToHours(3), "hours");
console.log("48 hours =", convertHoursToDays(48), "days");
console.log("10 minutes =", convertMinutesToSeconds(10), "seconds");
console.log("300 seconds =", convertSecondsToMinutes(300), "minutes");
