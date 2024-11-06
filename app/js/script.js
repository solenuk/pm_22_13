// using plain js
// const btn = document.getElementsByClassName('btn');
//
// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         const content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         }else{
//             content.style.maxHeight = content.scrollHeight + 'px';
//         }
//     })
// }


// using Jquery
$(".btn").click(function () {
    $content = $(this).next();
    $content.slideToggle(400);
});

// XML request
const xmlhttp = new XMLHttpRequest();
const url = 'data/data.json';

xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(xmlhttp.responseText);
        renderData(data, "XMLHttpRequest");
    }
    else{
        console.error('Помилка під час завантаження даних', this.status);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

// Fetch API req
async function getData() {
    try{
        const response = await fetch("data/data.json");
        if (!response.ok) {
            throw new Error('Помилка при завантаженні даних');
        }
        const json = await response.json();
        renderData(json,"Fetch API");
    }catch(error){
        console.error('Помилка під час отримання даних:', error);
    }
}

getData();

// Show data on page
function renderData(data,method) {
    const data_container = document.getElementById("data-container");
    let section_title = document.createElement("h1");
    section_title.className = "section-title";
    section_title.textContent = `Loading JSON using ${method}`;
    data_container.appendChild(section_title);

    data.forEach((element) => {
        const div = document.createElement("div");

        section_title = document.createElement("h3");
        section_title.className = "section-title";
        section_title.textContent = `Day of the Week: ${element.day}`;
        div.appendChild(section_title);

        const list = document.createElement("ul");
        list.className = "my-list";
        element.classes.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            list.append(li);
        });
        div.appendChild(list);

        data_container.appendChild(div);
    });
}