function downloadfile() {
    // Replace 'path/to/your/file.pdf' with the actual path to your file
    var fileUrl = '/resume/jatingupta_resume.pdf';

    // Create an invisible link element
    var link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute with a desired filename
    link.download = 'jatingupta_resume.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
}
