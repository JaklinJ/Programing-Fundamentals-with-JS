function songs(data) {

class Songs {
    constructor (typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

let songs = [];
let numberOfSongs = Number(data.shift());
let typeListAll = data.pop();

for (let i = 0; i < data.length; i++) {
    let [typeList, name, time] = data[i].split("_");
    let song = new Songs(typeList, name, time);
    songs.push(song);
}

if(typeListAll === "all") {
    songs.forEach((i) => console.log(i.name));
} else {
    let filtered = songs.filter((i) => i.typeList === typeListAll);
    filtered.forEach((i) => console.log(i.name));
}

}
