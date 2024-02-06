function includeHTML() {
    let html = [
    '       <header class="w3-top">',
    '           <nav class="w3-bar w3-border w3-dark-grey">',
    '               <a class="w3-bar-item w3-button" href="index.html">',
    '                   <img alt="Nathan." width="18" height="18" src="./images/nathan.jpeg">',
    '                   Nathan De Flavis',
    '               </a>',
    '               <a class="w3-bar-item w3-button w3-right" href="portfolio.html" id="portfolio">',
    '                   <i class="fa fa-folder-open"></i>',
    '                   Portfolio',
    '               </a>',
    '               <a class="w3-bar-item w3-button w3-right" href="links.html" id="links">',
    '                   <i class="fa fa-link"></i>',
    '                   Links',
    '               </a>',
    '               <a class="w3-bar-item w3-button w3-right" href="index.html" id="home">',
    '                   <i class="fa fa-home"></i>',
    '                   Home',
    '               </a>',
    '           </nav>',
    '       </header>',
    '       <br/>', //make top of content below header visible
    '       <br/>'
    ];

    html.forEach((line) => {
        document.write(line);
    });
}

function highlightActiveNavLink() {
    let id = document.title;
    id = id.toLowerCase();
    let link = document.getElementById(id);

    if(link != null) {
        link.classList.add("w3-teal");
    }
}

includeHTML();
highlightActiveNavLink();