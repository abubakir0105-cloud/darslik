let talaba = [{
        id: 1,
        ismi: 'Amir',
        fammilya: 'Baxshullayev',
        kursi: 3,
        yosh:21,
        faolligi: false
    },
    {
        id: 2,
        ismi: 'Amirshox',
        fammilya: 'Polatov',
        kursi: 3,
        yosh:22,
        faolligi: true
    },
    {
        id: 3,
        ismi: 'Amir',
        fammilya: 'Baxshullayev',
        kursi: 3,
        yosh:23,
        faolligi: false
    },
    {
        id: 4,
        ismi: 'Amirshox',
        fammilya: 'Polatov',
        kursi: 3,
        yosh:25,
        faolligi: true
    }
]
// talaba.forEach(element => {
//    console.log(element.id);
//    console.log(element.ismi);
// });
console.log(talaba[0].fammilya);
console.log(talaba[1].fammilya);
for(let i=0;i<talaba.length;i++){
    console.log(talaba[i].fammilya);
}