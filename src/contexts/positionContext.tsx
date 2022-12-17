import React, { ReactNode } from "react";

interface IPosition {
    position: string;
    handlePosition: (arg: string) => void;
}

export const PositionContext = React.createContext<IPosition>({
   position: "",
   handlePosition: () => {},
});

export const PositionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [position, setPosition] = React.useState("home");

   const handlePosition = (value: string) => setPosition(value);

   const context: IPosition = { position, handlePosition };
   const { Provider } = PositionContext;
   return <Provider value={context}>{children}</Provider>;
};
