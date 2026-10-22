"use client";

import { useState } from "react";
import Image from "next/image";

export default function PreviewImage({
  src,
  alt,
  width = 880,
  height = 500,
  className = "",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt ? `${alt} (preview unavailable)` : "Preview unavailable"}
        className={`flex items-center justify-center border border-dashed border-hairline-strong bg-paper ${className}`}
      >
        <span className="px-4 text-center font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
