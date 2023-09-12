export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-100">
      <div className="flex justify-center items-center gap-6">
        <div className="animate-ping">
          <div className="rounded-full h-12 w-12 border-t-4 border-r-4 border-rose-700"></div>
        </div>
        <h2 className="text-rose-500 text-2xl font-bold">Loading...</h2>
      </div>
    </div>
  );
}
