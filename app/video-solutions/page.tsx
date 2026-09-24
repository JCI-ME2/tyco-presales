import { KeyRound, Server, GraduationCap } from "lucide-react";
import { AccessControlVideo } from "@/components/access-control-video";
import { CategoryGrid } from "@/components/category-grid";
import { videoFrames } from "@/data/video-frames";

const categories = [
  { href: "/video-solutions/exacq-sw", label: "Exacq Software", desc: "Licenses & upgrades", Icon: KeyRound },
  { href: "/video-solutions/exacq-hw", label: "Exacq Hardware", desc: "NVR / VMS appliances", Icon: Server },
  { href: "/video-solutions/quiz", label: "Quiz", desc: "Test your exacqVision knowledge with a shuffled quiz.", Icon: GraduationCap },
];

export default function VideoSolutionsIndex() {
  return (
    <>
      <AccessControlVideo {...videoFrames.exacqMainFeatures} />

      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <h2 className="text-2xl font-semibold text-foreground">Pick a Category to Build Your Order</h2>
        <p className="mt-1 text-sm text-muted-foreground">Each category opens a part-number selector with dropdown filters.</p>

        <CategoryGrid categories={categories} columnsClassName="lg:grid-cols-3 max-w-4xl" />
      </section>
    </>
  );
}
