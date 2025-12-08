export type HolidayInfo = {
  name: string;
  date: Date;
  delaysPickup: boolean;
};

function getMemorialDay(year: number): Date {
  const may = new Date(year, 4, 31);
  while (may.getDay() !== 1) {
    may.setDate(may.getDate() - 1);
  }
  return may;
}

function getThanksgiving(year: number): Date {
  const nov = new Date(year, 10, 1);
  let thursdays = 0;
  while (thursdays < 4) {
    if (nov.getDay() === 4) thursdays++;
    if (thursdays < 4) nov.setDate(nov.getDate() + 1);
  }
  return nov;
}

function getNthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date {
  const date = new Date(year, month, 1);
  let count = 0;
  while (count < n) {
    if (date.getDay() === weekday) count++;
    if (count < n) date.setDate(date.getDate() + 1);
  }
  return date;
}

function getLaborDay(year: number): Date {
  return getNthWeekdayOfMonth(year, 8, 1, 1);
}

function getMLKDay(year: number): Date {
  return getNthWeekdayOfMonth(year, 0, 1, 3);
}

function getPresidentsDay(year: number): Date {
  return getNthWeekdayOfMonth(year, 1, 1, 3);
}

function getColumbusDay(year: number): Date {
  return getNthWeekdayOfMonth(year, 9, 1, 2);
}

export function getHolidaysForYear(year: number): HolidayInfo[] {
  return [
    { name: "New Year's Day", date: new Date(year, 0, 1), delaysPickup: true },
    { name: "Martin Luther King Jr. Day", date: getMLKDay(year), delaysPickup: false },
    { name: "Presidents' Day", date: getPresidentsDay(year), delaysPickup: false },
    { name: "Memorial Day", date: getMemorialDay(year), delaysPickup: true },
    { name: "Juneteenth", date: new Date(year, 5, 19), delaysPickup: false },
    { name: "Independence Day", date: new Date(year, 6, 4), delaysPickup: false },
    { name: "Labor Day", date: getLaborDay(year), delaysPickup: false },
    { name: "Columbus Day", date: getColumbusDay(year), delaysPickup: false },
    { name: "Veterans Day", date: new Date(year, 10, 11), delaysPickup: false },
    { name: "Thanksgiving", date: getThanksgiving(year), delaysPickup: true },
    { name: "Christmas Day", date: new Date(year, 11, 25), delaysPickup: true },
  ];
}

export function findNearbyHoliday(selectedDate: Date): HolidayInfo | null {
  const year = selectedDate.getFullYear();
  const holidays = [
    ...getHolidaysForYear(year - 1),
    ...getHolidaysForYear(year),
    ...getHolidaysForYear(year + 1),
  ];

  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  for (const holiday of holidays) {
    const diff = Math.abs(selectedDate.getTime() - holiday.date.getTime());
    if (diff <= sevenDays) {
      return holiday;
    }
  }

  return null;
}

export function getNextPickupDay(dayName: string): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = days.indexOf(dayName);
  if (dayIndex === -1) return 'the next day';
  
  const nextDayIndex = (dayIndex + 1) % 7;
  return days[nextDayIndex];
}

export function getDayName(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

export function getNextRegularPickup(dayOfWeek: number): Date {
  const today = new Date();
  const daysUntilNext = (dayOfWeek - today.getDay() + 7) % 7 || 7;
  const nextPickup = new Date(today);
  nextPickup.setDate(today.getDate() + daysUntilNext);
  return nextPickup;
}
