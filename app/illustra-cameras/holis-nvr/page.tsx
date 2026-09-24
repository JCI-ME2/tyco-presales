import { VideoProductSelector } from "@/components/video-product-selector";
import { AccessControlVideo } from "@/components/access-control-video";
import { videoFrames } from "@/data/video-frames";

export default function IllustraCamerasHolisNvrPage() {
  return (
    <>
      <AccessControlVideo {...videoFrames.holisNvr} />
      <VideoProductSelector
        sheet="Holis NVR"
        category="Holis NVR"
        filterColumns={["Max Channels", "HDD Bays", "Max Storage", "Features"]}
      />
    </>
  );
}
