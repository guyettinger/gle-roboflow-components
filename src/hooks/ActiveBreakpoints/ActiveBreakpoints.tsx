import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";
import { ActiveBreakpoints } from "./ActiveBreakpoints.types";

export const useActiveBreakpoints = (): ActiveBreakpoints => {

    let isXs = false
    let isSm = false
    let isMd = false
    let isLg = false
    let isXl = false
    let isXxl = false

    // determine screen size
    const theme = useTheme()
    if(theme?.breakpoints){
        isXs = useMediaQuery(theme.breakpoints.only("xs"))
        isSm = useMediaQuery(theme.breakpoints.only("sm"))
        isMd = useMediaQuery(theme.breakpoints.only("md"))
        isLg = useMediaQuery(theme.breakpoints.only("lg"))
        isXl = useMediaQuery(theme.breakpoints.only("xl"))
        isXxl = useMediaQuery(theme.breakpoints.only("xxl"))
    }

    return {
        isXs,
        isSm,
        isMd,
        isLg,
        isXl,
        isXxl
    }
}