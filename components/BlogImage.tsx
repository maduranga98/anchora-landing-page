"use client";

import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function BlogImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/og-image.png",
}: BlogImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
