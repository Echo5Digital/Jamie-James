import Image from "next/image";
import { PHOTOS } from "@/lib/site";

type PhotoKey = keyof typeof PHOTOS;

// A real photograph with its factual caption.
export default function EventPhoto({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  showCaption = true,
}: {
  photo: PhotoKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
}) {
  const p = PHOTOS[photo];
  const caption = "caption" in p ? p.caption : undefined;
  return (
    <figure className={className}>
      <div className="img-zoom overflow-hidden rounded-md shadow-lg">
        <Image
          src={p.src}
          alt={p.alt}
          width={p.width}
          height={p.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>
      {showCaption && caption && (
        <figcaption className="mt-2 font-body text-xs leading-snug text-foreground/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
