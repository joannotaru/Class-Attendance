const container = document.querySelector("main");
const nameInput = document.getElementById("name");
const classInput = document.getElementById("cls");
const seatNumInput = document.getElementById("seat");
const btn = document.querySelector("button");
const output = document.querySelector("section");

const students = [];

setInterval(() => {
    if (students.length === 0) {
        output.style.display = "none";
    } else {
        output.style.display = "flex";
    }
}, 100);

const addStudent = (name, classRoom, seatNum) => {
    students.push({
        name,
        classRoom,
        seatNum
    })
    return { name, classRoom, seatNum }
};

const CreateStudent = ({ name, classRoom, seatNum }) => {
    const nameValue = document.createElement("h3");
    const classRoomValue = document.createElement("p");
    const seatNumValue = document.createElement("p");
    const outputData = document.createElement("div");
    outputData.setAttribute("class", "container");
    const data = document.createElement("div");
    data.setAttribute("class", "data");
    const PAbtn = document.createElement("div");
    PAbtn.setAttribute("class", "PAbtn");
    const PAButton1 = document.createElement("button");
    PAButton1.setAttribute("class", "PAButtons");
    PAButton1.setAttribute("class", "PAButton1");
    const PAButton2 = document.createElement("button");
    PAButton2.setAttribute("class", "PAButtons");
    PAButton2.setAttribute("class", "PAButton2");

    nameValue.innerText = "Student Name: " + name;
    classRoomValue.innerText = "Student Class: " + classRoom;
    seatNumValue.innerText = "Student Seat Number: " + seatNum;
    PAButton1.innerText = "Present";
    PAButton2.innerText = "Absent";


    data.append(nameValue, classRoomValue, seatNumValue);
    PAbtn.append(PAButton1, PAButton2)
    outputData.append(data, PAbtn);
    output.appendChild(outputData);


    let PAbtnContainer = document.querySelectorAll(".PAbtn")

    PAbtnContainer.forEach(btn => {
        btn.onclick = (e) => {
            let clicked = e.target
            let container = e.currentTarget.children
            if (clicked !== container) {
                for (const i of container) {
                    if (i !== clicked) {
                        i.classList.remove("active");
                    } else {
                        clicked.classList.add("active");
                    }
                }
            }
            e.stopPropagation();
        }
    })
};

btn.onclick = () => {
    if (nameInput.value == "" || classInput.value == "" || seatNumInput.value == "") {
        alert("Please fill in all fields.");
        
    }
    else {
        let eachStudent = addStudent(
            nameInput.value,
            classInput.value,
            seatNumInput.value
        );
        CreateStudent(eachStudent);
        nameInput.value = "";
        classInput.value = "";
        seatNumInput.value = "";
    }
};