import { useEffect, useRef } from "react";
import HoverVideo from "../components/HoverVideo";
import Card from "../components/Card";
import AudioControl from "../components/AudioControl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import scenes from "../data/scenes.json";
import posts from "../data/posts.json";




export default function Home() {
  const timersRef = useRef([]);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    const glitchAudio = () => document.getElementById("glitch-audio");
    const staticAudio = () => document.getElementById("static-audio");
    const rainAudio = () => document.getElementById("rain-audio");
    const thunderAudio = () => document.getElementById("thunder-audio");
    const rainVideo = () => document.querySelector(".rain-video-overlay");

    const schedule = (fn, ms) => {
      const id = setTimeout(() => {
        if (!mountedRef.current) return;
        fn();
      }, ms);
      timersRef.current.push(id);
    };

    const tryPlayMedia = async (el, vol = 0.15, loop = false) => {
      if (!el) return;
      try {
        el.volume = vol;
        el.loop = loop;
        await el.play();
      } catch {
        const onUserInteract = async () => {
          try { el.volume = vol; el.loop = loop; await el.play(); } catch {}
          window.removeEventListener("pointerdown", onUserInteract);
          window.removeEventListener("keydown", onUserInteract);
        };
        window.addEventListener("pointerdown", onUserInteract, { once: true });
        window.addEventListener("keydown", onUserInteract, { once: true });
      }
    };

    const tryPlayVideo = async (videoEl) => {
      if (!videoEl) return;
      try {
        await videoEl.play();
      } catch {
        const onUserInteract = () => {
          try { videoEl.play(); } catch {}
          window.removeEventListener("pointerdown", onUserInteract);
          window.removeEventListener("keydown", onUserInteract);
        };
        window.addEventListener("pointerdown", onUserInteract, { once: true });
        window.addEventListener("keydown", onUserInteract, { once: true });
      }
    };

    const startAllMediaSafely = () => {
      tryPlayMedia(staticAudio(), 0.15, true);
      tryPlayMedia(rainAudio(), 0.25, true); // rain always looping
      tryPlayMedia(thunderAudio(), 0.0, false); // preload thunder silently
      tryPlayVideo(rainVideo());
    };

    const boostStatic = () => {
      const sa = staticAudio();
      const ra = rainAudio();
      if (sa) {
        sa.volume = 0.45;
        schedule(() => { if (sa) sa.volume = 0.15; }, 300);
      }
      if (ra) {
        ra.volume = 0.6;
        schedule(() => { if (ra) ra.volume = 0.25; }, 300);
      }
    };

    const triggerLightning = () => {
      const flash = document.querySelector(".lightning-flash");
      const thunder = thunderAudio();
      if (flash) {
        flash.classList.add("active");
        setTimeout(() => flash.classList.remove("active"), 800);
      }
      if (thunder) {
        thunder.currentTime = 0;
        thunder.volume = 0.45;
        thunder.play().catch(() => {});
      }
    };

    const triggerTear = () => {
      document.body.classList.add("tear");
      schedule(() => document.body.classList.remove("tear"), 400);
    };

    const triggerRoll = () => {
      document.body.classList.add("roll");
      schedule(() => document.body.classList.remove("roll"), 1200);
    };

    const triggerBigGlitch = () => {
      const ga = glitchAudio();
      if (ga) {
        ga.currentTime = 0;
        ga.playbackRate = 0.8 + Math.random() * 0.4;
        ga.play().catch(() => {});
      }
      boostStatic();
      triggerTear();
      if (Math.random() < 0.3) triggerRoll();
      document.body.classList.add("glitching", "shaking", "chromatic");
      triggerLightning();
      schedule(() => {
        document.body.classList.remove("glitching", "shaking", "chromatic");
      }, 1500);
      const delay = Math.floor(Math.random() * 15000) + 45000;
      schedule(triggerBigGlitch, delay);
    };

    const triggerMiniGlitch = () => {
      document.body.classList.add("mini-glitching", "shaking");
      boostStatic();
      triggerTear();
      schedule(() => {
        document.body.classList.remove("mini-glitching", "shaking");
      }, 500);
      const delay = Math.floor(Math.random() * 15000) + 10000;
      schedule(triggerMiniGlitch, delay);
    };

    startAllMediaSafely();
    schedule(triggerBigGlitch, 45000);
    schedule(triggerMiniGlitch, 12000);

    return () => {
      mountedRef.current = false;
      timersRef.current.forEach((id) => clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  return (
    <div>
      <Header />
 <main className="container relative overflow-hidden">
  {/* Background Video */}
  <video
    className="bg-video"
    src="/neon-light-city-pc-animated-wallpaper.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  />

  {/* Audio Layers */}
  <audio id="glitch-audio" src="/sfx/glitch.mp3" preload="auto" />
  <audio id="static-audio" src="/sfx/static.mp3" preload="auto" loop autoPlay />
  <audio id="rain-audio" src="/rain.wav" preload="auto" loop autoPlay />
  <audio id="thunder-audio" src="/thunder.wav" preload="auto" />
  <audio id="soundtrack-audio" src="/audio/synthwave.mp3" preload="auto" loop autoPlay />
<audio id="glitch-static" src="/audio/static-loop.mp3" muted autoPlay />
<audio id="glitch-burst" src="/audio/glitch-burst.mp3" />

        {/* Sections */}
        <h2 className="text-2xl neon mb-4 glitch">Featured Scenes</h2>
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {scenes.map((s) => (
              <Card
                key={s.id}
                title={s.title}
                subtitle={s.category}
                blurb={s.blurb}
                href={`/scenes/${s.id}`}
                shopLink={s.shopLink}
                imageSrc={s.poster || s.image}
                videoSrc={s.video}
              />
            ))}
        </section>

        <h2 className="text-2xl neon mb-4 glitch">Latest Posts</h2>
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((p) => (
              <Card
                key={p.id}
                title={p.title}
                subtitle={p.category}
                blurb={p.blurb}
                href={`/posts/${p.id}`}
                shopLink={p.shopLink}
                imageSrc={p.poster || p.image}
                videoSrc={p.video}
                imageOpacity={0}
              />
            ))}
        </section>

        

        {/* Overlays */}
        <div className="scanlines pointer-events-none absolute inset-0 z-20" />
        <video
          className="rain-video-overlay"
          muted
          loop
          playsInline
          preload="auto"
          autoPlay
        >
          <source src="/FootageCrate-Looping_Rain_On_Window_1-prores.mp4" type="video/mp4" />
        </video>
        <div className="lightning-flash" />
        <div className="neon-fog" />
      </main>
      <Footer />
    </div>
  );
}
