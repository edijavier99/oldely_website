const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-2">
        <div className="h-1 w-6 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-black animate-fillLine delay-0"></div>
        </div>
        <div className="h-1 w-6 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-black animate-fillLine delay-150"></div>
        </div>
        <div className="h-1 w-6 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-black animate-fillLine delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
