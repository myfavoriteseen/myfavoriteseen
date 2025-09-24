import { useEffect, useState } from "react"
import Link from "next/link"

// Lucide icons with fallback
let CloudRain, CloudOff, Music, MusicOff, Radio, RadioOff
try {
  ({ CloudRain, CloudOff, Music, MusicOff, Radio, RadioOff } = require("lucide-react"))
} catch {}

export default function Header() {
  const [rainOn, setRainOn] = useState(true)
  const [musicOn, setMusicOn] = useState(true)
  const [glitchOn, setGlitchOn] = useState(true)

  // Load saved settings
  useEffect(() => {
    const savedRain = localStorage.getItem("rainOn")
    const savedMusic = localStorage.getItem("musicOn")
    const savedGlitch = localStorage.getItem("glitchOn")

    if (savedRain !== null) setRainOn(savedRain === "true")
    if (savedMusic !== null) setMusicOn(savedMusic === "true")
    if (savedGlitch !== null) setGlitchOn(savedGlitch === "true")
  }, [])

  // Apply audio settings
  useEffect(() => {
    const rainAudio = document.getElementById("rain-audio")
    const musicAudio = document.getElementById("soundtrack-audio")
    const glitchAudio = document.getElementById("glitch-audio")

    if (rainAudio) {
      if (rainOn) {
        rainAudio.muted = false
        rainAudio.loop = true
        rainAudio.play().catch(() => {})
      } else {
        rainAudio.muted = true
      }
    }

    if (musicAudio) {
      if (musicOn) {
        musicAudio.muted = false
        musicAudio.loop = true
        musicAudio.play().catch(() => {})
      } else {
        musicAudio.muted = true
        musicAudio.pause()
      }
    }

    if (glitchAudio) {
      if (glitchOn) {
        glitchAudio.muted = false
        glitchAudio.loop = true
        glitchAudio.play().catch(() => {})
      } else {
        glitchAudio.muted = true
        glitchAudio.pause()
      }
    }

    localStorage.setItem("rainOn", rainOn)
    localStorage.setItem("musicOn", musicOn)
    localStorage.setItem("glitchOn", glitchOn)
  }, [rainOn, musicOn, glitchOn])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="relative"
        style={{
          background: "rgba(0,0,0,0.70)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative z-10">
          {/* Left: site title / logo */}
          <div className="text-lg md:text-xl font-bold neon">My Site</div>

          {/* Right: nav + toggles */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/shop">Shop</Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Rain toggle */}
              <button
                type="button"
                onClick={() => setRainOn(!rainOn)}
                className="p-1 rounded-sm transition hover:text-[#7afcff]"
                aria-label="Toggle Rain Sound"
              >
                {CloudRain && CloudOff
                  ? rainOn ? <CloudRain size={18} /> : <CloudOff size={18} />
                  : rainOn ? "🌧️" : "🚫"}
              </button>

              {/* Music toggle */}
              <button
                type="button"
                onClick={() => setMusicOn(!musicOn)}
                className="p-1 rounded-sm transition hover:text-[#ff4dd2]"
                aria-label="Toggle Soundtrack"
              >
                {Music && MusicOff
                  ? musicOn ? <Music size={18} /> : <MusicOff size={18} />
                  : musicOn ? "🎵" : "🔇"}
              </button>

              {/* Glitch FX toggle */}
              <button
                type="button"
                onClick={() => setGlitchOn(!glitchOn)}
                className="p-1 rounded-sm transition hover:text-[#f5f56b]"
                aria-label="Toggle Glitch FX"
              >
                {Radio && RadioOff
                  ? glitchOn ? <Radio size={18} /> : <RadioOff size={18} />
                  : glitchOn ? "📻" : "❌"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
