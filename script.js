document.getElementById('loadCSV').addEventListener('click', loadCSV);

        async function loadCSV() {
            const csvContentDiv = document.getElementById('csvContent');
            const input = document.createElement('input');
            input.type = 'file';

            input.addEventListener('change', async function () {
                const file = input.files[0];
                const text = await readFile(file);
                const rows = text.split('\n');

                rows.forEach((row, index) => {
                    if (row.trim() !== '') {
                        const rowCard = document.createElement('div');
                        rowCard.classList.add('card');
                        rowCard.textContent = `Row ${index + 1}: ${row}`;
                        csvContentDiv.appendChild(rowCard);
                    }
                });

                console.log('CSV file loaded and displayed successfully!');
            });

            input.click();
        }
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsText(file);
    });
}
