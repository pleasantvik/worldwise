import styles from "@/components/city/CityItem.module.css";
import { formatDate } from "@/helpers";
import { ICities } from "@/models";
import { Link } from "react-router-dom";

type Props = {
  city: ICities;
};

const CityItem = ({ city }: Props) => {
  const {
    emoji,
    cityName,
    date,
    id,
    position: { lat, lng },
  } = city;
  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
