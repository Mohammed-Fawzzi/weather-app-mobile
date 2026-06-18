export function getDayLabel(dateStr: string, index: number): string {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";

    const date = new Date(`${dateStr}T12:00:00`);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function formatHourTime(time: string): string {
    const hour = Number(time.split(" ")[1]?.split(":")[0] ?? 0);
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour} ${period}`;
}
