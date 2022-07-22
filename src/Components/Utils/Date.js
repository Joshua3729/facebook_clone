export const getTimeCreated = (date) => {
  const date1 = new Date(date);
  const date2 = Date.now();
  const diffInMs = Math.abs(date2 - date1);
  if (diffInMs < 60000) return `${diffInMs / (1000 * 60)}s`;
  else if (diffInMs < 3600000) return `${diffInMs / (1000 * 60)}m`;
  else if (diffInMs < 86400000)
    return `${(diffInMs / (1000 * 60 * 60)).toFixed(0)}h`;
  else if (diffInMs < 2592000000) return `${diffInMs / (1000 * 60 * 60 * 24)}d`;
  else return `${date1.getDate()} ${date1.getMonth()} ${date1.getFullYear()}`;
};
