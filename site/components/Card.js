import Link from "next/link"

export default function Card({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  blurb,
  shopLink,
  imageOpacity, // optional per-card override
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-black/40 hover:bg-black/60 transition duration-300 group">
      {/* Media wrapper — video plays continuously under semi-transparent image */}
      <div className="relative w-full min-h-[300px] overflow-hidden mb-3">
        {/* Video (always playing in loop) */}
        <video
          src={videoSrc}
          poster={imageSrc}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Image overlay with adjustable opacity */}
        <img
          src={imageSrc}
          alt={title}
          style={{
            opacity:
              typeof imageOpacity === "number"
                ? imageOpacity
                : "var(--card-image-opacity)",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="p-4 relative z-10">
        {title && <h3 className="text-xl font-bold neon mb-1">{title}</h3>}
        {subtitle && <p className="text-sm text-white/60 mb-2">{subtitle}</p>}
        {blurb && <p className="text-white/80 text-sm mb-2">{blurb}</p>}
        {shopLink && (
          <span className="inline-block mt-3 px-4 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition">
            Shop the Look
          </span>
        )}
      </div>
    </div>
  )
}
