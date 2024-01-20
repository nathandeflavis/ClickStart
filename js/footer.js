function includeHTML() {
    let html = [
    '       <footer class="container-fluid bg-dark">',
    '               <small class="text-light">&copy; Nathan De Flavis 2024.</small>',
    '               <a href="#">',
    '                   <button class="btn btn-dark float-end">',
    '                       <i class="fa fa-angle-double-up"></i>',
    '                       Back to Top',
    '                   </button>',
    '               </a>',
    '       </footer>',
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();