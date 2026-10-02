interface PhotoPlaceholderProps {
  index: string;
  direction: string;
  className?: string;
  captionClassName?: string;
}

/**
 * Editorial "photo to be shot" block — labelled so the direction reads as
 * intentional art direction, not a broken image.
 */
export default function PhotoPlaceholder({
  index,
  direction,
  className = "",
  captionClassName = "",
}: PhotoPlaceholderProps) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <div className="relative flex-1 bg-ink">
        <span className="absolute left-0 top-0 bg-clay px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-paper">
          Photo {index}
        </span>
        <span
          aria-hidden
          className="stretch-condensed absolute inset-0 flex items-center justify-center font-display text-[18vw] font-black uppercase leading-none text-paper/10 md:text-[9rem]"
        >
          {index}
        </span>
        <p className="absolute bottom-0 left-0 max-w-[32ch] p-4 font-mono text-[11px] leading-relaxed text-paper/70">
          {direction}
        </p>
      </div>
      <figcaption
        className={`border-t border-ink/15 pt-2 font-mono text-[10px] uppercase tracking-widest text-smoke ${captionClassName}`}
      >
        To be shot — see photography direction
      </figcaption>
    </figure>
  );
}
