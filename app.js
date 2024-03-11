let myData=[
    {
        firstname: 'John',
        lastname: 'Cena',
        age: 21,
        fullname:function(){
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'rohan',
        lastname: 'Cena',
        age: 21,
        fullname:function(){
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'rahul',
        lastname: 'Cena',
        age: 21,
        fullname:function(){
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
        firstname: 'laddu',
        lastname: 'Cena',
        age: 21,
        fullname:function(){
            return this.firstname + ' ' + this.lastname;
        }
    }
]
let listholder=document.querySelector("#listHolder");
let firstname=document.querySelector("#firstname");
let lastname=document.querySelector("#lastname");
let age=document.querySelectors("#age");
let btnsubmit=document.querySelector("#btnsubmit");



myData.forEach((item,index)=> {
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${index+1}</td>
    <td>${item.firstname}</td>
   <td>${item.lastname}</td
   <td>${item.age}</td> `
   ;
   listholder.appendChild(tr);

    
});

