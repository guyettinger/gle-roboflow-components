import type { Preview } from "@storybook/react";
import { GLEComponentThemeStorybookSwitcher, withGLEComponentTheme } from "gle-components"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = Object.assign({}, GLEComponentThemeStorybookSwitcher)

export const decorators = [withGLEComponentTheme]

export default preview;
