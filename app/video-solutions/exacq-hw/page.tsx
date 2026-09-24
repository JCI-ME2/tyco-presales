import { VideoProductSelector } from "@/components/video-product-selector";
import { AccessControlVideo } from "@/components/access-control-video";
import { videoFrames } from "@/data/video-frames";

export default function ExacqHwPage() {
  return (
    <>
      <AccessControlVideo {...videoFrames.exacqHardware} />
      <VideoProductSelector
        sheet="Exacq HW"
        category="Exacq Hardware"
        filterColumns={["Hardware Type", "Max Channels / Servers / Streams", "Operating System", "Software Pro / Ent", "Usable Storage", "Form Factor /  Features"]}
      />
    </>
  );
}
