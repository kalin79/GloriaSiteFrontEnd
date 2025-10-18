export { };

// declare global {
//     interface Window {
//         gtag: (...args: [command: string, action: string, params?: Record<string, unknown>]) => void;

//     }
// }

// declare global {
//     interface Window {
//         dataLayer: Array<Record<string, string | number | boolean | object | undefined>>;
//         gtag?: (...args: [string, string, Record<string, string>]) => void;
//     }
// }

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: {
            (command: 'js', date: Date): void;
            (command: 'config', targetId: string, config?: Record<string, unknown>): void;
            (command: 'consent', action: 'update' | 'default', params: Record<string, string>): void;
        };
    }
}

