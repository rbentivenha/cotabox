<template v-slot:activator="{ on }">
  <v-form>
    <v-container mt-3>
      <v-layout column>
        <div class="resultContainer">
          <v-layout align-center justify-center row fill-height>
            <div class="item">
              <v-text-field
                :key="count"
                v-model="employee.firstName"
                solo
                flat
                label="First Name"
                required
              ></v-text-field>
            </div>
            <div class="item">
              <v-text-field
                :key="count"
                v-model="employee.lastName"
                solo
                flat
                label="Last Name"
                required
              ></v-text-field>
            </div>
            <div class="item">
              <v-text-field
                :key="count"
                v-model="employee.participation"
                solo
                flat
                label="Participation"
                required
              ></v-text-field>
            </div>
            <div class="itemBtn">
              <ErrorMsg
                @clicked="onSend"
                :firstName="employee.firstName"
                :lastName="employee.lastName"
                :participation="employee.participation"
                v-show="true"
              >Teste</ErrorMsg>
            </div>
          </v-layout>
        </div>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import ErrorMsg from "./ErrorMsg";

export default {
  components: {
    ErrorMsg
  },
  data() {
    return {
      employee: {
        id: "",
        firstName: "",
        lastName: "",
        participation: ""
      },
      lista: [],
      dados: {},
      count: 0
    };
  },
};
</script>

<style scoped>
.resultContainer {
  height: 100px;
  margin: auto;
  width: 100%;
  padding: 10px;
}

.item {
  height: 72px;
  width: 100%;
  padding: 10px;
  margin: auto;
}

.itemBtn {
  height: 60px;
  width: 150px;
  padding: 0px;
  margin: auto;
}
</style>
