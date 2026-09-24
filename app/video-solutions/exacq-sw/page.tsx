import { VideoProductSelector } from "@/components/video-product-selector";
import { AccessControlVideo } from "@/components/access-control-video";
import { videoFrames } from "@/data/video-frames";

export default function ExacqSwPage() {
  return (
    <>
      <AccessControlVideo {...videoFrames.exacqSoftware} />
      <VideoProductSelector
        sheet="Exacq SW"
        category="Exacq Software"
        filterColumns={["License Type", "Level", "Validity"]}
      />
    </>
  );
}
