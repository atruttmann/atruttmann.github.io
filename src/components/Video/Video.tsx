import "./Video.scss";

interface VideoProps {
  src: string;
  mobile?: boolean;
  maxWidth?: string;
  muted?: boolean;
  poster?: string;
  caption?: string;
}

const Video = ({
  src,
  mobile = false,
  maxWidth,
  muted = false,
  poster,
  caption,
}: VideoProps) => (
  <div className="videoContainer">
    <video
      controls
      muted={muted}
      poster={poster}
      style={{
        width: mobile ? "fit-content" : undefined,
        maxWidth,
        maxHeight: mobile ? "75vh" : undefined,
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
    {caption && <p className="caption">{caption}</p>}
  </div>
);

export default Video;
