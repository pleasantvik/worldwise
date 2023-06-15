import styles from "@/components/country/countryList.module.css";
import { ICities } from "@/models";
import Spinner from "@/reusable/Spinner";
import Message from "@/reusable/Message";
import CountryItem from "@/components/country/CountryItem";

type Props = {
  cities: ICities[];
  isLoading: boolean;
};
const CountryList = ({ cities, isLoading }: Props) => {
  //   console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  //   const str = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const countries: ICities[] = cities.reduce((arr: any, city: ICities) => {
    if (arr.map((el: ICities) => el.country).includes(city.country)) {
      return arr;
    } else {
      return [...arr, city];
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem key={city.id} country={city} />
      ))}
    </ul>
  );
};

export default CountryList;
