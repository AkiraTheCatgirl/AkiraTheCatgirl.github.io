function continueToNext(destination) {
    // Use AJAX to load content without changing the URL
    fetch(destination)
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}