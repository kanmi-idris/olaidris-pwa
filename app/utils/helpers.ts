export const formatDate = (date: Date | "expected" | "present"): string => {
  if (date === "expected") return "Expected";
  if (date === "present") return "Present";

  const d = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
};
