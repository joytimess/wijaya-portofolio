declare module 'feather-icons' {
    const feather: {
        replace(options?: any): void
        icons: Record<
            string,
            {
                toSvg(options?: any): string
            }
        >
    }

    export default feather
}