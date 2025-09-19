export default function SceneCard({ scene }) {
  return (
    <article className="scene-card p-4">
      <div className="overflow-hidden rounded-md">
        <img src={scene.image} alt={scene.title} className="w-full h-56 object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold neon-subtle">{scene.title}</h3>
        <div className="text-sm text-gray-400 mt-1">{scene.movie} • {scene.actors.join(', ')}</div>
        <p className="text-gray-400 mt-2">{scene.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-400">{(scene.tags||[]).join(' • ')}</div>
          <div className="flex gap-2">
            <a href={scene.affiliate} target="_blank" rel="noreferrer" className="neon-button">Shop the Look</a>
          </div>
        </div>
      </div>
    </article>
  );
}
