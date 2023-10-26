<template>
  <div class="chat-float">
    <div class="chat-icon" @click="toggleChat">
      <img src="chat-icon.png" alt="Ícone do Chat" />
    </div>
    <div class="chat-container" v-show="isChatOpen">
      <div class="chat-header">
        <h2>Conversa no Chat</h2>
        <span @click="toggleChat">Fechar</span>
      </div>
      <div class="chat-messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <div :class="{'sent': message.sentByMe, 'received': !message.sentByMe}">
            {{ message.text }}
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Digite sua mensagem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatOpen: false,
      newMessage: '',
      messages: [],
      username: 'Você', 
    };
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        // Envie a mensagem para o servidor WebSocket
        socket.emit('message', { username: this.username, text: this.newMessage, sentByMe: true });

        // Limpe a caixa de entrada
        this.newMessage = '';
      }
    },
  },
  created() {
    socket.on('message', (message) => {
      this.messages.push(message);
    });
  },
};
</script>

<style>
  @import "../style.css";

</style>
