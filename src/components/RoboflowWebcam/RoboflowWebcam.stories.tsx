import { Meta, StoryObj } from "@storybook/react";
import { RoboflowWebcam } from "./RoboflowWebcam";
import { RoboflowWebcamProps } from "./RoboflowWebcam.types";
import styled from "styled-components";

const meta: Meta<typeof RoboflowWebcam> = {
    component: RoboflowWebcam,
    title: "gle-roboflow-components/RoboflowWebcam",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RoboflowWebcam>;

const WebcamContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
`

export const Default: Story = (args: RoboflowWebcamProps) => {
    return (
        <WebcamContainer>
            <RoboflowWebcam/>
        </WebcamContainer>
    )
};
Default.args = {
};

export const Mirrored: Story = (args: RoboflowWebcamProps) => {
    return (
        <WebcamContainer>
            <RoboflowWebcam mirrored={args.mirrored}/>
        </WebcamContainer>
    )
};
Mirrored.args = {
    mirrored: true
};