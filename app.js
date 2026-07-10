const CLILibrary = [];

function CLI(name, desc, url, instal) {
    this.name = name;
    this.desciption = desc;
    this.url = url;
    this.installed = instal;
    this.remove = "Remove From Library";
    this.change = "Change Installed Status";
    this.id = crypto.randomUUID();
}

function addToLibrary(n, d, u, i) {
    CLILibrary.push(
        new CLI(n, d, u, i)
    );
}

function refreshEntireMain() {
    document.querySelector("main").innerHTML = ""
    CLILibrary.forEach(CLI => {
        let CLIArtcl = createHtmlArticle(CLI.name, CLI.desciption, CLI.url , CLI.installed, CLI.remove, CLI.change, CLI.id)
        displayArticle(CLIArtcl)
    })
}

function createHtmlArticle(n,d,u,i, rm, ch, id) {
    const article = document.createElement("article")
    const name = document.createElement("h3")
    const desc = document.createElement("p")
    const a = document.createElement("a")
    const instal = document.createElement("p")
    const btnRm = document.createElement("button")
    const btnCh = document.createElement("button")

    article.setAttribute('id',id)
    name.textContent = n
    desc.textContent = d
    a.setAttribute('href',u)
    a.textContent = "Cheatsheet"
    instal.textContent = i ? "installed" : "not installed"
    btnRm.textContent = rm
    btnCh.textContent = ch
    btnRm.setAttribute('class','remove-cli')
    btnCh.setAttribute('class','change-installed')

    btnRm.addEventListener('click', function (){
       removeArticle(id); 
    });
    btnCh.addEventListener('click', function (){
       changeInstalledStatus(id); 
    });


    article.appendChild(name);
    article.appendChild(desc);
    article.appendChild(a);
    article.appendChild(instal);
    article.appendChild(btnRm);
    article.appendChild(btnCh);
    
    return article;
}

function displayArticle(article) {
    const main = document.querySelector("main")
    main.appendChild(article)
}

const form = document.querySelector("form");
form.style.display = 'none'; 
function toogleDisplayForm() {
    if (form.style.display == 'none') {
        form.style.display = 'flex'
    } else {
        form.style.display = 'none'
    }
}
document.getElementById("new-cli").addEventListener("click", toogleDisplayForm)

function processFrom() {
    const name = document.getElementById("form-name").value;
    const desc = document.getElementById("form-desc").value;
    const url = document.getElementById("form-url").value;
    const instal = document.getElementById("form-instal").value === "true";//JAVASCRIIIII... it was reading a string without the equals true 

    addToLibrary(name, desc, url, instal);
}

document.getElementById("form-btn").addEventListener("click", function(e) {
    e.preventDefault();
    processFrom();
    toogleDisplayForm();
    refreshEntireMain()  
})

function removeArticle(id) {
    document.getElementById(id).remove();
    //remove from array
    const CLIindex = CLILibrary.findIndex(CLI => CLI.id === id);//necesary, if not it'll select a random element, idk why (fuck js)
    CLILibrary.splice(CLIindex, 1);
    //console.log("after deletion: ", CLILibrary);
}

function changeInstalledStatus(id) {
    const CLI= CLILibrary.find(CLI => CLI.id === id);
    CLI.installed = !CLI.installed;
    refreshEntireMain();
}
