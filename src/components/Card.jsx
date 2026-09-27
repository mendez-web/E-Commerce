import { Button } from "./Button";

export const Card = ({
  productName = "unknown product",
  productPrice = `P 0.00`,
  productImage = "",
}) => {
  return (
    <div className="border border-accent-border w-50 h-70 shadow-lg shadow-shadow rounded-xl hover:-translate-y-1 hover:border-accent cursor-pointer">
      <img src={productImage} alt={productName} className="h-[50%]" />
      <div className="details-container h-[25%] px-2">
        <h2 className="text-primary-h">{productName}</h2>
        <p className="text-primary">{productPrice}</p>
      </div>
      <div className="buttons-container flex items-center px-2 gap-2 h-[25%]">
        <Button height={1} width={1} background="bg-none" name="Details" />
        <Button
          height={1}
          width={1}
          background="bg-accent-bg"
          name="Add To Cart"
          textOnHover="black"
        />
      </div>
    </div>
  );
};
