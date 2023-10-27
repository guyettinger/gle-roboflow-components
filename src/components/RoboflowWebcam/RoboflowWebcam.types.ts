import { ReactNode } from "react";

export interface RoboflowWebcamProps {
    children?: ReactNode
    mirrored?: boolean
    onInitialized?: () => void
    onSizeChange?: (width: number, height: number) => void
}