function includeHTML() {
    let html = [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',//use Font Awesome 4 icons
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"', //use Bootstrap
        'rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">',
        '<link rel="stylesheet" type="text/css" href="css/style.css">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">' //ensure page is properly displayed on mobile devices and enable touch zooming
    ];
        
    html.forEach((line) => {
        document.write(line);
    });
}

includeHTML();