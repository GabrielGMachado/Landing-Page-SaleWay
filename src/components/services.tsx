interface ServiceProps {
    d: string;
    title: string;
    desc: string;
  }
  
  const ServicesBox: React.FC<ServiceProps> = ({ d, title, desc }) => {
    return (
      <div className="bg-sky-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center">{desc}</p>
      </div>
    );
  };
  
  export default ServicesBox;
  