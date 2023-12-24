import Hero from "@/components/Hero";
import scaleImg from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imageData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
}
