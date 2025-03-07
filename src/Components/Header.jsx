import header_img_left from "../assets/header_img_1.png";
import header_img_right from "../assets/header_img_2.png";

export default function Header() {
  return (
    <div class="header">
      <img class="header-image" src={header_img_left}></img>
      <h1>Chef Bot</h1>
      <img class="header-image" src={header_img_right}></img>
    </div>
  );
}
