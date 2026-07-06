const CLILibrary = [];

function CLI(name, desc, url, instal) {
    this.name = name;
    this.desciption = desc;
    this.url = url;
    this.installed = instal;
    this.remove = "Remove From Library"
    this.change = "Change Installed Status"
}

function addToLibrary(n, d, u, i) {
    CLILibrary.push(
        new CLI(n, d, u, i)
    );
}


addToLibrary("vim","Vim is a highly configurable modular text editor", "https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/cheatsheet", true)
addToLibrary("nano","nano is a small, free and friendly editor", "https://linux.die.net/man/1/nano", false)
addToLibrary("tmux","tmux is a free, open-source terminal multiplexer", "https://tmux.info/docs/cheatsheet", true)



function showAllCLImain() {
    document.querySelector("main").innerHTML = ""
    CLILibrary.forEach(CLI => {
        createHtmlArticle(CLI.name, CLI.desciption, CLI.url , CLI.installed, CLI.remove, CLI.change)
    })
}

function createHtmlArticle(n,d,u,i, rm, ch) {
    const article = document.createElement("article")
    const name = document.createElement("h3")
    const desc = document.createElement("p")
    const a = document.createElement("a")
    const instal = document.createElement("p")
    const btnRm = document.createElement("button")
    const btnCh = document.createElement("button")

    name.textContent = n
    desc.textContent = d
    a.setAttribute('href',u)
    a.textContent = "Cheatsheet"
    instal.textContent = i ? "installed" : "not installed"
    btnRm.textContent = rm
    btnCh.textContent = ch

    article.appendChild(name);
    article.appendChild(desc);
    article.appendChild(a);
    article.appendChild(instal);
    article.appendChild(btnRm);
    article.appendChild(btnCh);

    displayArticle(article);
}

function displayArticle(article) {
    const main = document.querySelector("main")
    main.appendChild(article)
}

/* trial new cli button, works
document.getElementById("new-cli").addEventListener("click", function() {
    must display form;
    process y collect data from the form;
    call addtoLibrary(form-data);
    call showallCLImain();
    display non form;

    this create was for trial but i think ill just refresh page
    createHtmlArticle("nuevo cli",
        "hace algo en la terminal", 
        "https://www.theodinproject.com/lessons/node-path-javascript-library",
        false, 
        "boton 1", 
        "boton 2")
})*/