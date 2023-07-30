function followers(data) {

let friends = {};

let token = data.shift();

while (token !== "Log out") {

    let [command, userName, count] = token.split(": ");
    count = Number(count);
    switch (command) {
        case  "New follower":
            
            if (!friends.hasOwnProperty(userName)) {
                friends[userName] = {likes: 0, comments: 0};
            }
        break;
        
        case "Like":
            if (friends.hasOwnProperty(userName)) {
                friends[userName].likes += count;
            } else {
                friends[userName] = {likes : count, comments: 0} 
            }
        break;
        
        case "Comment":
            if (friends.hasOwnProperty(userName)) {
                friends[userName].comments += 1;
            } else {
                friends[userName] = {likes : 0, comments : 1};
            }
        break;

        case "Blocked":
            if (friends.hasOwnProperty(userName)) {
                delete friends[userName];

            } else {
                console.log(`${userName} doesn't exist.`);
            }
        break;
    }

    token = data.shift();
}

let friendsArr = Object.entries(friends);

console.log(`${friendsArr.length} followers`);

for (let [key, value] of friendsArr) {
    let sumOfLikesAndComments = value.likes + value.comments;
    console.log(`${key}: ${sumOfLikesAndComments}`);
}

}
