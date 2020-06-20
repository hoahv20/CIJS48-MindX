let component  = {};
component.signUp = `
<section class="sign-up-container">
<form id="form-sign-up" class="form-sign-up">
    <h2 class="form-title">Sign Up</h2>
    <div class="input-wrapper">
        <label for="user-name">
            <i class="fa fa-user"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Your Name">
    </div>
    <div class="message-error" id="name-error"></div>
    <div class="input-wrapper">
        <label for="user-email">
            <i class="fa fa-envelope"></i>
        </label>
        <input type="text" name="email" id="email" placeholder="Your Email">
    </div>
    <div class="message-error" id="email-error"></div>
    <div class="input-wrapper">
        <label for="user-password">
            <i class="fa fa-lock"></i>
        </label>
        <input type="password" name="password" id="password" placeholder="Password">
    </div>
    <div class="message-error" id="password-error"></div>
    <div class="input-wrapper">
        <label for="password-confirmation">
            <i class="fa fa-lock"></i>
        </label>
        <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Repeat your password">
    </div>
    <div class="message-error" id="password-confirmation-error"></div>
    <button class="register-btn" id="sign-up-btn">Register</button>
    <div class="message-error" id="sign-up-error"></div>
    <div class="message-success" id="sign-up-success"></div>
</form>
<div class="decoration-container">
    <img src="./images/signup-image.jpg" alt="Decoration-image">
    <div class="link-container">
        <a href="#" class="decoration-link" id="sign-in-link">I am already member</a>
    </div>
</div>
</section>
`;
component.signIn = `
<section class="sign-in-container">
<form class="form-sign-in" id="form-sign-in">
    <h2 class="form-title">Sign In</h2>
    <div class="input-wrapper">
        <label for="user-email">
            <i class="fa fa-envelope"></i>
        </label>
        <input type="text" name="email" id="user-email" placeholder="Your Email">
    </div>
    <div class="message-error" id="email-error"></div>
    <div class="input-wrapper">
        <label for="user-password">
            <i class="fa fa-lock"></i>
        </label>
        <input type="password" name="password" id="user-password" placeholder="Password">
    </div>
    <div class="message-error" id="password-error"></div>
    <input type="checkbox" name="remember-me" id="memorize-password">
    <label for="remember-me">Remember Me</label><br>
    <button class="btn-primary" id="sign-in-btn">Log In</button>
    
    <div class="message-error" id="sign-in-error"></div>
    
</form>
<div class="decoration-container">
    <img src="./images/signin-image.jpg" alt="Decoration-image">
    <div class="link-container">
        <a href="#" class="decoration-link" id="sign-up-link">Create an account</a>
    </div>
</div>
</section>
`
component.chat = `
<section class="aside-left">
<div class="title">Conversations</div>
<form class="form-add-conversation">
    <div class="input-wrapper">
        <label for="title">
            <i class="fa fa-comments" aria-hidden="true"></i>
        </label>
        <input type="text" name="title" id="title">
    </div>
    <div class="input-wrapper">
        <label for="friend-email">
            <i class="fa fa-user" aria-hidden="true"></i>
        </label>
        <input type="text" name="friendEmail" id="friend-email">
    </div>
    <button class="btn-primary">Add</button>
</form>

<div class="conversations-list" id="conversations-list">
    <div class="conversation">
        <p class="conversation-title">Conversation 1</p>
        <p class="conversation-member">2 members</p>
    </div>

    <div class="conversation">
        <p class="conversation-title">Conversation 2</p>
        <p class="conversation-member">2 members</p>
    </div>

    <div class="conversation">
        <p class="conversation-title">Conversation 3</p>
        <p class="conversation-member">2 members</p>
    </div>
</div>
</section>

<section class="chat-container">
<div class="title">Chat: Title 1</div>
<div class="messages-list">
    <div class="message">
        <span>Hello World</span>
    </div>

    <div class="message">
        <span>How are you?</span>
    </div>

    <div class="message your">
        <span>I'm fine. Thank you, bro.</span>
    </div>
</div>

<form class="form-add-message">
    <div class="input-wrapper">
        <input type="text" name="messageContent">
    </div>
    <button class="btn-primary">Send</button>
</form>
</section>
<section class="aside-right">
<div class="title">Details</div>
<div class="conversation-details">
    <div class="conversation-member">
        <p>hoahv2000@gmail.com</p>
        <p>someone@gmail.com</p>
    </div>
    <div class="conversation-created-at">
        2020/06/16
    </div>
</div>
</section>
`