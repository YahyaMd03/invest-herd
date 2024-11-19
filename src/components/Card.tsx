interface CardProps {
    title: string;
    value: string | number;
    children?: React.ReactNode;
  }
  
  const Card = ({ title, value, children }: CardProps) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-lg text-center text-black border border-blue-500">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl font-bold my-2">{value}</p>
        {children}
      </div>
    );
  };
  
  export default Card;
  