type AnalyticsValue = string | number | boolean | null;

type AnalyticsProperties = Record<string, AnalyticsValue>;

interface AmplitudeWindow {
  track: (eventName: string, eventProperties?: AnalyticsProperties) => void;
}

declare global {
  interface Window {
    amplitude?: AmplitudeWindow;
  }
}

export const trackEvent = (
  eventName: string,
  eventProperties?: AnalyticsProperties,
) => {
  if (typeof window === "undefined" || !window.amplitude?.track) {
    return;
  }

  window.amplitude.track(eventName, eventProperties);
};

