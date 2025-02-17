import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50">
      <div className="text-4xl text-blue-500">
      <FontAwesomeIcon icon={faBriefcase} flip size="4x"  />
      </div>
      <div className="mt-8 text-2xl font-bold text-blue-500 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Preloader;