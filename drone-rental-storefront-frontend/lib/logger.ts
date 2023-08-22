const logger = (() => {
    return {
        debug: console.debug,
        info: console.info,
        error: console.error,
    };
})();

export default logger;
