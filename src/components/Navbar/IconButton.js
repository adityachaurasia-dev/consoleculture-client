const IconButton = ({ icon: Icon, className = "" }) => {
  return (
    <button className={`cursor-pointer ${className}`}>
      <Icon className="w-8 h-8" />
    </button>
  );
};

export default IconButton;
