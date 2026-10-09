
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
      <div className="flex flex-col items-center text-center">

        {/* Animated Loader */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <div className="h-12 w-12 rounded-full bg-blue-600/10" />

          <div className="absolute h-3 w-3 rounded-full bg-blue-600" />
        </div>

        {/* Loading Text */}
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Loading<span className="animate-pulse text-blue-600">...</span>
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
          Please wait while we prepare everything for you.
        </p>

        {/* Animated Progress Bar */}
        <div className="mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        </div>

        <p className="mt-4 text-xs font-medium tracking-widest text-slate-400">
          PLEASE WAIT
        </p>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}

