function getElementWidth(content, padding, border) {
    const number_1 = parseFloat(content);
    const number_2 = parseFloat(padding);
    const number_3 = parseFloat(border);
    const totalWidth = number_1 + number_2 * 2 + number_3 * 2;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
