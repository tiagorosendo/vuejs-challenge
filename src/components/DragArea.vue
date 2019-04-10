<template>
  <div>
    <b-row class="mb-3">
      <b-col class="px-0">
        <b-input-group>
          <b-form-input v-model="inputItem"></b-form-input>
          <b-input-group-append>
            <b-button size="sm" text="Button" variant="primary" @click="add"
              >Adicionar</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <div class="col border-1">
        <h3 id="listName">{{ listName }}</h3>
        <draggable class="list-group" :list="list" group="people" @change="log">
          <div v-for="(element, index) in list" :key="index">
            <div class="list-group-item">{{ element.name }} - {{ index }}</div>
            <b-button
              size="sm"
              text="Button"
              variant="danger"
              @click="remove(index)"
              >Remover</b-button
            >
          </div>
        </draggable>
      </div>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  props: {
    listName: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      inputItem: "TiagoTeste",
      list: [{ name: "Tiago Teste" }]
    };
  },
  methods: {
    add() {
      this.list.push({ name: this.inputItem });
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    log(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style>
.border-1 {
  border: 1px solid;
}
</style>
