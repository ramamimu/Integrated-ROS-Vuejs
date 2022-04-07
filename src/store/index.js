import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    system: {
      global: {
        // buat munculin menu
        drawer: null,
        connectRefbox: false,
        rotateField: false,
        halfCourt: false,
        overrideMode: false,
        shotlineMode: true,
        autoRally: false,
        globalBall: true,
        lapanganRegional: false,
        lapanganNasional: false,
      },
      mainPage: {
        track: {
          robot1: [],
          robot2: [],
          robot3: [],
          robot4: [],
          robot5: [],
        },
        idTrack: {
          robot1: [],
          robot2: [],
          robot3: [],
          robot4: [],
          robot5: [],
        },
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
        shotline: {
          x: 500,
          y: 300,
          points: [0, 0],
          tension: 0.8,
          strokeWidth: 4,
          closed: false,
          stroke: "black",
        },
      },
      basestation: {
        _ip_host: "",
        _ip: "",
        full_command: "STOP",
        char_command: "S",
        refbox_command: {
          command: null,
          targetTeam: null,
        },
        nRobotManual: 0,
        fieldPointerManual: {
          x: 0,
          y: 0,
          theta: 0,
        },
        offsetManualStatus: false,
        offsetManual: {
          x: 0,
          y: 0,
          theta: 0,
        },
        toRobot: "ALL",
        robot_active: 0,
        publish: {
          bs2pcTopic: {
            header: 105, // i=105, m=109
            command: 83, // S
            style: 65, // A modepermainan (v)
            cnn_status: 1, // 1
            n_robot_aktif: 7, // 7
            n_robot_dekat_bola: 0, // 2 nomorrbtygdekatbola (x)
            n_robot_dapat_bola: 0, // 2 nomorrbtygstatusbola=2 (v)
            bola_x_pada_lapangan: 0, // 40 bolaxygterdekat (v)
            bola_y_pada_lapangan: 0, // 150 bolayygterdekat (v)
            obs_0: 2,
            obs_1: 1,
            obs_2: 4,
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            // msg tambahan
            n_robot_umpan: 0,
            n_robot_terima: 0,
            // ==============================
            // ROBOT 1
            // ==============================
            odometry_robot1: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot1: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot1: 25,
            trim_penendang_robot1: 0,
            switch_robot1: 0,
            robot_condition1: 0,
            // ==============================
            // ROBOT 2
            // ==============================
            odometry_robot2: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot2: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot2: 25,
            trim_penendang_robot2: 0,
            switch_robot2: 1,
            robot_condition2: 0,
            // ==============================
            // ROBOT 3
            // ==============================
            odometry_robot3: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot3: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot3: 25,
            trim_penendang_robot3: 0,
            switch_robot3: 0, // gangerti, mek madakne qt
            robot_condition3: 0,
            // ==============================
            // ROBOT 4
            // ==============================
            odometry_robot4: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot4: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot4: 25,
            trim_penendang_robot4: 0,
            switch_robot4: 0, // gangerti, mek madakne qt
            robot_condition4: 0,
            // ==============================
            // ROBOT 5
            // ==============================
            odometry_robot5: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot5: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot5: 25,
            trim_penendang_robot5: 0,
            switch_robot5: 0, // gangerti, mek madakne qt
            robot_condition5: 0,

            //  BATAS
            n_robot_manual: 0,
            target_manual: {
              x: 0,
              y: 0,
              theta: 0,
            },
          },
        },
      },
    },
    robot: [
      // array 0, robot 1 [ROBOT KIPER]
      {
        ros_init: null,
        ip: "172.16.80.101",
        // ip: "172.16.80.222",
        // ip: "192.168.81.24",
        isConnected: false,
        isAutoConnect: true,
        statusControlRobot: false,
        role: "Penyerang",
        velocity: 50,
        shoot: 50,
        lineTracker: true,
        basestation: {
          subscribe: {
            bs2k22_sub: null,
            bs2k22_msg: {
              text_one: "",
              number_one: 0,
              number_two: 0,
              number_three: 0,
            },
            pc2Bs_sub: null,
            pc2Bs_msg: {
              pos_x: 999,
              pos_y: 999,
              theta: 999,
              status_bola: 999,
              bola_x_pada_lapangan: 999,
              bola_y_pada_lapangan: 999,
              // msg tambahan
              target_umpan: 999,
              robot_condition: 999,
              status_algoritma: null,
              status_sub_algoritma: null,
              status_sub_sub_algoritma: null,
              status_sub_sub_sub_algoritma: null,
            },
          },
          publish: null,
          status_publish: false,
          // debugger
          data_publish: {
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            odometry_robot: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot: 25,
            trim_penendang_robot: 0,
            switch_robot: 0,
            robot_condition: 0,
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
            x: 50,
            y: 500,
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
          shotline: {
            x: 0,
            y: 0,
            points: [0, 0],
            tension: 0.8,
            strokeWidth: 4,
            closed: false,
            stroke: "black",
          },
          violationLine: [
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
          ],
        },
      },
      // array 1, robot 2
      {
        ros_init: null,
        // ip: "",
        ip: "172.16.80.102",
        isConnected: false,
        isAutoConnect: true,
        statusControlRobot: false,
        role: "Penyerang",
        velocity: 0,
        shoot: 0,
        lineTracker: true,
        basestation: {
          subscribe: {
            bs2k22_sub: null,
            bs2k22_msg: {
              text_one: "",
              number_one: 0,
              number_two: 0,
              number_three: 0,
            },
            pc2Bs_sub: null,
            pc2Bs_msg: {
              pos_x: 999,
              pos_y: 999,
              theta: 999,
              status_bola: 999,
              bola_x_pada_lapangan: 999,
              bola_y_pada_lapangan: 999,
              target_umpan: 999,
              robot_condition: 999,
              status_algoritma: null,
              status_sub_algoritma: null,
              status_sub_sub_algoritma: null,
              status_sub_sub_sub_algoritma: null,
            },
          },
          publish: null,
          status_publish: false,
          data_publish: {
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            odometry_robot: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot: 25,
            trim_penendang_robot: 0,
            switch_robot: 0,
            robot_condition: 0,
          },
        },
        konva: {
          robotConfig: {
            x: 100,
            y: 100,
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
            x: 100,
            y: 550,
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
            robot: require("../assets/Model_IRIS_Basestaton/Green Model/green.png"),
            robotWithBall: require("../assets/Model_IRIS_Basestaton/Green Model/green_ball.png"),
            ball: require("../assets/Model_IRIS_Basestaton/Green Model/bola_hijau.png"),
          },
          shotline: {
            x: 0,
            y: 0,
            points: [0, 0],
            tension: 0.8,
            strokeWidth: 4,
            closed: false,
            stroke: "black",
          },
          violationLine: [
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
          ],
        },
      },
      // array 2, robot 3
      {
        ros_init: null,
        // ip: "",
        ip: "172.16.80.103",
        // ip: "172.16.80.99",
        isConnected: false,
        isAutoConnect: true,
        statusControlRobot: false,
        role: "Penyerang",
        velocity: 0,
        shoot: 0,
        lineTracker: true,
        basestation: {
          subscribe: {
            bs2k22_sub: null,
            bs2k22_msg: {
              text_one: "",
              number_one: 0,
              number_two: 0,
              number_three: 0,
            },
            pc2Bs_sub: null,
            pc2Bs_msg: {
              pos_x: 999,
              pos_y: 999,
              theta: 999,
              status_bola: 999,
              bola_x_pada_lapangan: 999,
              bola_y_pada_lapangan: 999,
              target_umpan: 999,
              robot_condition: 999,
              status_algoritma: null,
              status_sub_algoritma: null,
              status_sub_sub_algoritma: null,
              status_sub_sub_sub_algoritma: null,
            },
          },
          publish: null,
          status_publish: false,
          data_publish: {
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            odometry_robot: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot: 25,
            trim_penendang_robot: 0,
            switch_robot: 0,
            robot_condition: 0,
          },
        },
        konva: {
          robotConfig: {
            // x: 999,
            // y: 999,
            x: 150,
            y: 150,
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
            x: 150,
            y: 600,
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
            robot: require("../assets/Model_IRIS_Basestaton/Pink Model/pink.png"),
            robotWithBall: require("../assets/Model_IRIS_Basestaton/Pink Model/pink_ball.png"),
            ball: require("../assets/Model_IRIS_Basestaton/Pink Model/bola_pink.png"),
          },
          shotline: {
            x: 0,
            y: 0,
            points: [0, 0],
            tension: 0.8,
            strokeWidth: 4,
            closed: false,
            stroke: "black",
          },
          violationLine: [
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
          ],
        },
      },
      // array 3, robot 4
      {
        ros_init: null,
        ip: "172.16.80.104",
        // ip: "172.16.80.101",
        isConnected: false,
        isAutoConnect: true,
        statusControlRobot: false,
        role: "Penyerang",
        velocity: 0,
        shoot: 0,
        lineTracker: true,
        basestation: {
          subscribe: {
            bs2k22_sub: null,
            bs2k22_msg: {
              text_one: "",
              number_one: 0,
              number_two: 0,
              number_three: 0,
            },
            pc2Bs_sub: null,
            pc2Bs_msg: {
              pos_x: 999,
              pos_y: 999,
              theta: 999,
              status_bola: 999,
              bola_x_pada_lapangan: 999,
              bola_y_pada_lapangan: 999,
              target_umpan: 999,
              robot_condition: 999,
              status_algoritma: null,
              status_sub_algoritma: null,
              status_sub_sub_algoritma: null,
              status_sub_sub_sub_algoritma: null,
            },
          },
          publish: null,
          status_publish: false,
          data_publish: {
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            odometry_robot: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot: 25,
            trim_penendang_robot: 0,
            switch_robot: 0,
            robot_condition: 0,
          },
        },
        konva: {
          robotConfig: {
            // x: 999,
            // y: 999,
            x: 200,
            y: 200,
            image: new Image(),
            width: 70,
            height: 70,
            rotation: 90,
            offset: {
              x: 35,
              y: 35,
            },
          },
          imageRobot: {
            robot: require("../assets/Model_IRIS_Basestaton/Red Model/red.png"),
            robotWithBall: require("../assets/Model_IRIS_Basestaton/Red Model/red_ball.png"),
            ball: require("../assets/Model_IRIS_Basestaton/Red Model/bola_merah.png"),
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
          shotline: {
            x: 0,
            y: 0,
            points: [0, 0],
            tension: 0.8,
            strokeWidth: 4,
            closed: false,
            stroke: "black",
          },
          violationLine: [
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
          ],
        },
      },
      // array 4, robot 5
      {
        ros_init: null,
        ip: "172.16.80.105",
        // ip: "172.16.80.200",
        isConnected: false,
        isAutoConnect: true,
        statusControlRobot: false,
        role: "Penyerang",
        velocity: 0,
        shoot: 0,
        lineTracker: true,
        basestation: {
          subscribe: {
            bs2k22_sub: null,
            bs2k22_msg: {
              text_one: "",
              number_one: 0,
              number_two: 0,
              number_three: 0,
            },
            pc2Bs_sub: null,
            pc2Bs_msg: {
              pos_x: 999,
              pos_y: 999,
              theta: 999,
              status_bola: 999,
              bola_x_pada_lapangan: 999,
              bola_y_pada_lapangan: 999,
              target_umpan: 999,
              robot_condition: 999,
              status_algoritma: null,
              status_sub_algoritma: null,
              status_sub_sub_algoritma: null,
              status_sub_sub_sub_algoritma: null,
            },
          },
          publish: null,
          status_publish: false,
          data_publish: {
            n_robot_sendiri: 0, // lk rbt2 = 2
            n_robot_teman: 0, // lk rbt2 = 3
            odometry_robot: {
              x: 0,
              y: 0,
              theta: 90,
            },
            odometry_offset_robot: {
              x: 0,
              y: 0,
              theta: 0,
            },
            trim_kecepatan_robot: 25,
            trim_penendang_robot: 0,
            switch_robot: 0,
            robot_condition: 0,
          },
        },
        konva: {
          robotConfig: {
            // x: 999,
            // y: 999,
            x: 250,
            y: 250,
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
            x: 250,
            y: 700,
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
            robot: require("../assets/Model_IRIS_Basestaton/Yellow Model/yellow.png"),
            robotWithBall: require("../assets/Model_IRIS_Basestaton/Yellow Model/yellow_ball.png"),
            ball: require("../assets/Model_IRIS_Basestaton/Yellow Model/bola_kuning.png"),
          },
          shotline: {
            x: 0,
            y: 0,
            points: [0, 0],
            tension: 0.8,
            strokeWidth: 4,
            closed: false,
            stroke: "black",
          },
          violationLine: [
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
            {
              x: 0,
              y: 0,
              points: [0, 0],
              tension: 0.8,
              strokeWidth: 4,
              closed: false,
              stroke: "red",
            },
          ],
        },
      },
    ],
  },
  mutations: {
    char_command(state, comm) {
      state.system.basestation.publish.bs2pcTopic.command = comm.charCodeAt(0);
      console.log(
        "command changing ",
        state.system.basestation.publish.bs2pcTopic.command
      );
      state.system.basestation.char_command = comm;
    },
    string_command(state, comm) {
      state.system.basestation.full_command = comm;
    },
    shift_robot(state, role) {
      state.system.basestation.toRobot = role;
    },
  },
  actions: {
    // command({ commit }, comm) {
    //   commit
    // },
    commandDialog({ commit }, _command) {
      console.log(
        "masuk command dialog ",
        _command.command,
        " ",
        _command.toRobot
      );
      if (_command.command == "START") {
        // commit("char_command", "S");
        commit("char_command", "~");
        setTimeout(function () {
          // harusnya s kecil
          commit("char_command", "s");
          // commit("char_command", "y");
        }, 150);
      } else if (_command.command == "STOP") {
        commit("char_command", "~");
        setTimeout(function () {
          commit("char_command", "S");
        }, 150);
      } else if (_command.command == "DROP_BALL") {
        commit("char_command", "N");
      } else if (_command.command == "HALF_TIME") {
        commit("char_command", "h");
      } else if (_command.command == "END_GAME") {
        commit("char_command", "e");
      } else if (_command.command == "GAME_OVER") {
        commit("char_command", "z");
      } else if (_command.command == "PARK") {
        commit("char_command", "L");
      } else if (_command.command == "FIRST_HALF") {
        commit("char_command", "1");
      } else if (_command.command == "SECOND_HALF") {
        commit("char_command", "2");
      } else if (_command.command == "FIRST_HALF_OVERTIME") {
        commit("char_command", "3");
      } else if (_command.command == "SECOND_HALF_OVERTIME") {
        commit("char_command", "4");
      } else if (_command.command == "RESET") {
        commit("char_command", "Z");
      } else if (_command.command == "WELCOME") {
        commit("char_command", "W");
      } else if (_command.command == "KALIBRASI") {
        commit("char_command", "#");
      }
      //== Command untuk masing2 Tim
      else {
        // if(_ip == _ip_host) this->real_command = _command.command + " HOME";
        // else this->real_command = _command.command + " MAGENTA";
        commit("char_command", "S");
        setTimeout(function () {
          if (_command.command == "KICKOFF") {
            if (_command.toRobot == "HOME") commit("char_command", "K");
            else commit("char_command", "k");
          } else if (_command.command == "FREEKICK") {
            if (_command.toRobot == "HOME") commit("char_command", "F");
            else commit("char_command", "f");
          } else if (_command.command == "GOALKICK") {
            if (_command.toRobot == "HOME") commit("char_command", "G");
            else commit("char_command", "g");
          } else if (_command.command == "THROWIN") {
            if (_command.toRobot == "HOME") commit("char_command", "T");
            else commit("char_command", "t");
          } else if (_command.command == "CORNER") {
            if (_command.toRobot == "HOME") commit("char_command", "C");
            else commit("char_command", "c");
          } else if (_command.command == "PENALTY") {
            if (_command.toRobot == "HOME") commit("char_command", "P");
            else commit("char_command", "p");
          } else if (_command.command == "GOAL") {
            if (_command.toRobot == "HOME") commit("char_command", "A");
            else commit("char_command", "a");
          } else if (_command.command == "SUBGOAL") {
            if (_command.toRobot == "HOME") commit("char_command", "D");
            else commit("char_command", "d");
          } else if (_command.command == "REPAIR") {
            if (_command.toRobot == "HOME") commit("char_command", "O");
            else commit("char_command", "o");
          } else if (_command.command == "YELLOW_CARD") {
            if (_command.toRobot == "HOME") commit("char_command", "Y");
            else commit("char_command", "y");
          } else if (_command.command == "DOUBLE_YELLOW") {
            if (_command.toRobot == "HOME") commit("char_command", "B");
            else commit("char_command", "b");
          } else if (_command.command == "RED_CARD") {
            if (_command.toRobot == "HOME") commit("char_command", "R");
            else commit("char_command", "r");
          } else if (_command.command == "SUBSTITUTION") {
            if (_command.toRobot == "HOME") commit("char_command", ">");
            // belum ada
            else commit("char_command", "<");
          } else if (_command.command == "IS_ALIVE") {
            if (_command.toRobot == "HOME") commit("char_command", "I");
            // belum ada
            else if (_command.command == "IS_ALIVE MAGENTA")
              commit("char_command", "i");
            // belum ada
            else commit("char_command", "?");
          }
        }, 150);
      }
    },
  },
  modules: {},
});
