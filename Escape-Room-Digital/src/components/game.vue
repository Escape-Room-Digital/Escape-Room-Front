<script>
    export default {
        
    }
    </script>


<template>
    <div class="container_game">
        <div id="container_example_test_logic">
            <div id="container_form_example">
              <div id="list_date_test_logic">
                <div id="container_title_test">
                  <p id="text_title_test">PRUEBA LOGICA 1</p>
                </div>
    
                <div id="container_title_statement">
                  <strong>1</strong>
                  <p id="text_title_statament">El caracol se cayó en el pozo</p>
                </div>
                <div id="container_text_statament">
                  <strong>1</strong>
                  <p id="text_statament">
                    Un caracol cayó en un pozo de 15 metros. Cada día logra subir 3
                    metros, pero cada noche vuelve a caer 2.
                  </p>
                </div>
                <div class="container_image_test">

                </div>
                <div id="container_question_statament">
                    <strong>2</strong>
                    <p id="text_question_statament">
                      ¿Cuánto tiempo demorará el caracol en salir del pozo?
                    </p>
                  </div>
                  <div class="container_date_form">
                    <strong>2</strong>
                    <p class="text_date_form">13 días</p>
                  </div>
                  <div class="container_date_form">
                    <strong>2</strong>
                    <p class="text_date_form">5 días</p>
                  </div>
                  <div class="container_date_form">
                    <strong>2</strong>
                    <p class="text_date_form">11 días</p>
                  </div>
                  <div class="container_date_form">
                    <strong>2</strong>
                    <p class="text_date_form">15 días</p>
                  </div>
                </div>
              </div>
              <div id="container_group_buttons_form">
                <div class="button_form">
                  <p class="text_button_form">SOLUCIÓN</p>
                </div>
                <div class="button_form">
                  <p class="text_button_form">ENVIAR</p>
                </div>
              </div>
            </div>
        
    </div>
</template>

<style scoped>
    #container_game {
        display: flex;
        margin-top: 10vh;
    }
    .container_image_test{
        /* CARACOL 3 */

position: absolute;
width: 164px;
height: 105px;
left: 508px;
top: 334px;

background: url(CARACOL);

    }
    
    @media screen and (max-width:1200px) {
        #container_test_logic {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
    
        }
    }
    #container_form_example {
        display: flex;
        width: 70vh;
        border-radius: 10px;
    
    
    }
    
    #container_title_test {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #ff4702;
        width: 60vh;
        height: 6vh;
        border-radius: 15px;
        margin: 3vh;
    }
    @media (max-width:400px) {
        #container_title_test {
            width: 30vh;
        }
    }
#text_title_test {
        color: #ffffff;
        margin: 5vh;
    }
    @media (max-width:400px) {
        #text_title_test {
            font-size: 2vh;
        }
    }
    
    #container_title_statement {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        width: 60vh;
        height: 6vh;
        border-radius: 15px;
    }
    @media (max-width:400px){
        #container_title_statement {
            width: 30vh;
        }
    }
    
    #text_title_statament {
        color: #ffffff;
        margin: 2vh;
    }
    @media (max-width:400px){
        #text_title_statament{
            font-size: 2vh;
        }
    }
    
    
    #container_text_statament {
        display: flex;
        align-items: center;
    
        margin: 9vh;
        border-radius: 10px;
    }
    @media (max-width:400px) {
        #container_text_statament{
            width: 50vh;
        }
    }
    #text_statament {
        color: #ffffff;
        display: flex;
        text-align: center;
        margin: 5vh;
    }
    
    #container_question_statament {
        display: flex;
        align-items: center;
        
        margin: 5vh;
        border-radius: 10px;
    }
    @media (max-width:400px){
        #container_question_statament{
            width:30vh;
        }
    }
    #text_question_statament {
        color: #ffffff;
        margin: 1vh;
        
    }
    @media(max-width:400px){
        #text_question_statament {
            font-size: 2vh;
        }
    }
    #list_date_test_logic {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .text_date_form {
        color: aliceblue;
        margin-top: 5vh;
        font-size: 3vh;
    }
    .text_date_instruction_form{
        color: aliceblue;
        margin-top: 2vh;
        font-size: 3vh;
    
    }
    @media (max-width:420px){
        .text_date_instruction_form{
            font-size: 2vh;
        }
    }
    .container_date_form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #ff4702;
        width: 60vh;
        height: 8vh;
        border-radius: 8px;
        border: #ffffff solid 1px;
        margin: 1vh;
    }
    
    @media (max-width: 400px) {
        .container_date_form {
    
            width: 30vh;
        }
    }
    #container_group_buttons_form {
        display: flex;
        justify-content: center;
        
        margin-top: 3vh;
    
    }
    .button_form {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        width: 20vh;
        height: 8vh;
        border-radius: 8px;
    }
    .text_button_form {
        color: aliceblue;
    }
    #instruction_form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 35vh;
        margin-top: 10vh;
    
    }
    
</style>