interface VideoProps {
  src: string;
  maxWidth?: string;
  muted?: boolean;
  poster?: string;
  caption?: string;
}

const Video = ({
  src,
  maxWidth,
  muted = false,
  poster,
  caption,
}: VideoProps) => (
  <>
    <video controls muted={muted} poster={poster} style={{ maxWidth }}>
      <source src={src} type="video/mp4" />
    </video>
    {caption && <p className="caption">{caption}</p>}
  </>
);

export default Video;
