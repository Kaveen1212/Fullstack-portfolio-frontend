
export default function Kaveen() {
  return (
    <div className='h-auto'>
      <style>{`
        @font-face {
          font-family: 'Sans';
          src: url('/fonts/Sans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
      <div className="text-[90px] lg:text-[230px] xl:text-[450px] items-center text-center justify-center -mt-30 py-10" style={{ fontFamily: 'Sans, sans-serif' }}>
        KAVEEN
      </div>

      <div className='text-center justify-center items-center flex -mt-10 -md:mt-20 text-gray-500 border-t border-gray-200'>
        <span className='text-[10px] md:text-[15px]'>© 2025 Kaveen Deshapriya. All right reserved.</span>
      </div>

      
    </div>
  )
}