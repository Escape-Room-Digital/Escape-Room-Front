<script>
export default {};
</script>
<template>
  <div class="container_all">
    <div class="container_orange">
      <div class="container_white">
        <h2>AGREGAR CANDIDATO</h2>
        <form @submit.prevent="">
          <div class="form-group">
            <label for="name" id="label">Nombre y Apellido</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label">Correo Electronico</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label">Contraseña</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
        </form>
      </div>
      <div id="button_back">
        <RouterLink :to="{ name: 'tablecodereditor' }" class="btn btn-dark">
          <p id="text_back">BACK</p>
        </RouterLink>
      </div>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>
      </div>
    </div>

    <div class="container_orange">
      <div class="container_white">
        <h2>EDITAR CANDIDATO</h2>
        <form @submit.prevent="">
          <div class="form-group">
            <label for="name" id="label">Nombre y Apellido</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label">Correo Electronico</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label">Contraseña</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
        </form>
      </div>
      <div id="button_back">
        <RouterLink :to="{ name: 'tablecodereditor' }" class="btn btn-dark">
          <p id="text_back">BACK</p>
        </RouterLink>
      </div>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>
      </div>
    </div>

    <div class="container_orange">
      <div class="container_white">
        <h2>SOLUCIÓN PRUEBA DE CÓDIGO</h2>
        <form @submit.prevent="">
          <div class="form-group">
            <label for="name" id="label">Nombre de Candidato</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label"
              >Enunciado de la Prueba de Código</label
            >
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
          <div class="form-group">
            <label for="name" id="label">Solución de la Prueba de Código</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="y"
              required
            />
          </div>
        </form>
      </div>
      <div id="button_back">
        <RouterLink :to="{ name: 'tablecodereditor' }" class="btn btn-dark">
          <p id="text_back">BACK</p>
        </RouterLink>
      </div>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>
      </div>
    </div>

    <div class="container_orange_dialog">
      <div class="container_black">
        <p id="text_dialogpasstest">
          Felicidades Pre-Coder, estás a un paso de finalizar el Escape Room
          digital de Factoria F5. Ahora a por la prueba de código, tómate tu
          tiempo y a por todas, los formadores siguen en peligro y solo tú
          podras liberarlos. Animo!
        </p>
      </div>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_button_dialog">Comenzar</p>
        </button>
      </div>
    </div>

    <div class="container_orange_dialog">
      <div class="container_black">
        <p id="text_dialog_finalgame">
          Felicidades Coder!!! Has conseguido finalizar el Escape Room y no solo
          eso, los 3 formadores han conseguido salvarse y podrán retomar su
          guarida de Valnalon. Proximamente nos pondremos en contacto contigo
          para que puedas seguir aspirando a comenzar esta nueva aventura que
          deseas. Muchas gracias por hacernos cómplices de la mejor aventura de
          tu vida.
        </p>
      </div>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_button_dialog">Comenzar</p>
        </button>
      </div>
    </div>

    <div class="container_black">
      <div class="container_clue">
        <p id="text_clue">PISTA/SOLUCIÓN</p>
      </div>
    </div>
    <button type="submit" class="btn btn-warning button_clue">
      <p id="text_button_dialog">Aceptar</p>
    </button>
  </div>
</template>
<style scoped>
/*CSS FORM*/
.container_all {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container_white {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 90vh;
  height: 70vh;
  margin: 2vh;
  border-radius: 8px;
}
H2 {
  display: flex;
  justify-content: center;
}
.container_orange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff4702;
  width: 100vh;
  height: 80vh;
  margin: 2vh;
  border-radius: 8px;
}

#text_enviar {
  font-size: 3vh;
  color: #ff4702;
}
.form-group {
  margin: 1vh;
}
#text_back {
  color: #ff4702;
}
#button_back {
  margin-bottom: 1vh;
}

/*CSS DIALOGPASSTESTCODE*/
.container_orange_dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightsalmon;
  width: 70vh;
  height: 70vh;
  margin: 2vh;
  border-radius: 8px;
}
.container_black {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  width: 50vh;
  height: 50vh;
  margin: 2vh;
  border-radius: 8px;
}
#text_dialogpasstest {
  color: aliceblue;
  margin: 2vh;
  font-size: 3vh;
}
#text_button_dialog {
  color: aliceblue;
  font-size: 3vh;
}
#text_dialog_finalgame {
  color: #ffffff;
  font-size: 3vh;
}

/*CSS CLUE*/
.container_clue {
  display: flex;
  justify-content: center;
  margin: 3vh;
}
.button_clue {
  display: flex;
  justify-content: center;
  background-color: #ff4702;
}
#text_clue {
  color: #ffffff;
}
</style>
