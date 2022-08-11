export const getTimeCreated = (date) => {
  const date1 = new Date(date);
  //   date1.setDate(date1.getDate() + 2);
  const date2 = new Date();
  const diffInMs = Math.abs(date2 - date1);
  if (diffInMs < 60000) return `${(diffInMs / (1000 * 60)).toFixed(0)}s`;
  else if (diffInMs < 3600000) return `${(diffInMs / (1000 * 60)).toFixed(0)}m`;
  else if (diffInMs < 86400000)
    return `${(diffInMs / (1000 * 60 * 60)).toFixed(0)}h`;
  else if (diffInMs < 2592000000)
    return `${(diffInMs / (1000 * 60 * 60 * 24)).toFixed(0)}d`;
  else
    return `${date1.toLocaleString("en-us", {
      month: "long",
    })} ${date1.getDate()} ${
      date1.getFullYear() != date2.getFullYear()
        ? date1.getFullYear()
        : "at " +
          date1.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
    }`;
};

export const getNotificationTimeCreated = (date) => {
  const date1 = new Date(date);
  //   date1.setDate(date1.getDate() + 2);
  const date2 = new Date();
  const diffInMs = Math.abs(date2 - date1);
  if (diffInMs < 60000) return "few seconds ago";
  else if (diffInMs < 3600000) return `few minutes ago`;
  else if (diffInMs < 86400000)
    return `${(diffInMs / (1000 * 60 * 60)).toFixed(0)} hour(s) ago`;
  else if (diffInMs < 2592000000)
    return `${(diffInMs / (1000 * 60 * 60 * 24)).toFixed(0)} day(s) ago`;
  else
    return `${date1.toLocaleString("en-us", {
      month: "long",
    })} ${date1.getDate()} ${
      date1.getFullYear() != date2.getFullYear()
        ? date1.getFullYear()
        : "at " +
          date1.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
    }`;
};
