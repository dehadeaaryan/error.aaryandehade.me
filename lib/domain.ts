const getSubdomain = (host: string) => {
    const parts = host.split("//")[1].split(".");
    if (parts.length === 3) {
        return parts[0];
    } else {
        return "localhost";
    }
    return null;
}

export { getSubdomain }