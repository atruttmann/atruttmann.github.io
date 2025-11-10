interface ImageProps {
  src: string;
  maxWidth?: string;
  alt?: string;
  caption?: string;
}

const Image = ({ src, maxWidth, alt, caption }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt || caption || ""} style={{ maxWidth }} />
      {caption && <p className="caption">{caption}</p>}
    </>
  );
};

export default Image;
