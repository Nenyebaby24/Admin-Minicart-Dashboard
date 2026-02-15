const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm ${className}`}>
    {children}
  </div>
);
export default Card;