import { RoboflowObjectDetection } from "../../services/roboflowModule";

export interface RoboflowObjectDetectionCanvasProps {
    width: number
    height: number
    objectDetections: RoboflowObjectDetection[]
}