// count.js
"use server";
import BigNumber from "bignumber.js";

export const count = async () => {
    return new BigNumber(0.2).plus(0.1).toString();
};