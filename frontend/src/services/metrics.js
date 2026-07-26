export function trackEvent(eventName, properties = {}) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Metrics] ${eventName}:`, properties);
  }
}
