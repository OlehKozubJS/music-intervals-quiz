const sounds = [
    {name: "До", degrees: 0, semitones: 0},
    {name: "Ре", degrees: 1, semitones: 2},
    {name: "Мі", degrees: 2, semitones: 4},
    {name: "Фа", degrees: 3, semitones: 5},
    {name: "Соль", degrees: 4, semitones: 7},
    {name: "Ля", degrees: 5, semitones: 9},
    {name: "Сі", degrees: 6, semitones: 11},
];

const signs = [
    {name: "дубль-бемоль", semitones: -2},
    {name: "бемоль", semitones: -1},
    {name: "", semitones: 0},
    {name: "дієз", semitones: 1},
    {name: "дубль-дієз", semitones: 2},
];

function getSoundDegreesAndSemitones(soundName) {
    const {degrees: soundDegrees, semitones: soundSemitones} = sounds.find(sound => sound.name === soundName);
    return [soundDegrees, soundSemitones];
}

function getSignSemitones(signName) {
    const {semitones: signSemitones} = signs.find(sign => sign.name === signName);
    return signSemitones;
}

function getSoundAndSign(soundDegrees, soundSemitones) {
    const {name: soundName, semitones} = sounds.find(sound => sound.degrees === soundDegrees);
    const {name: signName = ""} = signs.find(sign => sign.semitones === soundSemitones - semitones);

    if (signName === "") return soundName;
    return soundName + "-" + signName;
}
