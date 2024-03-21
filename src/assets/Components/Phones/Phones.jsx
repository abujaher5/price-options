import axios from "axios";
import { Audio } from "react-loader-spinner";
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

  const [loading, setLoading] = useState(true);
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

        // console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <h3 className="text-4xl text-center">Phones:{phones.length}</h3>

      <BarChart width={1200} height={400} data={phones}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis dataKey={"price"}></YAxis>
        <Bar dataKey={"price"} fill="lightgreen"></Bar>

        <Legend />
        <Tooltip />
      </BarChart>

      <div>
        <h3 className="text-4xl text-center">Day Picker Calender</h3>
      </div>
    </div>
  );
};

export default Phones;
