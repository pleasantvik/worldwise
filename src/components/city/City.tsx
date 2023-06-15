import { useParams, useSearchParams } from "react-router-dom";

import styles from "./City.module.css";

import { formatDate } from "@/helpers";
import { ICurrentCity } from "@/models";

const City = () => {
  // TEMP DATA
  const currentCity: ICurrentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: new Date("2027-10-31T15:59:59.138Z"),
    notes: "My favorite city so far!",
  };

  const { emoji, date, notes } = currentCity;

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {id}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {id} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {id} on Wikipedia &rarr;
        </a>
      </div>

      <div>{/* <ButtonBack /> */}</div>

      <button
        onClick={() => {
          setSearchParams({
            lat: "10",
            lng: "20",
          });
        }}
      >
        chnage
      </button>
    </div>
  );
};

export default City;
