const Button = ({ children, variant = 'primary', ...props }) => {
  const styles = variant === 'primary' ? 'bg-[#150b3d] text-white' : 'bg-white border border-gray-200 text-gray-700';
  return (
    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all active:scale-95 ${styles}`} {...props}>
      {children}
    </button>
  );
};
export default Button;