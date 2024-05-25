<script setup></script>

<template>
  <pv-panel :style="{ height: '46.5em', width: '55em' }">
    <div class="flex flex-column gap-2 bg-green-300">
      <div class="flex gap-2 p-3">
        <img src="../../assets/images/ai-icon.png" width="50" height="50" />
        <h1>AI Bot</h1>
      </div>
      <hr />
      <div class="conversation-panel"></div>
      <div class="message flex gap-4 p-3">
        <pv-inputtext
          style="width: 520px"
          v-model="Mensaje"
          placeholder="Ingresa tu mensaje aquí"
        >
        </pv-inputtext>
        <pv-button>
          <img src="../../assets/images/emoji.png" width="40" height="40" />
        </pv-button>
        <pv-button>
          <img src="../../assets/images/upload.png" width="40" height="40" />
        </pv-button>
        <pv-button>
          <img
            src="../../assets/images/microphone.png"
            width="40"
            height="40"
          />
        </pv-button>
        <pv-button>
          <img src="../../assets/images/send.png" width="40" height="40" />
        </pv-button>
      </div>
    </div>
  </pv-panel>
</template>

<style scoped>
.conversation-panel {
  height: 35em;
}
</style>
