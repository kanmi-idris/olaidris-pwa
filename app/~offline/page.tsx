export default function Offline() {
  return (
    <div className="min-h-screen px-4 flex flex-col justify-center items-center">
      <main className="py-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">You&apos;re Offline</h1>
        <p className="mt-4 text-lg">
          Please check your internet connection and try again.
        </p>
      </main>
    </div>
  );
}
