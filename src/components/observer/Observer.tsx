import React, { ReactNode } from "react";
import { InView } from "react-intersection-observer";

interface IObserverProps {
    className?: string;
    children?: ReactNode;
    onChange: (arg: boolean) => void;
}

const Observer: React.FC<IObserverProps> = ({ className, children, onChange }) => {
  return (
    <InView  
      className={`observer ${className}`} 
      onChange={onChange}>
        {children}
    </InView>
  );
};

export default Observer;