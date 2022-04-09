<template>
  <div bottom style="background-color: rgb(206, 206, 206)">
    <v-app>
      <v-main>
        <v-container fluid>
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
    if (vuex.robot.statusPublish) {
      setInterval(() => {
        this.publish_msg();
      }, 25);
    }
  },

  methods: {
    async initiation() {
      let that = this.$store.state.robot;
      that.ros_init = await new ROSLIB.Ros({
        url: "ws://" + that.ip + ":9900",
      });

      that.ros_init.on("connection", function () {
        console.log("Connected to websocket server.");
        that.isConnected = true;
        console.log(that.ip + " is connected");
      });

      that.ros_init.on("error", function (error) {
        console.log("Error connecting to websocket server");
      });

      var self = this;
      that.ros_init.on("close", function () {
        console.log("Connection to websocket server closed.");
        that.isConnected = false;
        console.log("isConnected = " + that.isConnected);
        if (that.isAutoConnect) {
          console.log("R " + that.ip + " DC. Reconnecting");
          that.ros_init.connect("ws://" + that.ip + ":9900");
        }
      });

      that.basestation.subscribe.pc2Bs_sub = await new ROSLIB.Topic({
        ros: that.ros_init,
        name: "/pc2bs_telemetry", //nama topik untuk di advertise
        messageType: "IRIS/BSTX", //nama package dan msg -> nama_package/msg
      });
      that.basestation.publish.bs2Pc_pub = await new ROSLIB.Topic({
        ros: that.ros_init,
        name: "/bs2pc_telemetry", //nama topik untuk di advertise
        messageType: "IRIS/BSRX", //nama package dan msg -> nama_package/msg
      });
      // console.log(that.ros_init);
    },
    subscribe() {
      let that = this.$store.state.robot.basestation.subscribe;
      let state = this.$store.state.robot.basestation;
      //format message yang perlu diperhatikan, ada pada sub terakhir
      //contoh: that.pc2Bs_msg.pos_y nanti jadi int64 pos_y
      that.pc2Bs_sub.subscribe((bsIndex) => {
        that.pc2Bs_msg.pos_x = bsIndex.pos_x;
        that.pc2Bs_msg.pos_y = bsIndex.pos_y;
        that.pc2Bs_msg.pos_theta = bsIndex.pos_theta;
        that.pc2Bs_msg.v_x = bsIndex.v_x;
        that.pc2Bs_msg.v_y = bsIndex.v_y;
        that.pc2Bs_msg.v_theta = bsIndex.v_theta;
        that.pc2Bs_msg.bola_x = bsIndex.bola_x;
        that.pc2Bs_msg.bola_y = bsIndex.bola_y;
      });
      if (
        state.publish.bs2PcTopic.status == 4 ||
        state.publish.bs2PcTopic.status == 2
      ) {
        state.publish.bs2PcTopic.x_tujuan = that.pc2Bs_msg.bola_x;
        state.publish.bs2PcTopic.y_tujuan = that.pc2Bs_msg.bola_y;
      } else if (state.publish.bs2PcTopic.status == 1) {
        state.publish.bs2PcTopic.x_tujuan = that.pc2Bs_msg.pos_x;
        state.publish.bs2PcTopic.y_tujuan = that.pc2Bs_msg.pos_y;
      }
    },
    publish_msg() {
      let that = this.$store.state;
      let self = this;
      let pub_msg = new ROSLIB.Message(
        that.robot.basestation.publish.bs2PcTopic
      );
      that.robot.basestation.publish.bs2Pc_pub.publish(pub_msg);
    },
  },
  computed: {},
  created() {
    // alert("ini alert");
    let ipLaptop = prompt("masukkan ip laptop anda!");
    this.$store.state.robot.ip = ipLaptop;
  },
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
