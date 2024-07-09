import React, { FC } from "react";
import { TRoot } from "./types";
import Block from "../Block";

export const Root: FC<TRoot> = ({ children }) => {
    return <div>
        {children}
        <Block/>
        </div>;
};
