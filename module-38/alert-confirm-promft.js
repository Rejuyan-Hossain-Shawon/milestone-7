const messageAlert = () => {
    alert('This is the alert function worked for alert any kind of message pop up');
}
const confirmResponse = () => {
    const response = confirm("Do You want go for picnic");
    console.log("here is your reply ", response);
    if (response) {
        alert("Please pay for the picnic fees ");
    }

}
const promftInput = () => {
    const name = prompt("what is your name");
    alert(name);
}
const goYouTube = () => {
    location.href = "https://www.youtube.com/watch?v=bhdDznpJRkw&list=RDbhdDznpJRkw&start_radio=1&ab_channel=BlueMusic";
}

const refreshHandler = () => {
    location.replace("https://www.youtube.com/watch?v=bhdDznpJRkw&list=RDbhdDznpJRkw&start_radio=1&ab_channel=BlueMusic");
}