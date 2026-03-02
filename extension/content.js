chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scan") {

        let tokens = document.body.innerText.split("\n");

        fetch("https://your-backend-url.com/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tokens: tokens})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Scan complete. Check console.");
        });
    }
});