<a href="/">
    <img alt="logo" src="public/images/logo-flipped.png" align="right" width="120" height="120"/>
</a>

# GLE Roboflow Component Library
A React Roboflow component library.

[![Version](https://img.shields.io/npm/v/gle-roboflow-components?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/gle-roboflow-components)
[![Downloads](https://img.shields.io/npm/dt/gle-roboflow-components.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/gle-roboflow-components)

## Documentation
- [Storybook](https://guyettinger.github.io/gle-roboflow-components/)

## Usage
```tsx
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import {
    RoboflowApiProvider,
    RoboflowAuthParams,
    RoboflowClientProvider,
    RoboflowLoadParams,
    RoboflowModel,
    RoboflowObjectDetection,
    RoboflowObjectDetectionCanvas,
    RoboflowWebcam,
    useRoboflowClientContext,
    waitForRoboflowModule
} from "gle-roboflow-components"

// Roboflow authorization
const PUBLISHABLE_ROBOFLOW_API_KEY = "<your_roboflow_publishable_api_key>"
const roboflowAuthParams: RoboflowAuthParams = {
    publishable_key: PUBLISHABLE_ROBOFLOW_API_KEY
}

// Detection model
const exampleDetectionModel = "<roboflow_model_name>"
const exampleDetectionModelVersion = "<roboflow_model_version>"

// Example Component
const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
`

const ExampleContent = styled.div`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #1D1E20;
  border-radius: 4px;
`

const ExampleVideoContent = styled.div`
  position: relative;
`

interface ExampleProps {
    exampleDetectionModel: string,
    exampleDetectionModelVersion: string
}

const Example = ({exampleDetectionModel, exampleDetectionModelVersion}: ExampleProps) => {
    const webcamRef = useRef<Webcam>(null)
    const [objectDetections, setObjectDetections] = useState<RoboflowObjectDetection[]>([])
    const [webcamInitialized, setWebcamInitialized] = useState<boolean>(false)
    const [webcamWidth, setWebcamWidth] = useState(0)
    const [webcamHeight, setWebcamHeight] = useState(0)
    const roboflowClient = useRoboflowClientContext()
    const isReadyForCanvas = (webcamInitialized && webcamWidth > 0 && webcamHeight > 0)

    const detect = async (model: RoboflowModel) => {
        if (!webcamInitialized) return

        const webcam = webcamRef.current
        if (!webcam) return

        const video = webcam.video
        if (!video) return

        //  get detections
        try {
            const detections = await model.detect(video)
            console.log('roboflow detected', detections)
            setObjectDetections(detections)
        } catch (e) {
            const error = e as Error
            if (!error) return
            console.error(error.message)
        }
    }

    useEffect(() => {
        if (webcamInitialized) {
            // load the model
            const roboflowLoadParams: RoboflowLoadParams = {
                model: exampleDetectionModel,
                version: exampleDetectionModelVersion
            }
            roboflowClient.load(roboflowLoadParams).then(() => {
                // start inference
                roboflowClient.startInference(detect)
            })
        }
    }, [webcamInitialized])

    const handleRoboflowWebcamInitialized = () => {
        setWebcamInitialized(true)
        console.log('roboflow webcam initialized')
    }

    const handleRoboflowWebcamSizeChange = (width: number, height: number) => {
        setWebcamWidth(width)
        setWebcamHeight(height)
        console.log('roboflow webcam size change', width, height)
    }

    return (
        <ExampleContainer>
            <ExampleContent>
                <ExampleVideoContent>
                    <RoboflowWebcam
                        ref={webcamRef}
                        onInitialized={handleRoboflowWebcamInitialized}
                        onSizeChange={handleRoboflowWebcamSizeChange}
                    >
                        {isReadyForCanvas &&
                            <RoboflowObjectDetectionCanvas
                                width={webcamWidth}
                                height={webcamHeight}
                                objectDetections={objectDetections}
                            />
                        }
                    </RoboflowWebcam>
                </ExampleVideoContent>
            </ExampleContent>
        </ExampleContainer>
    )
}

// Example App
const ExampleAppContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%
`

const ExampleApp = () => {
    const [roboflowReady, setRoboflowReady] = useState(false)

    useEffect(() => {
        waitForRoboflowModule().then(() => {
            setRoboflowReady(true)
        })
    }, []);

    return (
        <ExampleAppContent>
            {roboflowReady &&
                <RoboflowApiProvider roboflowAuthParams={roboflowAuthParams}>
                    <RoboflowClientProvider>
                        <Example exampleDetectionModel={exampleDetectionModel}
                                 exampleDetectionModelVersion={exampleDetectionModelVersion}
                        />
                    </RoboflowClientProvider>
                </RoboflowApiProvider>
            }
            {!roboflowReady &&
                <span>loading...</span>
            }
        </ExampleAppContent>
    )
}


```

## Installation
```shell
npm install gle-roboflow-components@latest
```

## Development
Install
```
npm install
```
Build Library
```
npm run build
```
Run Tests
```
npm run test
```
Run Storybook
```
npm run storybook
```