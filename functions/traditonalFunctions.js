function student(hindi,
    english,
    maths,
    physics,
    chemistry) {

    let subT = hindi + english + maths + physics + chemistry;

    const per = (subT * 100) / 500;
    return per;
}

const stdPer = student(90,96,90,90,90);

console.log(stdPer);


