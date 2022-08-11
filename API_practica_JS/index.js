const url = "https://jsonplaceholder.typicode.com/users";

const listUsers = async () =>{
    const response= await fetch(url);
    const users = await response.json();
    
    let tableBody =``;
    users.forEach((user,index) => {
        // console.log(user);
        console.log(user);
        tableBody+=`<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        </tr>
        `
    });
       // document.getElementById("tableBody_users").innerHTML = tableBody;
       tableBody_users.innerHTML = tableBody; 
};


window.addEventListener("load",function(){
    listUsers();
});