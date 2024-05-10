const figlet = require("figlet");  //   ./ are not use for packages 

// figlet("Hello World!!", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });


//or

function Call(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
}

figlet("G L Bajaj !!", Call);
figlet("Mathura !!", Call);
figlet("AnandKumarYadav !!", Call);
figlet("AnandAdarsh !!", Call);
figlet("AdarshMaurya !!", Call);