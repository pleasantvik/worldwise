// import { CityData } from "@/App";
import styles from "@/components/city/cityList.module.css";
import { ICities } from "@/models";
import Spinner from "@/reusable/Spinner";
import CityItem from "./CityItem";
import Message from "@/reusable/Message";

type Props = {
  cities: ICities[];
  isLoading: boolean;
};
const CityList = ({ cities, isLoading }: Props) => {
  //   console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
