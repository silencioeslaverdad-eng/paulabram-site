/**
 * Ghost fascia figures — fixed backdrop trio (left, centre, right) at 9%
 * opacity, blended into the paper background. Desktop only (md+); hidden on
 * phones so they never compete with content. Drawn from the guide artwork.
 */
export default function FasciaGhost() {
  return (
    <>
      {["left-[4%]", "left-1/2 -translate-x-1/2", "right-[4%]"].map((pos) => (
        <img
          key={pos}
          src="/images/fascia-ghost.jpg"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none fixed top-1/2 hidden h-[85vh] -translate-y-1/2 select-none opacity-[0.09] mix-blend-multiply md:block ${pos}`}
        />
      ))}
    </>
  );
}
