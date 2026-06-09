const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'projects.html');
let html = fs.readFileSync(filePath, 'utf8');

// The main grid starts at: <div class="projects-full-grid">
// and ends somewhere.
const gridStartStr = '<div class="projects-full-grid">';
const gridStartIndex = html.indexOf(gridStartStr);
if (gridStartIndex === -1) {
    console.error("Could not find grid start");
    process.exit(1);
}

// Find grid end by counting divs
let depth = 0;
let gridEndIndex = -1;
let inTag = false;
let currentTag = '';

// Quick and dirty way to extract the grid content since it's the main thing
const endGridStr = '\n    </div>\n  </section>\n<!-- CTA -->';
gridEndIndex = html.indexOf(endGridStr, gridStartIndex);

if (gridEndIndex === -1) {
    // maybe formatted differently
    gridEndIndex = html.indexOf('</section>\n<!-- CTA -->', gridStartIndex);
}

let gridContent = html.substring(gridStartIndex + gridStartStr.length, gridEndIndex);

// Let's use regex to find all cards
const cardRegex = /<div class="project-full-card[^>]*id="project-([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*(?:<!--[^>]*-->\s*)?(<section id="project-detail-\1"[^>]*>[\s\S]*?<\/section>)?/g;

let match;
const uniqueProjects = new Set();
let newGridContent = '';

while ((match = cardRegex.exec(gridContent)) !== null) {
    const projectId = match[1];
    
    // Only keep the first instance of each project to avoid duplicates
    if (!uniqueProjects.has(projectId)) {
        uniqueProjects.add(projectId);
        
        // Match[0] is the entire card AND its following section (if it matched)
        // BUT wait, my regex might not capture the full </div> of the card if it has nested divs.
        // Let's do this properly using split.
    }
}

console.log("Found unique projects:", Array.from(uniqueProjects));

