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
    <v-divider></v-divider>
    <h1>
      STATUS: {{ $store.state.robot.basestation.publish.bs2PcTopic.status }}
    </h1>
    <h1>
      X TUJUAN: {{ $store.state.robot.basestation.publish.bs2PcTopic.x_tujuan }}
    </h1>
    <h1>
      Y TUJUAN: {{ $store.state.robot.basestation.publish.bs2PcTopic.y_tujuan }}
    </h1>
    <br />
    <v-row>
      <v-btn
        outlined
        block
        color="red"
        @click="
          $store.state.robot.statusPublish = !$store.state.robot.statusPublish
        "
        >PUBLISH</v-btn
      >
      <v-col>
        <v-btn
          outlined
          block
          color="red"
          :disabled="!$store.state.robot.statusPublish"
          @click="$store.state.robot.basestation.publish.bs2PcTopic.status = 1"
          >STATUS 1</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          :disabled="!$store.state.robot.statusPublish"
          outlined
          block
          color="green"
          @click="$store.state.robot.basestation.publish.bs2PcTopic.status = 2"
          >STATUS 2</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          :disabled="!$store.state.robot.statusPublish"
          outlined
          block
          color="blue"
          @click="$store.state.robot.basestation.publish.bs2PcTopic.status = 3"
          >STATUS 3</v-btn
        >
      </v-col>
      <!-- <v-col> -->
      <v-btn
        :disabled="!$store.state.robot.statusPublish"
        outlined
        block
        color="black"
        @click="$store.state.robot.basestation.publish.bs2PcTopic.status = 4"
        >STATUS 4</v-btn
      >
      <!-- </v-col> -->
    </v-row>
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
