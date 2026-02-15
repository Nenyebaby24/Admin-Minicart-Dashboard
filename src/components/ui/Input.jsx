const Input = ({ icon, ...props }) => (
  <div className="relative w-full">
    {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
    <input 
      className={`w-full bg-gray-50 border-none rounded-xl py-2.5 ${icon ? 'pl-10' : 'pl-4'} pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none`}
      {...props}
    />
  </div>
);
export default Input;