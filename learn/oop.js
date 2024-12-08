const user={
    username: 'Ishi',
    loginCount: 8,   
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(this);
        
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username=username,
    this.isLoggedIn=isLoggedIn,
    this.loginCount=loginCount

    return this
}

const userOne= new User("Ishi",12,true)
const userTwo=new User("Ishi Jain",15,false)
console.log(userOne);

console.log(userTwo);


