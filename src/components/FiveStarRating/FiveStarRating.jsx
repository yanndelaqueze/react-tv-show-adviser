// import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Create an empty Array of stars
  const starList = [];
  // Store the number of full stars
  const starFillCount = Math.floor(rating);
  // Store the number of half stars
  const hasStarHalf = rating - starFillCount >= 0.5;
  // Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  // Push Stars in Array
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
