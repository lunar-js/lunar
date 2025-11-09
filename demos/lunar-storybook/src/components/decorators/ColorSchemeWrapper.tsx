import type React from 'react';
import { useEffect } from 'react';
import type { StoryContext } from '@storybook/react-vite';

interface ColorSchemeByClassNameProps {
  colorScheme: {
    light: string;
    dark: string;
    system: string;
  };
  parentSelector?: string;
}

const DEFAULT_PARENT_SELECTOR = 'html';

const ColorSchemeWrapper = ({ colorScheme, parentSelector = DEFAULT_PARENT_SELECTOR }: ColorSchemeByClassNameProps) => {
  const { light, dark, system } = colorScheme;

  return (storyFn: () => React.ReactElement, context: StoryContext) => {
    const colorScheme = (context.globals as { backgrounds?: { value: string } } | undefined)?.backgrounds?.value;

    useEffect(() => {
      let colorSchemeClassName: string;
      switch (colorScheme) {
        case 'dark': {
          colorSchemeClassName = dark;
          break;
        }
        case 'light': {
          colorSchemeClassName = light;
          break;
        }
        default: {
          colorSchemeClassName = system;
        }
      }

      const parentElement = document.querySelector(parentSelector);
      if (!parentElement) {
        return;
      }

      parentElement.classList.add(colorSchemeClassName);
    }, [colorScheme]);

    return storyFn();
  };
};

export default ColorSchemeWrapper;
