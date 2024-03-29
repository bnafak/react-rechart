import axios from "axios";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  // useEffect(() => {
  //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(res => res.json())
  //     .then(data =>setPhones(data.data))
  // }, [])

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phonesData = data.data.data;
      const phonesWithFakeData = phonesData.map((phone) => {
        const obj = {
          name: phone.name_phone,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      console.log(phonesWithFakeData);
      setPhones(phonesWithFakeData);
    });

  return (
    <div>
      <h2 className="text-3xl"> Phones : {phones.length}</h2>

      <BarChart width={1250} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey= "name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
