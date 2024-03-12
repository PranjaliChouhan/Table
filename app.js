let myData = [
    {
        firstname: 'John',
        lastname: 'Cena',
        age: 21,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'rohan',
        lastname: 'Cena',
        age: 21,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'rahul',
        lastname: 'Cena',
        age: 21,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'laddu',
        lastname: 'Cena',
        age: 21,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        }
    }
];

let listholder = document.querySelector("#listHolder");
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let age = document.querySelector("#age");
let btnsubmit = document.querySelector("#btnsubmit");

btnsubmit.addEventListener("click", function () {
    if (firstname.value.trim() === "" || lastname.value.trim() === "" || age.value.trim() === "") {
        alert("Please fill out the form completely");
    } else {
        let copyData = [...myData];
        let newEntry = {
            firstname: firstname.value.trim(),
            lastname: lastname.value.trim(),
            age: age.value.trim(),
            fullname: function () {
                return this.firstname + " " + this.lastname;
            }
        };
        copyData.push(newEntry);
        console.log(copyData);
        refreshList(copyData);
    }
});

function refreshList(data) {
    listholder.innerHTML = "";
    data.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.age}</td>`;
        listholder.appendChild(tr);
    });
}

// Initial rendering of the list
refreshList(myData);
