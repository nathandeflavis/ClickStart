function includeHTML() {
    let html = [
    '       <br/>', //make bottom of content above footer visible
    '       <footer class="w3-bottom">',
    '           <div class="w3-bar w3-border w3-dark-grey w3-center">',
    '               <small>&copy; Nathan De Flavis 2024.</small>',
    '           </div>',
    '       </footer>',
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();