let model = {
    conversation : [],
    currentConversation: null
}

model.saveConversations = function (conversations){
    model.conversations = conversations;
}

model.saveCurrentConversation = function (conversation){
    model.currentConversation = conversation;
}