'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadBasic } from 'tsparticles-basic'
import { Engine } from 'tsparticles-engine'

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadBasic(engine) // ✅ use 'loadBasic' instead of 'loadFull'
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#000' },
        particles: {
          color: { value: '#ffffff' },
          links: { enable: true, color: '#ffffff', distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 40 },
          size: { value: 2 },
        },
      }}
    />
  )
}
