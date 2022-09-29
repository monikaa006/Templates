fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
    // console.log(data); json format
    return data.json(); //converted to object
}).then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
        tableData += ` <tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.completed}</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})