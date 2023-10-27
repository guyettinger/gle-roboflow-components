import { Meta, StoryObj } from "@storybook/react";
import { RoboflowObjectDetectionCanvas } from "./RoboflowObjectDetectionCanvas";
import { RoboflowObjectDetectionCanvasProps } from "./RoboflowObjectDetectionCanvas.types";
import styled from "styled-components";

const meta: Meta<typeof RoboflowObjectDetectionCanvas> = {
    component: RoboflowObjectDetectionCanvas,
    title: "gle-roboflow-components/RoboflowObjectDetectionCanvas",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RoboflowObjectDetectionCanvas>;

const CanvasContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  canvas {
    position: relative;
    background-color: #1D1E20;
  }
`

const StoryTemplate = (args: RoboflowObjectDetectionCanvasProps) => {
    return (
        <CanvasContainer>
            <RoboflowObjectDetectionCanvas {...args}/>
        </CanvasContainer>
    )
};

export const Default: Story = (args: RoboflowObjectDetectionCanvasProps) => (
    <StoryTemplate {...args}/>
);
Default.args = {
    width: 640,
    height: 480,
    objectDetections: [{
        "class": "Quarter",
        "confidence": 0.8812620043754578,
        "bbox": {
            "x": 310.87411880493164,
            "y": 310.65998554229736,
            "width": 112.44983673095703,
            "height": 78.8657283782959
        },
        "color": "#F4004E"
    }, {
        "class": "Dime",
        "confidence": 0.8412563800811768,
        "bbox": {
            "x": 229.80114936828613,
            "y": 124.92026925086975,
            "width": 34.812564849853516,
            "height": 46.48133039474487
        },
        "color": "#4892EA"
    }, {
        "class": "Dime",
        "confidence": 0.7248507142066956,
        "bbox": {
            "x": 67.95018196105957,
            "y": 443.4764528274536,
            "width": 25.294513702392578,
            "height": 24.552812576293945
        },
        "color": "#4892EA"
    }]
};

export const Mirrored: Story = (args: RoboflowObjectDetectionCanvasProps) => (
    <StoryTemplate {...args}/>
);
Mirrored.args = {
    mirrored: true,
    width: 640,
    height: 480,
    objectDetections: [{
        "class": "Quarter",
        "confidence": 0.8812620043754578,
        "bbox": {
            "x": 310.87411880493164,
            "y": 310.65998554229736,
            "width": 112.44983673095703,
            "height": 78.8657283782959
        },
        "color": "#F4004E"
    }, {
        "class": "Dime",
        "confidence": 0.8412563800811768,
        "bbox": {
            "x": 229.80114936828613,
            "y": 124.92026925086975,
            "width": 34.812564849853516,
            "height": 46.48133039474487
        },
        "color": "#4892EA"
    }, {
        "class": "Dime",
        "confidence": 0.7248507142066956,
        "bbox": {
            "x": 67.95018196105957,
            "y": 443.4764528274536,
            "width": 25.294513702392578,
            "height": 24.552812576293945
        },
        "color": "#4892EA"
    }]
};