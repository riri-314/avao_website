import image from "../assets/vieux_avao.png"; // adjust the path as needed
import AnimatedSVG from "./AnimatedSvg";

export default function FullScreenPicture() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <img
          src={image}
          alt="random"
          style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        />
        <div
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        >
          <AnimatedSVG />
        </div>
      </div>
    </>
  );
}