<script>
</script>



<template >
    <div class="container_all">
        <div class="container_orange_escaperoom_create">
            <div class="container_white_escaperoom_create">
                <h2>CREAR ESCAPE ROOM</h2>
                 <form @submit.prevent="">
                    <div class="form-group">
                        <label for="name" id="label">Nombre</label>
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
            <div id="container_buttons_create">
                <div id="button_back">
                    <RouterLink :to="{ name: 'tablerooms' }" class="btn btn-dark">
                      <p id="text_back">BACK</p>
                    </RouterLink>
                  </div>
                  <div class="">
                    <button type="submit" class="btn btn-dark">
                      <p id="text_enviar">Enviar</p>
                    </button>
                  </div>
            </div>
         
        </div>
    </div>

        
    
</template>

<style scoped>
    #container_buttons_create{
        display: flex;
    }
    .container_all {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      .container_white_escaperoom_create{
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
      .container_orange_escaperoom_create{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ff4702;
        width: 100vh;
        height: 60vh;
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
</style>