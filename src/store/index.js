import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    system: {
      mainPage: {
        configKonva: {
          x: 1016 / 2,
          y: 716 / 2,
          width: 1016,
          height: 716,
          scale: {
            x: 1,
            y: 1,
          },
          offset: {
            // x:0,
            // y: 0,
            x: (1016 * (1016 / 1016)) / 2,
            y: (716 * (1016 / 1016)) / 2,
          },
          rotation: 0,
          robotWithBall: require("../assets/Model_IRIS_Basestaton/Blue Model/blue_ball.png"),
        },
        fieldConfig: {
          x: 0,
          y: 0,
          image: new Image(),
          width: null,
          height: null,
          rotation: 0,
          offset: {
            x: 0,
            y: 0,
          },
        },
        robotConfig: {
          x: 508,
          y: 358,
          image: new Image(),
          width: 70,
          height: 70,
          rotation: 90,
          offset: {
            x: 35,
            y: 35,
          },
        },
      },
    },
    robot: {
      ros_init: null,
      ip: "172.16.80.166",
      isConnected: false,
      isAutoConnect: true,
      basestation: {
        subscribe: {
          pc2Bs_sub: null,
          pc2Bs_msg: {
            pos_x: 999,
            pos_y: 999,
            pos_theta: 999,
            v_x: 999,
            v_y: 999,
            v_theta: 999,
          },
        },
      },
      konva: {
        robotConfig: {
          x: 50,
          y: 50,
          // x: 999,
          // y: 999,
          image: new Image(),
          width: 70,
          height: 70,
          rotation: 90,
          offset: {
            x: 35,
            y: 35,
          },
        },
        ballConfig: {
          x: 200,
          y: 650,
          image: new Image(),
          width: 20,
          height: 20,
          rotation: 0,
          offset: {
            x: 10,
            y: 10,
          },
        },
        imageRobot: {
          robot: require("../assets/Model_IRIS_Basestaton/Blue Model/blue.png"),
          robotWithBall: require("../assets/Model_IRIS_Basestaton/Blue Model/blue_ball.png"),
          ball: require("../assets/Model_IRIS_Basestaton/Blue Model/bola_biru.png"),
        },
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
