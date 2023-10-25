import { ReactNode } from "react";
import { RoboflowAuthParams, RoboflowLoadParams, RoboflowModel } from "../../services/roboflowModule";

export interface RoboflowApi {
    load: (loadParams: RoboflowLoadParams) => Promise<RoboflowModel>
}

export interface RoboflowApiProviderProps {
    roboflowAuthParams: RoboflowAuthParams,
    children?: ReactNode
}