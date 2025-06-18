export { };

declare global {
    interface Window {
        gtag: (...args: [command: string, action: string, params?: Record<string, unknown>]) => void;
    }
}
