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
      <div className="buttons-container flex items-center px-2 gap-4 h-[25%]">
        <button className="cursor-pointer  border border-accent-border text-[.8rem] text-nowrap px-2 py-1 rounded-xl w-[50%] h-[60%] hover:bg-accent-bg font-bold">
          Details
        </button>
        <button className="cursor-pointer bg-accent-bg border border-accent-border text-[.8rem] text-nowrap px-2 py-2 rounded-xl w-[50%] h-[60%] hover:bg-accent hover:text-accent-text font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
