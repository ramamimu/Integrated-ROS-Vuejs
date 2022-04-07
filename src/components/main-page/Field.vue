<template>
  <div ref="container">
    <v-stage
      ref="stage"
      :config="$store.state.system.mainPage.configKonva"
      @click="handleMouseMove"
    >
      <v-layer ref="layer">
        <v-image
          ref="field"
          :config="$store.state.system.mainPage.fieldConfig"
        />
        <v-image
          ref="robotManual"
          :config="$store.state.system.mainPage.robotConfig"
        />
        <v-image ref="robot" :config="$store.state.robot.konva.robotConfig" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;
import Konva from "konva";

// const image = require()

export default {
  data() {
    return {};
  },
  created() {
    // window.addEventListener("resize", this.myEventHandler);
    let that = this.$store.state.system.mainPage;
    let vuex = this.$store.state;
    let self = this;

    let field_width = 1016;
    let field_height = 716;

    that.fieldConfig.image.src = require("../../assets/Lapangan_regional.png");
    that.robotConfig.image.src = require("../../assets/Model_IRIS_Basestaton/Blue Model/blue.png");

    that.fieldConfig.width = field_width;
    that.fieldConfig.height = field_height;

    vuex.robot.konva.robotConfig.image.src = vuex.robot.konva.imageRobot.robot;

    let robotControl = that.robotConfig;

    document.addEventListener("keypress", function (ev) {
      if (ev.key == "h") {
        robotControl.x -= 5;
      } else if (ev.key == "u") {
        robotControl.y -= 5;
      } else if (ev.key == "j") {
        robotControl.y += 5;
      } else if (ev.key == "k") {
        robotControl.x += 5;
      } else if (ev.key == "y") {
        robotControl.rotation -= 5;
      } else if (ev.key == "i") {
        robotControl.rotation += 5;
      }
      console.log("robotControl.x = ", robotControl.y - 58);
      console.log("robotControl.y = ", robotControl.x - 58);
      console.log("robotControl.rotation = ", robotControl.rotation);
    });
  },
  mounted() {
    let self = this.$store.state;
    let stage = this.$refs.stage.getStage();
    let that = this;

    // Declare image
    const anim = new Konva.Animation(function (frame) {
      var sceneWidth = 1016;
      var sceneHeight = 716;
      var container = document.querySelector("#containerStage");
      // Responsive
      if (container != null) {
        var containerWidth = container.offsetWidth - 25;
        var scaleStage = containerWidth / sceneWidth;
        stage.width(sceneWidth * scaleStage);
        stage.height(sceneHeight * scaleStage);
        stage.x(stage.width() / 2);
        stage.y(stage.height() / 2);
        stage.scale({ x: scaleStage, y: scaleStage });
      }

      if (self.robot.isConnected) {
        self.robot.konva.robotConfig.x =
          self.robot.basestation.subscribe.pc2Bs_msg.pos_x;
        self.robot.konva.robotConfig.y =
          self.robot.basestation.subscribe.pc2Bs_msg.pos_y;
        self.robot.konva.robotConfig.rotation =
          self.robot.basestation.subscribe.pc2Bs_msg.pos_theta;
      } else {
        self.robot.konva.robotConfig.x = 999;
        self.robot.konva.robotConfig.y = 999;
        self.robot.konva.robotConfig.rotation = 0;
      }
    });

    anim.start();
  },
  updated() {},
  methods: {
    handleMouseMove(event) {
      let self = this.$store.state;
      let that = this;

      const mousePos = this.$refs.stage.getNode().getPointerPosition();
      const x = mousePos.x;
      const y = mousePos.y;

      // ANGKA TUNNING ROBOT MANUAL DENGAN LAPANGAN BS
      console.log("x= ", (716 / 640) * y - 58, "|| y= ", (1016 / 910) * x - 58);
    },
    async resizeCanvas() {
      await this.$nextTick();
      console.log("ofset width: ", this.$refs.container.offsetWidth);
      this.width = this.$refs.container.offsetWidth;
      this.height = this.$refs.container.offsetWidth;

      let that = this.$store.state;
      that.configKonva.width = this.$refs.container.offsetWidth;
      // that.configKonva.height = this.$refs.container.offsetWidth;
    },
    pythagoras(x1, y1, x2, y2) {
      return Math.sqrt(
        Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
      );
    },
  },
  computed: {},
};
</script>
