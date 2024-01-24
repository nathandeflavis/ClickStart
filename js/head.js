function includeHTML() {
    let html = [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">', //use Font Awesome 4 icons
        '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">', //use W3.css
        '<link rel="stylesheet" type="text/css" href="css/style.css">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">' //ensure page is properly displayed on mobile devices and enable touch zooming
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();