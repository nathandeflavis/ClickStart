function includeHTML() {
    let html = [
    '       <footer class="container-fluid bg-dark">',
    '               <small class="text-light">&copy; Nathan De Flavis 2024.</small>',
    '       </footer>',
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();