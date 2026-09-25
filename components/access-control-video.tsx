export function AccessControlVideo({
  frameId,
  frameTitle,
}: {
  frameId: string;
  frameTitle: string;
}) {
  return (
    <section className="flex w-full justify-center bg-background px-6">
      <div className="w-full overflow-hidden rounded-sm shadow-sm md:w-[60%]">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://jci-me2.github.io/videoframes/?v=${encodeURIComponent(frameId)}`}
            title={frameTitle}
            scrolling="no"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
