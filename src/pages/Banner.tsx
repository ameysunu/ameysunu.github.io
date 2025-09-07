import { useState } from 'react'

export default function Banner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="info-banner">
      <div className="info-banner-inner">
        <div className="info-banner-text">
          📣 This site is currently going through DNS checks for the new domain to
          serve over HTTPS.
        </div>
        <button
          type="button"
          className="info-banner-close"
          aria-label="Dismiss announcement"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  )
}
