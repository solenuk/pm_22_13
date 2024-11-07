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

// Fetch API req
async function getData() {
    try{
        const response = await fetch("http://localhost:8080/data/data.json",{cache:"no-store"});
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
function renderData(data) {
    const data_container = document.getElementById("data-container");

    data.forEach((element) => {
        const div = document.createElement("div");

        let section_title = document.createElement("h1");
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