function includeHTML() {
    let html = [
        '       <footer>',
        '           <div class="container-fluid bg-dark">',
        '               <small class="copyright">&copy; Nathan De Flavis 2024.</small>',
        '           </div>',
        '       </footer>',
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();