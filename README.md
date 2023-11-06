<a href="/">
    <img alt="logo" src="public/images/logo-flipped.png" align="right" width="120" height="120"/>
</a>

# GLE Roboflow Component Library
A React Roboflow component library.

## Documentation
[Storybook](https://guyettinger.github.io/gle-roboflow-components/)

## Example
```tsx
export const Example = ({exampleDetectionModel, exampleDetectionModelVersion}: ExampleProps) => {
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