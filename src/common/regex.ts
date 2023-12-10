export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const passwordRegex = /^(?=.*[a-zA-Z_.-])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\\.])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\\._.-]+$/
export const numberFormatRegex = /(\d)(?=(\d{3})+(?!\d))/g
export const numberRegex = /^[0-9]$/i
export const strippedHtmlEditorRegex = /(<([^>]+)>)/gi
export const stringFormatNumber = /\D/g