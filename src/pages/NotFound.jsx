import { Link } from 'react-router-dom';
import SmoothScrollLink from '../components/SmoothScrollLink';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <SmoothScrollLink
          to="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 ease-in-out"
        >
          Go to Homepage
        </SmoothScrollLink>
      </div>
    </div>
  );
};

export default NotFound;