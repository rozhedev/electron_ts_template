import React, { FC } from "react";
import { TBlock } from "./types";

export const Block: FC<TBlock> = ({}) => {
    return (
        <div>
            <h2>Test template</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aut neque incidunt dolorum. Necessitatibus quia eaque fugit ad quo alias distinctio, impedit cum atque placeat nam magni
                nihil eligendi asperiores?
            </p>
        </div>
    );
};
