fetch("contact.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("__pushctn");

    let html = `
      <table style="width:100%; border-collapse: collapse; background-color:#f6f8fa;">
        <tr style="border: 1px solid black; background-color:#e5e7eb;">
          <th style="border: 1px solid black; padding:8px;">Nom</th>
          <th style="border: 1px solid black; padding:8px;">Année</th>
          <th style="border: 1px solid black; padding:8px;">Type</th>
          <th style="border: 1px solid black; padding:8px;">État</th>
          <th style="border: 1px solid black; padding:8px;">Description</th>
          <th style="border: 1px solid black; padding:8px;">Contributeur</th>
        </tr>
    `;

    data.objects.forEach(obj => {
      html += `
        <tr style="border: 1px solid black;">
          <td style="border: 1px solid black; padding:8px;">${obj.Name}</td>
          <td style="border: 1px solid black; padding:8px;">${obj.year}</td>
          <td style="border: 1px solid black; padding:8px;">${obj.type}</td>
          <td style="border: 1px solid black; padding:8px;">${obj.state}</td>
          <td style="border: 1px solid black; padding:8px;">${obj.description}</td>
          <td style="border: 1px solid black; padding:8px;">${obj.contributor}</td>
        </tr>
      `;
    });

    html += `</table>`;
    container.innerHTML = html;
  })
  .catch(error => console.error("Erreur lors du chargement du JSON :", error));
