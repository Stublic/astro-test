/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

    export default function StaticTimePickerLandscape() {
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticTimePicker orientation="landscape" />
        </LocalizationProvider>
      );
    }