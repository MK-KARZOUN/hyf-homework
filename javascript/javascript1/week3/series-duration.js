//Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Suits",
    days: 3,
    hours: 21,
    minutes: 48,
  },
  {
    title: "Dark",
    days: 0,
    hours: 22,
    minutes: 0,
  },
  {
    title: "Ted lasso",
    days: 0,
    hours: 11,
    minutes: 0,
  },
  {
    title: "See",
    days: 1,
    hours: 0,
    minutes: 0,
  },
  {
    title: "Squid game",
    days: 0,
    hours: 8,
    minutes: 6,
  },
  {
    title: "The blacklist",
    days: 5,
    hours: 21,
    minutes: 11,
  },
  {
    title: "The lord of the rings",
    days: 0,
    hours: 8,
    minutes: 0,
  },
  {
    title: "The witcher",
    days: 0,
    hours: 16,
    minutes: 0,
  },
  {
    title: "The good doctor",
    days: 3,
    hours: 2,
    minutes: 32,
  },
  {
    title: "Vikings",
    days: 2,
    hours: 17,
    minutes: 16,
  },
  {
    title: "The 100",
    days: 2,
    hours: 23,
    minutes: 40,
  },
  {
    title: "Vis a vis",
    days: 1,
    hours: 9,
    minutes: 20,
  },
];
function logOutSeriesText() {
  let result = [];
  for (let i = 0; i < seriesDurations.length; i++) {
    result.push(
      `${seriesDurations[i].title} took ${Number(
        (seriesDurations[i].days * 100) / (365 * 23) +
          (seriesDurations[i].hours / 24 / 365) * (100 / 23) +
          (seriesDurations[i].minutes / (60 * 24 * 365)) * (100 / 23)
      ).toFixed(3)} % of my life .`
    );
  }
  return result;
}
//this code turn the array to one string (.join) spearet them by a newline (\n)
console.log(logOutSeriesText().join("\n"));

console.log(/********************************/)

function timeInDays() {
  let totalInDays = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    totalInDays += seriesDurations[i].days;
  }
  return totalInDays;
}

function timeInHours() {
  let totalInHours = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    totalInHours += seriesDurations[i].hours;
  }
  return totalInHours;
}

function timeInMinutes() {
  let totalInMinutes = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    totalInMinutes += seriesDurations[i].minutes;
  }
  return totalInMinutes;
}

let timeInTotal =
  (timeInDays() * 100) / (365 * 23) +
  (timeInHours() / 24 / 365) * (100 / 23) +
  (timeInMinutes() / (60 * 24 * 365)) * (100 / 23);
console.log(`In total that is ${Number(timeInTotal.toFixed(3))} % of my life .`);