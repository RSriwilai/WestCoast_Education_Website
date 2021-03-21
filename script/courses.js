"use strict"



function loadData() {
    fetch('./data/courses.json')
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR")
        }
     return response.json();
    })
    .then(data => {
        console.log(data)
        const html = data.map(courses => {
            return `
            <div class="course-data">
            <h3>${courses.title}</h3>
            <img src="${courses.img}" alt="picture can not be found" width="60">
            <p>Beskrivning: ${courses.description}</p>
            <p>Kursnummer: ${courses.courseNumber}</p>
            <p>Längd: ${courses.length}</p>
            </div>
            `
        })
        document.querySelector("#courses").insertAdjacentHTML("afterbegin", html) 
    })
    .catch(error => {
        console.log(error);
    });

}

loadData();

