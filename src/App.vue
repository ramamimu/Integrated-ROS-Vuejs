<template>
  <div bottom style="background-color: rgb(206, 206, 206)">
    <v-app>
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <keep-alive>
            <router-view />
          </keep-alive>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import ROSLIB from "roslib";

export default {
  name: "App",

  data: () => ({}),
  async beforeMount() {
    let that = this;
    let vuex = this.$store.state;
    await this.initiation();
    this.subscribe();
  },

  methods: {
    async initiation() {
      let that = this.$store.state.robot;
      that.ros_init = await new ROSLIB.Ros({
        url: "ws://" + that.ip + ":9900",
      });

      that.ros_init.on("connection", function () {
        // console.log("Connected to websocket server.");
        that.isConnected = true;
        console.log(that.ip + " is connected");
      });

      that.ros_init.on("error", function (error) {
        // console.log("Error connecting to websocket server");
      });

      var self = this;
      that.ros_init.on("close", function () {
        // console.log("Connection to websocket server closed.");
        that.isConnected = false;
        // console.log("isConnected = " + that.isConnected);
        if (that.isAutoConnect) {
          // console.log("R " + that.ip + " DC. Reconnecting");
          that.ros_init.connect("ws://" + that.ip + ":9900");
        }
      });

      that.basestation.subscribe.pc2Bs_sub = await new ROSLIB.Topic({
        ros: that.ros_init,
        name: "/pc2bs_telemetry",
        messageType: "iris_its/BasestationTx",
      });

      that.basestation.publish = await new ROSLIB.Topic({
        ros: that.ros_init,
        name: "/bs2pc_telemetry",
        messageType: "iris_its/BasestationRx",
      });
      //
      // console.log("menerima msg ", that.basestation.subscribe.pc2Bs_msg);
    },
    subscribe() {
      let that = this.$store.state.robot.basestation.subscribe;

      that.pc2Bs_sub.subscribe((bsIndex) => {
        that.pc2Bs_msg.pos_x = bsIndex.pos_x;
        that.pc2Bs_msg.pos_y = bsIndex.pos_y;
        that.pc2Bs_msg.pos_theta = bsIndex.theta;
        that.pc2Bs_msg.v_x = bsIndex.pos_x;
        that.pc2Bs_msg.v_y = bsIndex.pos_y;
        that.pc2Bs_msg.v_theta = bsIndex.theta;
      });
    },
  },
  computed: {},
  created() {},
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  /* font-weight: bold; */
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
