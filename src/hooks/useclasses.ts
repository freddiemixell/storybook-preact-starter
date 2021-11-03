import { useCallback } from 'preact/hooks';

export const useClasses = ({
  className = '',
  backgroundColor = '',
  textColor = '',
  backgroundHoverColor = '',
  backgroundFocusColor = '',
  bold = false,
  rounded = false,
  backgroundOpacity = 100,
}) => {
  return useCallback(() => {
    let classList = ['button', 'py-2', 'px-4', className];

    // Add background color
    if (
      backgroundColor &&
      backgroundColor !== 'transparent' &&
      backgroundColor !== 'white' &&
      backgroundColor !== 'black' &&
      backgroundColor !== 'current'
    ) {
      classList.push(`bg-${backgroundColor}-500`);
    } else {
      classList.push(`bg-${backgroundColor}`);
    }

    // Text Color.
    if (
      textColor &&
      textColor !== 'transparent' &&
      textColor !== 'white' &&
      textColor !== 'black' &&
      textColor !== 'current'
    ) {
      classList.push(`text-${textColor}-500`);
    } else {
      classList.push(`text-${textColor}`);
    }

    // Is Rounded.
    if (rounded) {
      classList.push('rounded');
    }

    // Is Bold.
    if (bold) {
      classList.push('font-bold');
    }

    // Background Opacity.
    if (backgroundOpacity) {
      classList.push(`bg-opacity-${backgroundOpacity}`);
    }

    return classList.join(' ');
  }, [
    backgroundColor,
    backgroundHoverColor,
    backgroundFocusColor,
    bold,
    className,
    rounded,
    textColor,
  ]);
};
