

fetch('http://99.79.77.144:3000/api/agents')
    .then((response) => response.json())
    .then((data) => {

      let goodAgents = data.filter(x => x.rating > 94)

      console.log(goodAgents)

      let headVar = '<tr><th>First Name</th><th>Last Name</th><th>Rating</th><th>Fees</th></tr>';

      goodAgents.forEach((agent) => {
        headVar += `<tr>
        <td>${agent.first_name}</td>
        <td>${agent.last_name}</td>
        <td>${agent.rating}</td>
        <td>${agent.fee}</td>
        </tr>`;
    })
    document.getElementById('agents').innerHTML = headVar;
    });
    //'<td>' + user.id + '</td>'



    
    async function postJSON(data) {
        try {
          const response = await fetch(" http://99.79.77.144:3000/api/contact", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const data = { 
        'nameFull': "",
        'email' : '',
        'phone' : '',
        'companyName' : '',
        'projectName' : '',
        'subject' : '',
        'department' : '',
        'message' : '',
        'attachment' : '',
     };
      postJSON(data);
      
























