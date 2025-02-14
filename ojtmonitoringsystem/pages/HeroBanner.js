import "@fontsource/poppins"; // Make sure this is at the top of your file

const HeroBanner = () => {
    return (
        <section className="hero bg-cover bg-center relative min-h-[500px]"> {/* Hero section styles */}
            <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div> {/* Overlay for darkening image */}
            <div className="hero-content relative z-10 container mx-auto text-center py-20"> {/* Content container */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 poppins"> {/* Title styles */}
                    OJT Monitoring System
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 poppins"> {/* Description styles */}
                    An OJT Monitoring System is a tool for tracking and evaluating interns' progress and performance during on-the-job training.
                </p>
                <div className="hero-buttons flex justify-center space-x-6"> {/* Button container */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg poppins">
                        Login
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg poppins">
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;