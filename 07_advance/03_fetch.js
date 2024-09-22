fetch('https://api.github.com/users/Prateek1771')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    console.log(`email is:${data.email}`);

})
.catch((err) => {
    console.log(err);
})