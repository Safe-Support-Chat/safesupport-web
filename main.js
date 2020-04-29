
(function(EmbeddableChatbox) {
    var config = {
        matrixServerUrl: 'https://matrix.rhok.space',
        botId: '@help-bot:rhok.space',
        roomName: 'Support Chat',
        termsUrl: 'https://tosdr.org/',
        introMessage: 'This chat application does not collect any of your personal data or any data from your use of this service.',
        agreementMessage: 'Do you want to continue?',
        confirmationMessage: 'Waiting for a facilitator to join the chat...',
        exitMessage: 'The chat is closed. You may close this window.',
        chatUnavailableMessage: 'The chat service is not available right now. Please try again later.',
        anonymousDisplayName: 'Anonymous',
    }

    EmbeddableChatbox.mount(config);
}(EmbeddableChatbox));