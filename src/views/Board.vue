<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="3 mr-3" v-for="(board, index) in boards" :key="index">
        <drag-area :list-name="board.boardName"></drag-area>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DragArea from "../components/DragArea.vue";
export default {
  components: {
    DragArea
  },
  data() {
    return {
      boards: [
        {
          boardName: "ToDo"
        },
        {
          boardName: "Doing"
        },
        {
          boardName: "Done"
        }
      ]
    };
  }
};
</script>
