window.attachLightboxTouch = function attachLightboxTouch(element, handlers) {
  if (!element) {
    return null;
  }

  let startX = 0;
  let startY = 0;

  const handleStart = (event) => {
    const touch = event.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  };

  const handleEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0 && typeof handlers.onSwipeLeft === "function") {
      handlers.onSwipeLeft();
    }

    if (deltaX > 0 && typeof handlers.onSwipeRight === "function") {
      handlers.onSwipeRight();
    }
  };

  element.addEventListener("touchstart", handleStart, { passive: true });
  element.addEventListener("touchend", handleEnd, { passive: true });

  return function detach() {
    element.removeEventListener("touchstart", handleStart);
    element.removeEventListener("touchend", handleEnd);
  };
};
