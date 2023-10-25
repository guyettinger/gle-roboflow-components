import {
    FACING_MODE_USER,
    VIDEO_INPUT,
    VideoInput,
    VideoInputMode
} from "./mediaDeviceService.types";

export const getVideoInputs = async (): Promise<VideoInput[]> => {
    // get all video input devices
    let videoInputDevices: InputDeviceInfo[] = []
    let mediaDevices = await navigator.mediaDevices.enumerateDevices()
    mediaDevices.forEach((mediaDevice: MediaDeviceInfo) => {
        if (mediaDevice.kind !== VIDEO_INPUT) return
        const inputDevice = mediaDevice as InputDeviceInfo
        if (!inputDevice) return
        videoInputDevices.push(inputDevice)
    })

    // get all media track capabilities from video input devices
    let videoInputs: VideoInput[] = []
    videoInputDevices.forEach((videoInputDevice) => {
        const mediaTrackCapabilities = videoInputDevice.getCapabilities()
        const videoInput: VideoInput = {
            inputDeviceInfo: videoInputDevice,
            mediaTrackCapabilities: mediaTrackCapabilities
        }
        videoInputs.push(videoInput)
    })

    console.log('video inputs', videoInputs)
    return videoInputs
}

export const getVideoInputModes = async () => {
    const videoInputModes: VideoInputMode[] = []
    const videoInputs = await getVideoInputs()

    videoInputs.forEach((videoInput: VideoInput) => {
        const inputDeviceInfo= videoInput.inputDeviceInfo
        const mediaTrackCapabilities= videoInput.mediaTrackCapabilities

        // if there are facing modes
        const facingModes = mediaTrackCapabilities.facingMode
        if (facingModes && facingModes.length) {
            // add each facing mode separately
            facingModes.forEach((facingMode) => {
                const videoInputMode: VideoInputMode = {
                    deviceId: inputDeviceInfo.deviceId,
                    facingMode: facingMode,
                    label: inputDeviceInfo.label,
                    aspectRatio: mediaTrackCapabilities.aspectRatio,
                    width: mediaTrackCapabilities.width,
                    height: mediaTrackCapabilities.height

                }
                videoInputModes.push(videoInputMode)
            })
        } else {
            // add default mode
            const videoInputMode: VideoInputMode = {
                deviceId: videoInput.inputDeviceInfo.deviceId,
                facingMode: FACING_MODE_USER,
                label: videoInput.inputDeviceInfo.label,
                aspectRatio: mediaTrackCapabilities.aspectRatio,
                width: mediaTrackCapabilities.width,
                height: mediaTrackCapabilities.height
            }
            videoInputModes.push(videoInputMode)
        }
    })

    return videoInputModes
}