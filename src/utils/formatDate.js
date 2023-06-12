function formatDate(input) {
  const date = new Date(input);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (diffDays === 0) {
    return "Сегодня, " + time;
  } else if (diffDays === 1) {
    return "Вчера, " + time;
  } else {
    return diffDays + " Дня(ей) назад, " + time;
  }
}
export default formatDate;
