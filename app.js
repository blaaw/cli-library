const CLILibrary = [];

function CLI(name, desc, url, instal) {
    this.name = name;
    this.desciption = desc;
    this.cheatsheet = url;
    this.installed = instal;
}

function addToLibrary(n, d, u, i) {
    CLILibrary.push(
        new CLI(n, d, u, i)
    );
}

addToLibrary("vim","Editor", "http...", true)
addToLibrary("fzf","Searcher", "http...", false)
addToLibrary("nano","Editor", "http...", true)

console.log(CLILibrary)