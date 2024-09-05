// singleton
// object.create
// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "prateek",
    "full name": "prateek",
    [mySym]: "mykey1",
    age: 21,
    location: "Koppal",
    email: "prateek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}