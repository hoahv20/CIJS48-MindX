// console and process UI
let view = {};

view.showScreen = async function(screenName){

    let content = document.getElementById('main-container');
    switch(screenName){
        case 'signIn':
            //display UI sign in
            content.innerHTML = component.signIn;
            let signUpLink = document.getElementById("sign-up-link");
            signUpLink.onclick = function(){
                view.showScreen("signUp");
            }
            // add event click to sign-up-link ---> sign up UI
            // xử lý form-sign-in
            let formSignIn = document.getElementById("form-sign-in");
            formSignIn.onsubmit = function(event){
                event.preventDefault();
                let email = formSignIn.email.value;
                let password = formSignIn.password.value;

                let validateResult = [
                    view.validate(email !="", "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input your password")
                ]
                if(isPassed(validateResult)){
                    //gửi dữ liệu qua controller
                    controller.signIn(email, password);
                }
            }
            break;
        case 'signUp':
            //display UI sign up
            content.innerHTML = component.signUp;
            //add event click to sign-in-link ---> sign in UI
            let signInLink = document.getElementById("sign-in-link");
            signInLink.onclick = function(){
                view.showScreen("signIn");
            }

            let formSignUp = document.getElementById("form-sign-up");
            formSignUp.onsubmit = function(event){
                event.preventDefault();
                // console.log("Form đăng ký vừa được submit.");
                //Lấy dữ liệu từ form
                let name = formSignUp.name.value.trim();
                let email = formSignUp.email.value.trim();
                let password = formSignUp.password.value.trim();
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim();
                
                let validateResult = [
                    view.validate(name != "", "name-error", "Input your name"),
                    view.validate(validateEmail(email), "email-error", "Invalid email"),
                    view.validate(password != "", "password-error", "Input password"),
                    view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
                ]
                if(isPassed(validateResult)){
                    //gửi dữ liệu qua controller
                    controller.signUp(name, email, password);
                }
            }
            // xử lý form sign up
            // gửi dữ liệu và lưu trong CSDL
            // thư viện firebase
            break;
        case 'chat':
            //Hiển thị giao diện chat
            content.innerHTML = component.chat;
            //lấy conversation & cache lại trong model
            await controller.loadConversations();
            //lấy dữ liệu từ model và hiển thị lênn giao diện
            let conversationsList = document.getElementById("conversations-list");
            for(let conversation of model.conversations){
                let html = `
                <div class="conversation">
                    <p class="conversation-title">${conversation.title}</p>
                    <p class="conversation-members">
                        ${conversation.users.length}
                        ${(conversation.users.length == 1) ? "member" : "members"}
                    </p>
                </div>`;
                conversationsList.innerHTML += html;
            }
            break;
    }
}

view.validate = function(condition, errorTag, errorMessage){
    if(!condition){
        view.setText(errorTag, errorMessage);
        return false;
    }else{
        view.setText(errorTag, "");
        return true;
    }
}

//clean message when get ID
view.setText = function(tagId, text){
    document.getElementById(tagId).innerHTML = text;
}

//Disable register button
view.setActive = function(tagId, active){
    document.getElementById(tagId).disabled = !active;
}