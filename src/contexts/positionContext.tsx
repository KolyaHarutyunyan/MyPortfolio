import React, { ReactNode } from "react";

type PositionType = "home" | "about" | "skills" | "interests" | "experience" | "blog" | "contact" | "footer";

interface IPosition {
    position: PositionType;
    handlePosition: (arg: PositionType) => void;
}

export const PositionContext = React.createContext<IPosition>({
   position: "home",
   handlePosition: () => {},
});

export const PositionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [position, setPosition] = React.useState<PositionType>("home");

   const handlePosition = (value: PositionType) => setPosition(value);

   const context: IPosition = { position, handlePosition };
   const { Provider } = PositionContext;
   return <Provider value={context}>{children}</Provider>;
};
