import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        console.log(phonesWithFakeData);
      });
  }, []);

  return (
    <div>
      <h3 className="text-4xl text-center">Phones:{phones.length}</h3>

      <BarChart width={1200} height={400} data={phones}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis dataKey={"price"}></YAxis>
        <Bar dataKey={"price"} fill="lightgreen"></Bar>

        <Legend />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Phones;
