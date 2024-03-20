import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-400 flex flex-col  rounded-2xl p-4 lg:p-10 text-center">
      <h2>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-2">/month</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>

      <div className="pl-12 flex-grow ">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-6 btn font-bold hover:bg-green-700 btn-primary w-full">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
