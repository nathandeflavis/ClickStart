function includeHTML() {
    let html = [
    '       <header>',
    '           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">',
    '               <div class="container-fluid">',
    '                   <a href="index.html">',
    '                       <img class="rounded-circle" src="./images/nathan.jpeg" alt="Nathan" width="60" height="60">',
    '                   </a>',
    '                   <h1 class="text-light">Nathan De Flavis</h1>',
    '                   <ul class="navbar-nav">',
    '                       <li class="nav-item">',
    '                           <a class="nav-link text-light" href="index.html">',
    '                               <i class="fa fa-home"></i>',
    '                               Home',
    '                           </a>',
    '                       </li>',
    '                       <li class="nav-item">',
    '                           <a class="nav-link text-light" href="links.html">',
    '                               <i class="fa fa-link"></i>',
    '                               Links',
    '                           </a>',
    '                       </li>',
    '                       <li class="nav-item">',
    '                           <a class="nav-link text-light" href="terms.html">',
    '                               <i class="fa fa-legal"></i>',
    '                               Terms',
    '                           </a>',
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

//source: 'How To Create an On Scroll Fixed Header' by W3Schools (n.d.) (https://www.w3schools.com/howto/howto_js_sticky_header.asp)
function makeHeaderSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {onscroll()};

    // Get the header
    var header = document.getElementsByTagName("header")[0];

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function onscroll() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

includeHTML();
makeHeaderSticky();