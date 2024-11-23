const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We're sorry, but we couldn't process your request. Please try again
        later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;
