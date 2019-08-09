<template>
  <v-data-table :headers="headers" :items="employees" class="elevation-0" hide-actions>
    <template v-slot:items="props">
      <td>{{ props.item.num }}</td>
      <td class="text-xs-right">{{ props.item.fname }}</td>
      <td class="text-xs-right">{{ props.item.lname }}</td>
      <td class="text-xs-right">{{ props.item.part }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    datatable: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      num: 0,
      headers: [
        {
          text: "",
          align: "left",
          sortable: true,
          value: "num"
        },
        { text: "First Name", value: "fname" },
        { text: "Last Name", value: "lname" },
        { text: "Participation", value: "part" }
      ],
      employees: []
    };
  },
  watch: {
    datatable: function (newValue) {
      let temp = [];
      let len;
      let employee = {};

      try {
        len = newValue.names.length;
      } catch {
        len = 0;
      }

      for (let i = 0; i < len; i++) {
        employee = {
          num: i + 1,
          fname: newValue.names[i],
          lname: newValue.lastNames[i],
          part: newValue.particip[i]
        };
        temp.push(employee);
      }

      this.employees = temp.length > 0 ? temp : [];
    }
  },
};
</script>