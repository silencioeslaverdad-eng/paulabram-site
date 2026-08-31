import { useState } from 'react'

type Props = {
  id: string
  title: string
}

/**
 * Click-to-play YouTube facade. Loads a lightweight thumbnail first and only
 * mounts the real (privacy-enhanced) player when the visitor presses play.
 */
export default function VideoEmbed({ id, title }: Props) {
  const [play, setPlay] = useState(false)
  const [thumb, setThumb] = useState<'max' | 'hq' | 'none'>('max')

  return (
    <div
      className="relative w-full overflow-hidden rounded-md border"
      style={{ aspectRatio: '16/9', borderColor: 'rgb(var(--line))', background: 'rgb(var(--slate))' }}
    >
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label={`Play: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {thumb !== 'none' && (
            <img
              src={`https://i.ytimg.com/vi/${id}/${thumb === 'max' ? 'maxresdefault' : 'hqdefault'}.jpg`}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setThumb((t) => (t === 'max' ? 'hq' : 'none'))}
            />
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{ background: 'rgb(var(--slate) / 0.92)' }}
            >
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
                <path d="M1 1.8v22.4c0 1.2 1.3 1.9 2.3 1.3l18-11.2c.9-.6.9-1.9 0-2.4L3.3.5C2.3-.1 1 .6 1 1.8z" fill="#fff" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
