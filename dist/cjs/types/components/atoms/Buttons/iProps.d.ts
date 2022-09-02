import { ReactNode } from "react";
export interface iProps {
    children?: ReactNode;
    handlerFn: any;
    texto: string;
    disabled?: boolean;
    customStyleObject?: object;
    withBoolean: boolean;
}
