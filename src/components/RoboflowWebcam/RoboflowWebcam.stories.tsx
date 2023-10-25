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

const StoryTemplate = (args: RoboflowWebcamProps) => {
    return (
        <WebcamContainer>
            <RoboflowWebcam/>
        </WebcamContainer>
    )
};

export const Default: Story = (args: RoboflowWebcamProps) => (
    <StoryTemplate {...args}/>
);
Default.args = {
};