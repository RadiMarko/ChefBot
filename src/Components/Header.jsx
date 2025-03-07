import header_img_left from "../assets/header_img_1.png";
import header_img_right from "../assets/header_img_2.png";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header-image"
        src={header_img_left}
        alt="Symbol of kitchenware."
      ></img>
      <h1>Chef Bot</h1>
      <img
        className="header-image"
        src={header_img_right}
        alt="Symbol of kitchenware."
      ></img>
    </div>
  );
}
