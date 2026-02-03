function add (a){
    return (b)=>{
        return a + b;
    }
}

console.log(add(5)(5));




(function IIF(){
    console.log("hello sir")
})()

const log = level => message => {
  console.log(`[${level}] ${message}`);
};

// Create specific loggers
const infoLog = log("INFO");
const errorLog = log("ERROR");

// Use them
infoLog("User logged in");
errorLog("Server crashed");
