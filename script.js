let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerElement = document.getElementById("bgContainer");
bgContainerElement.style.backgroundColor = bgColorsArray[0];

function onChangeBgcolor() {
    let noOfBgcolors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * noOfBgcolors);
    if (randomBgColorIndex === noOfBgcolors) {
        randomBgColorIndex = noOfBgcolors - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bgContainerElement.style.backgroundColor = randomBgColor;
}