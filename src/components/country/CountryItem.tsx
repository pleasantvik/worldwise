import { ICities } from "@/models";
import styles from "./CountryItem.module.css";

type Props = {
  country: ICities;
};

function CountryItem({ country }: Props) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
