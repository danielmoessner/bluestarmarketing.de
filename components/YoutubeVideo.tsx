function YoutubeVideo({ videoId }: { videoId: string }) {
  return (
    <iframe
      src={
        "https://www.youtube.com/embed/" +
        videoId +
        "?loop=1&rel=0&modestbranding=1&showinfo=0"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="w-full aspect-video"
    />
  );
}
//https://youtube.com/watch?v=gefZY_wgy6w&loop=1&rel=0
export default YoutubeVideo;
