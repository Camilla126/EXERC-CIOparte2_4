const arrays = ["Umbrella academyu", "Death note", "Full metal Alchemist", "Dark", "Shingeki no Kyojin", "Duna" ]
const newArray = []

for (let index = 0;index < arrays.length;index +=1){
    const item = arrays[index]
    if ((item)[0] === 'D' ){
newArray.push(item);
    }
}
console.log (newArray)