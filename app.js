// console.log('Welcome to Daily News')

url = `https://gnews.io/api/v4/search?&q=None&lang=en&country=in&token=8496e24ceabec0c97216424af7001348`
fetch(url).then(response => {
    return response.json();
}).then(data => {
    let html = ""
        data.articles.forEach((element, index) => {
            html += `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria - expanded="true" aria - controls="flush-collapse${index}" >
                <b>Headline ${index + 1}: </b>${element.title}
            </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${element.description} <a href=${element["url"]} target="_blank">Read More</a></div>
        </div>`;
        });
        document.getElementById("accordionFlushExample").innerHTML = html;
})