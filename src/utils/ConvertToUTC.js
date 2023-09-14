export default function ConvertToUTC(release_date) {
  date = new Date(`${release_date}`);
  utc = date.getTime();
  return utc;
}
