interface Props {
  children: React.ReactNode;
  className?: string;
}

const CommonButton2: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`bg-black text-white text-[24px] w-full border border-black rounded-md font-medium hover:bg-white hover:text-black duration-300 h-[80px] ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton2;
