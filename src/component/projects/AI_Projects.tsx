import { Particles } from "../ui/ParticlesDemo"

function AI_Projects() {

  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#1b1b1b] text-[#F8FBF8]'
          style={{ fontFamily: "'Bodoni Moda', serif" }}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={20}
        color="#ffffff"
        refresh
      />
      <h1 className='text-4xl lg:text-5xl 2xl:text-8xl font-bold'>AI/ML Projects</h1>

      <img
        src="/right hand.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 right-9 w-76 sm:w-46 md:w-100 opacity-90 z-0 translate-x-8 transform"
      />
      <img
        src="/left hand.png"
        alt=""
        className="pointer-events-none select-none absolute bottom-0 left-10 w-76 sm:w-46 md:w-110 opacity-90 z-0 -translate-x-8 translate-y-8"
      />
    </div>
  )
}

export default AI_Projects