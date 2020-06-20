//điều hướng view & model
let controller = {};
controller.signUp = async function (name, email, password){
    //clear error and success in the last processing
    view.setText("sign-up-error", "");
    view.setText("sign-up-success", "");
    view.setActive("sign-up-btn", false);

    try {
        // Create account --> automatic sign in --> currentUser
        await firebase.auth().createUserWithEmailAndPassword(email, password); 
        // Change display name
        await firebase.auth().currentUser.updateProfile({
            displayName : name
        });
        // Verify account
        await firebase.auth().currentUser.sendEmailVerification();
        view.setText("sign-up-success", "An email verification has been sent");
    } catch (error) {
        view.setText("sign-up-error", error.message);
    }
    view.setActive("sign-up-btn", true);
}

controller.signIn = async function (email, password){
    view.setText("sign-in-error", "");
    view.setActive("sign-in-btn", false);
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        //chuyển qua giao diện chat
        //view.showScreen("chat");
    } catch (error) {
        view.setText("sign-in-error", error.message);
        view.setActive("sign-in-btn", true);
    }
}

controller.loadConversations = async function(){
    //load data from firebase
    let result = await firebase.firestore().collection("conversations").get();
    let conversations = [];
    for(let doc of result.docs){
        conversations.push(redefineData(doc));
    }

    //cache data to model
    model.saveConversations(conversations);
}