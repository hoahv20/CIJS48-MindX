//Đồng bộ và bất đồng bộ
//Xử lý cho code đồng bộ hơn
// console.log("Hello World");
// setTimeout(function (){
//     console.log("Connect internet");
//     setTimeout(function(){
//         console.log("Browser");
//         setTimeout(function(){
//             console.log("Search");
//             setTimeout(function(){
//                 console.log("Result");
//                 setTimeout(function(){
//                     console.log("Toang");
//                 }, 4000);

//             }, 1000);

//         }, 5000);

//     }, 2000);
// }, 3000);
//Xử lý bất đồng bộ --> làm trình tự thực hiện công việc trở nên đồng bộ




// xử lý lỗi try/catch
// chương trình gặp lỗi thì dừng

// try {
//     //đoạn chương trình có thể bị lỗi
// } catch (error) {
//     //xử lý lỗi
// }

// let input = Number(prompt("Input a number: "));
// try{
//     if(input > 0){
//         console.log(input * input);
//     }else{
//         throw new Error("Number must be greater than 0");
//     }
// }catch (error){
//     console.error(error);
// }
// console.log("End program.");

//CRUD
//create
async function createData(data = {}){
    let newData = await firebase.firestore().collection("Sandals").add({
        brand: "Bitis",
        color: "orange",
        size: 43,
        cost: 50
    });
    console.log(newData);
}

async function readData(){
    //Lấy ra tất cả bản ghi nằm trong sandals
    // let result = await firebase.firestore().collection("Sandals").get();
    // for(let i = 0; i < result.docs.length; i++){
    //     let doc = result.docs[i];
    //     console.log(doc);
    // }
    // for(let doc of result.docs){
    //     console.log(doc.data());
    // }

    //Lấy ra những  bản ghi thỏa mãn điều kiện
    let result = await firebase.firestore().collection("Sandals").where("cost", "<=", 40).get();
    for(let doc of result.docs){
        console.log(doc.data());
    }
}

//delete
async function deleteData(docId){
    await firebase.firestore().collection("Sandals").doc(docId).delete();
}

//delete all data
async function deleteAllData(){
    //get all data
    let result = await firebase.firestore().collection('Sandals').get();
    //delete each sandal with id
    for(let doc of result.docs){
        await deleteData(doc.id);
    }
}

//update data
async function updateData(docId){
    await firebase.firestore().collection("Sandals").doc(docId).update({
        brand: "Nike",
        cost: 100
    });
}