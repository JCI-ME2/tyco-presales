import { VideoProductSelector } from "@/components/video-product-selector";
import { AccessControlVideo } from "@/components/access-control-video";
import { videoFrames } from "@/data/video-frames";

export default function IllustraStandardPage() {
  return (
    <>
      <AccessControlVideo {...videoFrames.illustraStandard} />
      <VideoProductSelector
        sheet="Illustra Standard"
        category="Illustra Standard"
        filterColumns={["Series", "Resolution", "Shape", "Lens type", "Lens mm", "In / outdoor", "IR", "Video Analytics"]}
      />
    </>
  );
}
