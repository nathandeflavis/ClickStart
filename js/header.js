function includeHTML() {
    let html = [
    '       <header>',
    '           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">',
    '               <div class="container-fluid">',
    '                   <img class="img-fluid rounded-5 border" src="./images/nathan.jpeg" alt="Nathan" width="45" height="60">',
    '                   <h1 class="text-light">Nathan De Flavis</h1>',
    '                   <ul class="navbar-nav">',
    '                       <li class="nav-item">',
    '                           <a class="nav-link"href="index.html">&#127968;Home</a>',
    '                       </li>',
    '                       <li class="nav-item">',
    '                           <a class="nav-link" href="links.html">&#128279;Links</a>',
    '                       </li>',
    '                       <li class="nav-item">',
    '                           <a class="nav-link" href="sample-page.html">&#128196;Sample Page</a>',
    '                       </li>',
    '                   </ul>',
    '               </div>',
    '           </nav>',
    '       </header>'
    ];

    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();