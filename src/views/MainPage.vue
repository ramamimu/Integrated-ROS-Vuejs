<template>
  <div class="mx-6">
    <v-row>
      <v-col md="4" class="align-self-center"><robot-dialog /></v-col>
      <v-col md="8" class="align-self-center" id="containerStage"
        ><field
      /></v-col>
    </v-row>
  </div>
</template>
<script>
import RobotDialog from "../components/main-page/RobotDialog.vue";
import Field from "../components/main-page/Field.vue";
export default {
  components: {
    RobotDialog,
    Field,
  },
  data() {
    return {
      responsive: {},
    };
  },
};
</script>
