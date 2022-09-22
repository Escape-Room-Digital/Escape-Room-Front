<script>

</script>

<template>
    
            <div class="Inicio">
                <h2>Iniciar sesion</h2>
            </div>
<v-spacer></v-spacer>
        
            <div class="form_container">

                <div class="flex">
               
                     <label for="name" class="form_label">User</label>
                     <input type="text" id="name" class="form_input" placeholder=" ">
                     
                
                
                    <label for="password" class="form_label">Password</label>
                    <input type="text" id="password" class="form_input" placeholder=" ">
                   
                    <input type="submit" class="form_submit" value="Entrar">
                </div>
            </div>
            
        
        
        

            <!-- <RouterLink to="/paneladmin"><a class="text-link">Acceder</a></RouterLink> -->
    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

template{
    background-image: url(https://media-exp1.licdn.com/dms/image/C4E1BAQHWqn0FLbkJ7g/company-background_10000/0/1602242826197?e=2147483647&v=beta&t=sy2YtXB8GrNZsTWkOfzrRRGa9GRi5zfXQ5VSlF6Cc5s) ;
}
.form{
        background-color:#ff4702;
        margin: auto;
        color:#ff4702;
    }

   

    .Inicio{
        background-color:black ;
        color: #ff4702;
        margin: auto;    
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align:center;
        padding: 5px;
        
    }

    .form_group {
        color:#ff4702;
        background: black;
       
    }

    .form_submit{
        background-color: black;
        color: #ff4702;
        width: 100px;
        height: 30px;
        border-radius: 3px;
        
    }

    .form_container{
        background-color:#ff4702 ;
        display: inline-block;
        width: 300px;
        height: 200px;
    }
    .form_label{
        
    }

    .flex{
        display: flex;
        flex-direction: column;
        align-content: center;
    }
</style>
