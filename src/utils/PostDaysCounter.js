export const postDateCounter = (date) => {
    const currentDate = new Date();
    const elapsedTime = currentDate - date;
  
    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 1000 * 60 * 60;
  
    if (elapsedTime < msInHour) {
      const hours = Math.floor(elapsedTime / msInHour);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (elapsedTime < msInDay) {
      const hours = Math.floor(elapsedTime / msInHour);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(elapsedTime / msInDay);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
}