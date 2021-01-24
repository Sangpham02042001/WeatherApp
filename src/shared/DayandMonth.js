export const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function getDate(date) {
  return (
    days[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    months[date.getMonth()]
  );
}