<template>
    <div id="app">
      <h1>Meu Aplicativo Vue</h1>
      <!-- Use o componente ChatComponent no template -->
      <ChatComponent />
    </div>
  </template>
  
  <script>
  import ChatComponent from './components/ChatComponent.vue';
  
  export default {
    name: 'App',
    components: {
      ChatComponent,
    },
  };
  </script>
  