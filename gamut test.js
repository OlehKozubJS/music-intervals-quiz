const soundInput = document.querySelector(".sound-input");
const signInput = document.querySelector(".sign-input");
const modeInput = document.querySelector(".mode-input");
const enterButton = document.querySelector(".enter-button");
const output = document.querySelector(".output");

enterButton.addEventListener("click", enterFunction);

function enterFunction() {
    const newSoundProperties = getSoundDegreesAndSemitones(soundInput.value);
    const newSignDegrees = getSignSemitones(signInput.value);
    const newMode = modeInput.value;

    output.textContent = getGamut(newSoundProperties[0], newSoundProperties[1], newSignDegrees, newMode).join(" ");
}