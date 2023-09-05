const validateText = (string, maxLength=1) => {
    if(!string) return false

    const regExp = new RegExp(
      `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!"#$%&'()*+,-.\\/:;<=>?@[\\]^\`{|}~]).[^\\s-]{0,${maxLength}}$`
    );

    return regExp.test(string);
}

export default validateText;