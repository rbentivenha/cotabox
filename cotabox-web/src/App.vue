<template>
  <v-app>
    <v-container fluid grid-list-lg pa-0 ma-0 justify-center white>
      <v-layout row cyan accent-3 align-content-center justify-center>
        <v-flex>
          <InputForm @clicked="onSend" />
        </v-flex>
      </v-layout>
      <v-container>
        <v-layout text-center>
          <HeaderCard :message="message" />
        </v-layout>
        <v-layout row justify-center>
          <v-flex xs7>
            <DataTable :key="keyTable" v-bind:datatable="employees" />
          </v-flex>
          <v-flex xs5>
            <DoughnutChartContainer
              :key="keyChart"
              :loaded="loaded"
              :labels="employees.names"
              v-bind:particip="employees.particip"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import DataTable from "./components/DataTable";
import DoughnutChartContainer from "./components/Doughnut";
import InputForm from "./components/InputForm";
import HeaderCard from "./components/HeaderCard";
import api from "./services/index";

export default {
  name: "Main",
  components: {
    DataTable,
    DoughnutChartContainer,
    InputForm,
    HeaderCard
  },
  data() {
    return {
      employees: {},
      loaded: false,
      error: false,
      keyChart: 1,
      keyTable: 1
    };
  },
  watch: {
    employees: function(newVal) {
      return newVal;
    }
  },
  methods: {
    onSend(value) {
    console.log("TCL: onSend -> value", value);
      
      if (value) {
        this.keyChart++;
        this.keyTable++;
      }
    }
  },
  computed: {
    message: function() {
      if (this.error) return "Something went wrong!";
      else return null;
    },
    key: () => {
      return 5;
    }
  },
  async mounted() {
    this.loaded = false;
    try {
      const { data } = await api.post("/", {
        query: `{
                chartData {
                  ids
                  names
                  lastNames
                  particip
                }
              }`
      });
      this.employees = data.data.chartData;
      this.loaded = true;
    } catch (e) {
      this.error = true;
    }
  }
};
</script>

