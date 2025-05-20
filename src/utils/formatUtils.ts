import { metersToFeet } from './dataUtils';

function convertToUtahTime(timestamp: string): string {
  // Parse the UTC timestamp
  const year = parseInt(timestamp.substring(0, 4));
  const month = parseInt(timestamp.substring(4, 6)) - 1; // JS months are 0-based
  const day = parseInt(timestamp.substring(6, 8));
  const hour = parseInt(timestamp.substring(8, 10));
  const minute = parseInt(timestamp.substring(10, 12));

  // Create a UTC date object
  const utcDate = new Date(Date.UTC(year, month, day, hour, minute));

  // Convert to Utah time (Mountain Time)
  const utahDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'America/Denver' }));

  // Format back to YYYYMMDDHHMM format
  const utahYear = utahDate.getFullYear();
  const utahMonth = String(utahDate.getMonth() + 1).padStart(2, '0');
  const utahDay = String(utahDate.getDate()).padStart(2, '0');
  const utahHour = String(utahDate.getHours()).padStart(2, '0');
  const utahMinute = String(utahDate.getMinutes()).padStart(2, '0');

  return `${utahYear}${utahMonth}${utahDay}${utahHour}${utahMinute}`;
}

function getTimeZoneAbbr(date: Date): string {
  const timeZone = 'America/Denver';
  const options: Intl.DateTimeFormatOptions = { timeZone, timeZoneName: 'short' };
  return new Intl.DateTimeFormat('en-US', options).format(date).split(' ').pop() || '';
}

export function formatTimestamp(timestamp: string): string {
  // Convert UTC to Utah time first
  const utahTimestamp = convertToUtahTime(timestamp);
  
  // Format from "202204191800" to "2022/04/22 10:00"
  if (utahTimestamp.length !== 12) return utahTimestamp;
  
  const year = utahTimestamp.substring(0, 4);
  const month = utahTimestamp.substring(4, 6);
  const day = utahTimestamp.substring(6, 8);
  const hour = utahTimestamp.substring(8, 10);
  const minute = utahTimestamp.substring(10, 12);
  
  // Create a date object to get the timezone
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
  const timeZone = getTimeZoneAbbr(date);
  
  return `${year}/${month}/${day} ${hour}:${minute} ${timeZone}`;
}

export function getFormattedElevation(elevation: number): string {
  return `${metersToFeet(elevation).toFixed(0)} ft`;
} 