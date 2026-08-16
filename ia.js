const chatBox = document.getElementById('ai-chat-box');
const userInput = document.getElementById('ai-user-input');
const sendBtn = document.getElementById('ai-send-btn');

function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    // 1. Afficher le message de l'utilisateur dans la bulle de droite
    const userMsg = document.createElement('div');
    userMsg.style.cssText = "background: #0f172a; color: white; padding: 10px 14px; border-radius: 8px; max-width: 80%; margin-left: auto; text-align: right; margin-bottom: 10px;";
    userMsg.textContent = text;
    chatBox.appendChild(userMsg);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. Simuler la réponse de l'agent IA après 1 seconde
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'ai-message';
        aiMsg.textContent = "J'analyse votre recherche par rapport aux biens disponibles dans notre base de données... Souhaitez-vous que je vous envoie une sélection par e-mail ?";
        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Déclencher avec le bouton ou la touche Entrée
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});