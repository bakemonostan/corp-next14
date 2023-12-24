import Hero from "@/components/Hero";
import performanceImg from "../../../public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imageData={performanceImg}
      imgAlt="welding image"
      title="We serve high performance applications"
    />
  );
}
