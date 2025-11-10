interface ImageProps {
  src: string;
  mobile?: boolean;
  maxWidth?: string;
  alt?: string;
  caption?: string;
}

const Image = ({ src, mobile = false, maxWidth, alt, caption }: ImageProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt || caption || ""}
        style={{
          width: mobile ? "fit-content" : undefined,
          maxWidth,
          maxHeight: mobile ? "90vh" : undefined,
        }}
      />
      {caption && <p className="caption">{caption}</p>}
    </>
  );
};

export default Image;
