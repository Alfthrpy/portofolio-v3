import Image from "next/image";
import fathir from "@images/IMG-20240627-WA0018.jpg";

// Full-bleed photo strip: breaks out of the container, edge to edge,
// like a poster plate. Grayscale, hard borders, caption bar.
const PhotoStrip = () => {
  return (
    <figure className="relative left-1/2 mt-16 w-screen max-w-[100vw] -translate-x-1/2 border-y-[3px] border-ink md:mt-24">
      <div className="relative h-[320px] w-full md:h-[440px]">
        <Image
          src={fathir}
          alt="Muhammad Rizki Al-Fathir"
          fill
          className="object-cover grayscale"
          sizes="100vw"
          priority
        />
      </div>
      <figcaption className="bg-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-[2px] text-paper md:px-10">
        The engineer — Bandung, ID
      </figcaption>
    </figure>
  );
};

export default PhotoStrip;
