export const wrapSuccess = <T>(response: T) => ({ success: true, response });

export const wrapError = <T>(response: T) => ({ success: false, response });
