interface DecorativeIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function DecorativeIcon({ className = "", width = 25, height = 13 }: DecorativeIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 25 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M0.147949 12.4443H24.4442V0.296187H0.147949V12.4443Z" 
        fill="#B974AE"
      />
    </svg>
  );
}

export default DecorativeIcon;
