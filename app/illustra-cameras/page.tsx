import { Camera, HardDrive, GraduationCap } from "lucide-react";
import { AccessControlVideo } from "@/components/access-control-video";
import { CategoryGrid } from "@/components/category-grid";
import { videoFrames } from "@/data/video-frames";

const categories = [
  { href: "/illustra-cameras/pro-flex", label: "Illustra Pro and Flex", desc: "AI-powered professional & flexible cameras", Icon: Camera },
  { href: "/illustra-cameras/standard", label: "Illustra Standard", desc: "Standard series cameras with advanced analytics", Icon: Camera },
  { href: "/illustra-cameras/holis-nvr", label: "Holis NVR", desc: "Embedded NVRs with PoE & storage", Icon: HardDrive },
  { href: "/illustra-cameras/quiz", label: "Quiz", desc: "Test your Illustra cameras knowledge with a shuffled quiz.", Icon: GraduationCap },
];

export default function IllustraCamerasIndex() {
  return (
    <>
      <AccessControlVideo {...videoFrames.illustraCameras} />

      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <h2 className="text-2xl font-semibold text-foreground">Pick a Category to Build Your Order</h2>
        <p className="mt-1 text-sm text-muted-foreground">Each category opens a part-number selector with dropdown filters.</p>

        <CategoryGrid categories={categories} columnsClassName="lg:grid-cols-4 max-w-5xl" />
      </section>
    </>
  );
}
