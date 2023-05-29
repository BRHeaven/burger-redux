import { QUANTITYCHANGE } from "../Types/mainTypes";

export const quantityChange = (object,flag) => {
    return {
        type : QUANTITYCHANGE,
        object,
        flag
    };
};
