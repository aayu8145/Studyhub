// JavaScript for BCA Subject Notes Page

document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const noteSections = document.querySelectorAll(".note-section");
    const downloadLinks = document.querySelectorAll(".note-section a");

    // Search Functionality
    searchBar.addEventListener("input", function(event) {
        const searchText = event.target.value.toLowerCase();
        
        noteSections.forEach(section => {
            const title = section.querySelector("h2").innerText.toLowerCase();
            const content = section.querySelector("p").innerText.toLowerCase();
            
            if (title.includes(searchText) || content.includes(searchText)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });

    

// Download Button Functionality
downloadLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action
        const fileUrl = this.getAttribute("href");
        
        // Check if file URL exists
        if (fileUrl) {
            const tempLink = document.createElement("a");
            tempLink.href = fileUrl;
            tempLink.setAttribute("download", "");
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        } else {
            alert("Sorry, the download link is broken.");
        }
    });
});
});


// Function to handle PDF downloads
function downloadPDF(subject) {
const pdfLinks = {
    math: 'c:\Users\Admin\Documents\programming.pdf',
    science: 'path/to/science.pdf',
    history: 'path/to/history.pdf'
};

if (pdfLinks[subject]) {
    const link = document.createElement('a');
    link.href = pdfLinks[subject];  // Set the PDF file path
    link.download = pdfLinks[subject].split('/').pop();  // Use the file name as the download name
    link.click();  // Trigger the download
} else {
    alert('Sorry, the requested subject PDF is not available.');
}
}
// BCAscript.js में यह कोड जोड़ें
function searchNotes() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const noteSections = document.querySelectorAll('.note-section');
    
    noteSections.forEach(section => {
        const title = section.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Enter key के लिए इवेंट लिस्नर
document.getElementById('searchBar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchNotes();
    }
});
// Search Functionality - Complete Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Search button click event
    document.getElementById('searchButton').addEventListener('click', searchNotes);
    
    // Enter key press event in search bar
    document.getElementById('searchBar').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchNotes();
        }
    });
    
    // Search function implementation
    function searchNotes() {
        const searchTerm = document.getElementById('searchBar').value.toLowerCase().trim();
        const noteSections = document.querySelectorAll('.note-section');
        let found = false;
        
        // Hide all sections first
        noteSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show matching sections
        noteSections.forEach(section => {
            const title = section.querySelector('h2').textContent.toLowerCase();
            const content = section.textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                section.style.display = 'block';
                found = true;
                
                // Scroll to the first found result
                if (!document.querySelector('.highlight')) {
                    section.classList.add('highlight');
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            }
        });
        
        // Show message if no results found
        if (!found) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No matching notes found.';
            document.querySelector('.notes-container').appendChild(noResults);
            
            setTimeout(() => {
                document.querySelector('.no-results')?.remove();
            }, 2000);
        }
    }
    
    // Clear search when clicking on search bar
    document.getElementById('searchBar').addEventListener('click', function() {
        this.value = '';
        document.querySelectorAll('.note-section').forEach(section => {
            section.style.display = 'block';
            section.classList.remove('highlight');
        });
    });
});

// Add this CSS to your stylesheet
/*

*/