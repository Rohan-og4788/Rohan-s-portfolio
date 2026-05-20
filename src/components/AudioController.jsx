import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef(null)
  const masterGainRef = useRef(null)
  const oscsRef = useRef([])
  const filterRef = useRef(null)
  const lfoRef = useRef(null)

  const startSynth = () => {
    try {
      // 1. Create Audio Context
      const AudioContext = window.AudioContext || window.webkitAudioContext
      const ctx = new AudioContext()
      audioCtxRef.current = ctx

      // 2. Master Gain (for smooth fading)
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0, ctx.currentTime)
      masterGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2.0) // Fade in slowly over 2s
      masterGain.connect(ctx.destination)
      masterGainRef.current = masterGain

      // 3. Filter for warm, deep sci-fi sweeps
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.Q.value = 1.5
      filter.frequency.setValueAtTime(120, ctx.currentTime)
      filter.connect(masterGain)
      filterRef.current = filter

      // 4. Oscillators (Deep ambient drone)
      // Base Node: D2 (73.42 Hz)
      const osc1 = ctx.createOscillator()
      osc1.type = 'sawtooth'
      osc1.frequency.setValueAtTime(73.42, ctx.currentTime)
      
      const osc1Gain = ctx.createGain()
      osc1Gain.gain.setValueAtTime(0.4, ctx.currentTime)
      osc1.connect(osc1Gain)
      osc1Gain.connect(filter)
      osc1.start()

      // Perfect Fifth: A2 (110 Hz)
      const osc2 = ctx.createOscillator()
      osc2.type = 'triangle'
      osc2.frequency.setValueAtTime(110.0, ctx.currentTime)

      const osc2Gain = ctx.createGain()
      osc2Gain.gain.setValueAtTime(0.35, ctx.currentTime)
      osc2.connect(osc2Gain)
      osc2Gain.connect(filter)
      osc2.start()

      // Detuned Higher Drone: D3 (146.83 Hz) with detuning
      const osc3 = ctx.createOscillator()
      osc3.type = 'sine'
      osc3.frequency.setValueAtTime(146.83, ctx.currentTime)
      osc3.detune.setValueAtTime(8, ctx.currentTime) // Detune slightly for chorus effect

      const osc3Gain = ctx.createGain()
      osc3Gain.gain.setValueAtTime(0.25, ctx.currentTime)
      osc3.connect(osc3Gain)
      osc3Gain.connect(filter)
      osc3.start()

      oscsRef.current = [
        { osc: osc1, gain: osc1Gain },
        { osc: osc2, gain: osc2Gain },
        { osc: osc3, gain: osc3Gain }
      ]

      // 5. LFO to slowly sweep filter frequency (creating that atmospheric breathing effect)
      const lfo = ctx.createOscillator()
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime) // 0.08Hz = very slow sweep (12 seconds per cycle)
      
      const lfoGain = ctx.createGain()
      lfoGain.gain.setValueAtTime(45, ctx.currentTime) // Sweep range of 45Hz

      lfo.connect(lfoGain)
      // Connect LFO to filter frequency
      lfoGain.connect(filter.frequency)
      lfo.start()
      lfoRef.current = { lfo, gain: lfoGain }

    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e)
    }
  }

  const stopSynth = () => {
    const ctx = audioCtxRef.current
    const masterGain = masterGainRef.current
    if (!ctx || !masterGain) return

    // Fade out gain over 0.5s to prevent pops
    masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime)
    masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5)

    setTimeout(() => {
      // Stop and clean up all oscillators
      oscsRef.current.forEach(({ osc }) => {
        try { osc.stop() } catch (err) {}
      })
      if (lfoRef.current) {
        try { lfoRef.current.lfo.stop() } catch (err) {}
      }
      try { ctx.close() } catch (err) {}
      
      audioCtxRef.current = null
      masterGainRef.current = null
      oscsRef.current = []
      filterRef.current = null
      lfoRef.current = null
    }, 600)
  }

  const toggleSound = () => {
    if (isPlaying) {
      stopSynth()
      setIsPlaying(false)
    } else {
      startSynth()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (audioCtxRef.current) {
        stopSynth()
      }
    }
  }, [])

  return (
    <button
      onClick={toggleSound}
      title="Ambient Deck Soundtrack Toggle"
      className={`fixed bottom-6 left-6 z-[999] flex items-center gap-2.5 rounded-full border px-4 py-2.5 backdrop-blur-md transition-all duration-300 shadow-lg active:scale-95 ${
        isPlaying
          ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400 shadow-cyan-500/10'
          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
      }`}
    >
      {isPlaying ? (
        <>
          <div className="flex items-end h-3 w-4 shrink-0">
            <span className="audio-bar" />
            <span className="audio-bar" />
            <span className="audio-bar" />
            <span className="audio-bar" />
            <span className="audio-bar" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase font-mono hidden sm:inline">SYNTH ACTIVE</span>
          <Volume2 size={15} />
        </>
      ) : (
        <>
          <span className="text-[10px] font-bold tracking-wider uppercase font-mono hidden sm:inline">AUDIO ON</span>
          <VolumeX size={15} />
        </>
      )}
    </button>
  )
}
