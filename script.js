const students = [
    {
        name: 'gandung',
        score: 90
    },
    {
        name: 'rapa',
        score: 90
    },
    {
        name: 'rapi',
        score: 85
    },
    {
        name: 'yusuf',
        score: 100
    },
    {
        name: 'rama',
        score: 80
    }
];

console.log("\n---- forEach() ----");

students.forEach((student) => {
    console.log(`Nama: ${student.name}, Nilai: ${student.score}`);
});

console.log("\n---- filter() ----");

let siswaLulus = students.filter((student) => student.score >= 75);

console.log(siswaLulus);

console.log("\n---- map() ----");

let namaSiswa = students.map((student) => student.name);

console.log(namaSiswa);

console.log("\n---- find() ----");

let nilaiTinggi = students.find((student) => student.score >= 90);

console.log(nilaiTinggi);


