function Spinner({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="min-h-screen z-[1000] min-w-full backdrop-blur-md fixed  top-0 right-0 flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
}

export default Spinner;
