interface ImageProps {
  src: string;
  mobile?: boolean;
  maxWidth?: string;
  alt?: string;
  caption?: string;
}

const Image = ({ src, mobile = false, maxWidth, alt, caption }: ImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt || caption || ""}
        style={{
          width: mobile ? "fit-content" : undefined,
          maxWidth,
          maxHeight: mobile ? "75vh" : undefined,
        }}
      />
      {caption && <p className="caption">{caption}</p>}
    </div>
  );
};

export default Image;
