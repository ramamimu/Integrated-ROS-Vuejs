<template>
  <div>
    <h1>
      STATUS:
      <span
        :class="{
          'red--text': !$store.state.robot.isConnected,
          'green--text': $store.state.robot.isConnected,
        }"
      >
        {{ $store.state.robot.isConnected ? "CONNECTED" : "DISCONNECTED" }}
      </span>
    </h1>
    <h1>IP LAPTOP: {{ $store.state.robot.ip }}</h1>
    <br />
    <h1>
      POSISI X: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.pos_x }}
    </h1>
    <h1>
      POSISI Y: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.pos_y }}
    </h1>
    <h1>
      POSISI THETA:
      {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.pos_theta }}
    </h1>
    <h1>
      BOLA X: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.bola_x }}
    </h1>
    <h1>
      BOLA Y: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.bola_y }}
    </h1>
    <v-divider></v-divider>
    <h1>
      KECEPATAN X: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.v_x }}
    </h1>
    <h1>
      KECEPATAN Y: {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.v_y }}
    </h1>
    <h1>
      KECEPATAN THETA:
      {{ $store.state.robot.basestation.subscribe.pc2Bs_msg.v_theta }}
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
