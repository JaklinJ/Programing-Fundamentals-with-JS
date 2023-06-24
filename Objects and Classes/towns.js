function towns(data) {

for (const info of data) {
    let [town, latitude, longitude] = info.split(' | ');
    let currentTown = {
        town,
        latitude : Number(latitude).toFixed(2),
        longitude : Number(longitude).toFixed(2)
    };
    console.log(currentTown);
}

}
