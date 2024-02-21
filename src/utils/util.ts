// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (callback: (...args: Array<any>) => void, delay: number) => {
    let timeout: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (...args: Array<any>) {
        clearTimeout(timeout);

        timeout = setTimeout(() => callback(...args), delay);
    };
};