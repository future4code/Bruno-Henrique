export const handleString = (text: string) => {
    return text
        .normalize('NFD')
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
}