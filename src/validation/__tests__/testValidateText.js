import validateText from "../validateText";

const testValidateText = () => {
    const validText = 'eE2#'

    const withoutText = validateText('', 5);
    if (withoutText) return false;

    const withoutMaxLength = validateText(validText);
    if (withoutMaxLength) return false;

    const tooLong = validateText(validText, 2);
    if (tooLong) return false;

    const missingUppercase = validateText('ee2#', 5);
    if (missingUppercase) return false;

    const missingLowercase = validateText('EE2#', 5);
    if (missingLowercase) return false;

    const missingSpecialCharacter = validateText('Ee2', 5);
    if (missingSpecialCharacter) return false;

    const missingDigit = validateText('Ee#', 5);
    if (missingDigit) return false;

    const excessWhitespace  = validateText('Ee#2 ', 5);
    if (excessWhitespace) return false;

    return true
}

export default testValidateText;