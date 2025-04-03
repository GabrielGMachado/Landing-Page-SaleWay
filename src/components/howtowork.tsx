interface WorkProps {
    n: number;
    title: string;
    desc: string;
  }
  
  const HowToWork: React.FC<WorkProps> = ({ n, title, desc }) => {
    return (
        <div className="relative">
        <div className="bg-white rounded-xl p-6 shadow-md h-full">
          <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
            {n}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600">
            {desc}
          </p>
        </div>
        
      </div>
    );
  };
  
  export default HowToWork;
  