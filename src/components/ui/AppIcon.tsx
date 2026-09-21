import { icons, LucideProps } from "lucide-react";

interface AppIconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
  size?: number;
  className?: string;
}

function AppIcon({ name, size = 24, className = "", ...props }: AppIconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} {...props} />;
}

export default AppIcon; 