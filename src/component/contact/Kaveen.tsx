
export default function Kaveen() {
  return (
    <div className="h-auto bg-white">
      <style>{`
        @font-face {
          font-family: 'Sans';
          src: url('/fonts/Sans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
      <div className="flex items-center justify-center text-center px-4 sm:px-6 md:px-10 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
        <div
          className="w-full text-[56px] sm:text-[110px] md:text-[220px] lg:text-[280px] xl:text-[320px] 2xl:text-[360px] leading-[0.9] tracking-tight text-black"
          style={{ fontFamily: 'Sans, sans-serif' }}
        >
          KAVEEN
        </div>
      </div>

      <div className="flex items-center justify-center text-center text-gray-500 border-t border-gray-200 mt-2 sm:mt-4 md:mt-6 py-2 sm:py-3 md:py-4">
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-[15px]">
          © 2025 Kaveen Deshapriya. All right reserved.
        </span>
      </div>

      
    </div>
  )
}
