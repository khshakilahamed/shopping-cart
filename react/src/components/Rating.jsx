import starFill from "./../assets/star/star-fill.svg";
import starHalfFill from "./../assets/star/star-half-fill.svg";
import star from "./../assets/star/star.svg";

const Rating = () => {
  return (
    <div className="flex gap-1">
      <img src={starFill} alt="fill star" />
      <img src={starFill} alt="fill star" />
      <img src={starFill} alt="fill star" />
      <img src={starHalfFill} alt="fill star" />
      <img src={star} alt="fill star" />
      <span className="text-sm text-secondary">(2 Reviews)</span>
    </div>
  );
};

export default Rating;
