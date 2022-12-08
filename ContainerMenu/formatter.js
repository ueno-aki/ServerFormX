const FormatOption /*Do not edit it*/ = {
    MAX_DIGIT: 4,
    HEADER_PREFIX: "^",
    IGNORED_STRING: "@",
};
/**
 * @param {Array<string>} contents 
 * @return {string}
 */
export function formattedText(contents) {
    const { MAX_DIGIT, HEADER_PREFIX, IGNORED_STRING } = FormatOption;
    const maxBytesLabel = contents.reduce((previous, current) => (getBytes(previous) < getBytes(current) ? current : previous), "");
    const maxBytes = getBytes(maxBytesLabel) + 1;

    if (maxBytes >= 10 ** MAX_DIGIT) {
        throw new Error("[FormatSpec]over the stricted bytes. MaxDigit = " + FormatOption.MAX_DIGIT);
    }
    return contents.reduce(
        (previous, current) => `${previous}${IGNORED_STRING}${current}${IGNORED_STRING.repeat(maxBytes - (getBytes(current) + 1))}`,
        `${HEADER_PREFIX}${("0".repeat(MAX_DIGIT) + maxBytes).slice(-1 * MAX_DIGIT)}`
    );
}
/**
 * 
 * @param {string} str 
 * @return {number}
 */
function getBytes(str) {
    return encodeURI(str).replace(/%../g, "*").length;
}
