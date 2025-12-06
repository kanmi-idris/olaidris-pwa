import {
  CSSProperties,
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface KeyboardAvoidingViewProps extends ComponentProps<"div"> {
  keyboardVisibleBottomMargin?: number;
  keyboardInvisibleBottomMargin?: number;
  onChangeVirtualKeyboardShown?: (isVirtualKeyboardShown: boolean) => void;
}

export const KeyboardAvoidingView = forwardRef<
  HTMLDivElement,
  KeyboardAvoidingViewProps
>(
  (
    {
      keyboardVisibleBottomMargin = 0,
      keyboardInvisibleBottomMargin = 0,
      children,
      style,
      onChangeVirtualKeyboardShown,
      ...props
    },
    ref
  ) => {
    const [isVirtualKeyboardShown, setVirtualKeyboardShown] = useState(false);
    const [adjustedTranslateY, setAdjustedTranslateY] = useState(0);
    const initialViewportHeight = useRef(0);

    const calculateKeyboardHeight = useCallback(() => {
      const currentViewportHeight =
        window.visualViewport?.height || window.innerHeight;
      return Math.max(0, initialViewportHeight.current - currentViewportHeight);
    }, []);

    const handleViewportChange = useCallback(() => {
      const keyboardHeight = calculateKeyboardHeight();
      const newIsKeyboardShown = keyboardHeight > 50; // Threshold to avoid false positives

      setVirtualKeyboardShown(newIsKeyboardShown);
      setAdjustedTranslateY(newIsKeyboardShown ? keyboardHeight : 0);

      if (onChangeVirtualKeyboardShown) {
        onChangeVirtualKeyboardShown(newIsKeyboardShown);
      }
    }, [calculateKeyboardHeight, onChangeVirtualKeyboardShown]);

    useEffect(() => {
      initialViewportHeight.current =
        window.visualViewport?.height || window.innerHeight;

      const viewportChangeHandler = () => {
        requestAnimationFrame(handleViewportChange);
      };

      window.visualViewport?.addEventListener("resize", viewportChangeHandler);
      window.addEventListener("resize", viewportChangeHandler);

      return () => {
        window.visualViewport?.removeEventListener(
          "resize",
          viewportChangeHandler
        );
        window.removeEventListener("resize", viewportChangeHandler);
      };
    }, [handleViewportChange]);

    const baseStyle: CSSProperties = {
      position: "fixed",
      width: "100%",
      transition: "transform 0.3s ease-out",
    };

    const positionStyle: CSSProperties = isVirtualKeyboardShown
      ? {
          bottom: 0,
          transform: `translateY(-${
            adjustedTranslateY + keyboardVisibleBottomMargin
          }px)`,
        }
      : { bottom: keyboardInvisibleBottomMargin };

    return (
      <div
        ref={ref}
        style={{
          ...baseStyle,
          ...positionStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

KeyboardAvoidingView.displayName = "KeyboardAvoidingView";

export const isKeyboardAvoidingInputElement = (
  element: Element | null
): element is HTMLInputElement =>
  element?.tagName.toLowerCase() === "input" &&
  element.classList.contains("keyboard-avoiding-input");
