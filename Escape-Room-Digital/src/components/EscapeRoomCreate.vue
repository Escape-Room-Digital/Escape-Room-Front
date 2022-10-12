<script>
import { useGetDataEscapeRoom } from "../services/serviceEscapeRoom";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
    });

    const { createEscapeRoom } = useGetDataEscapeRoom();

    const saveEscapeRoom = async () => {
      await createEscapeRoom(form);
    };

    return {
      form,
      saveEscapeRoom,
    };
  },
};

</script>

<template >
  <div class="container_all">
    <div class="container_orange_escaperoom_create">

      <h2>CREAR ESCAPE ROOM</h2>
      <form class="container_white_escaperoom_create" @submit.prevent="saveEscapeRoom">
        <div class="form-group">
          <label for="name" id="label">Nombre</label>
          <input type="text" name="name" id="name" class="form-control" v-model="form.name" required />
        </div>

        <button type="submit" class="btn btn-dark">
          enviar
        </button>

      </form>

      <div id="container_buttons_create">
        <div id="button_back">
          <RouterLink :to="{ name: 'tablerooms' }" class="btn btn-dark">
            <p id="text_back">BACK</p>
          </RouterLink>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>
@import "../assets/EscapeRoomCreate.css";
</style>