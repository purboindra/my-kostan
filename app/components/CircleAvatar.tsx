import Image from "next/image";
import React from "react";

interface CircleAvatarProps {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  priority?: boolean;
  className?: string;
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({
  imageUrl,
  className,
  alt = "avatar",
  priority = true,
  unoptimized = false,
  height,
  width,
}) => {
  return (
    <Image
      alt={alt}
      src={imageUrl}
      priority={priority}
      unoptimized={unoptimized}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default CircleAvatar;
