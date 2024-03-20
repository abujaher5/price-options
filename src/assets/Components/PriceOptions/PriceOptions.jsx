import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Unlimited gym access during operational hours",
        "Locker room access",
        "Discounts on protein supplements",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all equipment and facilities",
        "Access to group fitness classes",
        "Personal training session once a week",
        "Free towel service",
        "Sauna and steam room access",
        "Nutritional counseling sessions",
        "Discounts on merchandise",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Access for up to 4 family members",
        "Access to all equipment and facilities",
        "Discounts on additional services",
        "Monthly family fitness workshop",
        "Childcare services",
        "Smoothie bar discounts",
        "Complimentary guest passes",
      ],
    },
  ];

  return (
    <div className="m-6 ">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-5 m-5 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
