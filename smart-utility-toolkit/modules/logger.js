function log(message, type = "info") {
    const timestamp = new Date().toLocaleString();
    const colors = {
        info: "\x1b[36m",    // cyan
        success: "\x1b[32m", // green
        error: "\x1b[31m",   // red
        reset: "\x1b[0m"
    };

    const color = colors[type] || colors.info;
    console.log(`${color}[${timestamp}] ${message}${colors.reset}`);
}

module.exports = log;