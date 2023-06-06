function alphabet(letters) {
    let chars = letters.split('');
    let sortedChars = chars.sort();
    let sortedLeters = sortedChars.join('');
    return sortedLeters;
}

document.writeln(alphabet("uncopyrightable"));