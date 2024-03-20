import PropTypes from "prop-types";
import { RiCheckboxCircleLine } from "react-icons/ri";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <RiCheckboxCircleLine className="bg-white rounded-full text-green-700  mr-2"></RiCheckboxCircleLine>
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
