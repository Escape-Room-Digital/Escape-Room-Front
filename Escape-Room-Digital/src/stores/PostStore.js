import { defineStore } from 'pinia'
import axios from 'axios'

export const PostStore = defineStore("post",{
    state : () => ({
        posts:[],
        edit_id : null,
        name: null,
        statement: null,
        question: null,
        result: null,
        clue: null,
        image : null,

        loading:false,
        url: 'http://127.0.0.1:8000/api/logictest/'

    }),

    getters: {

    },

    actions: {
        async fetchPosts(){
            this.posts = [];
            this.loading = true
            try{
                let posts = await axios.get(this.url);
                this.posts = posts.data;
            }catch(error){
                console.log(error)
            }finally{
                // loader
                this.loading = false
            }
        },
        addItem(){
            if(this.name != '' && this.statement != '' && this.question != '' && this.result != '' && this.clue != '' && this.image != ''){
                let form_data = new FormData();

                form_data.append('name', this.name);
                form_data.append('statement', this.statement);
                form_data.append('question', this.question);
                form_data.append('result', this.result);
                form_data.append('clue', this.clue);
                form_data.append('image', this.image);

                let config  = {
                    header:{
                        'Content-Type' : 'image/png ' 
                    }
                }

                if(this.edit_id> 0){
                    // update post
                    form_data.append('_method','put');

                    axios.post(this.url+this.edit_id,form_data,config).then(res=>{
                        console.log(res);
                        this.formReset()
                        this.fetchPosts()
                    })
                }else{
                    // add post
                    axios.post(this.url,form_data,config).then(res=>{
                        console.log(res);
                        this.formReset()
                        this.fetchPosts()
                    })
                }
            }
        },
        editItem(id){
            let post = this.posts.find(post=>post.id == id)
            if(post){
                this.name = post.name
                this.statement = post.statement
                this.question = post.question
                this.result = post.result
                this.clue = post.clue
                this.edit_id = post.id
            }
        },
       async deleteItem(id){
            axios.delete(`http://127.0.0.1:8000/api/logictest/${id}`, posts.value )
                // this.fetchPosts()
              
            },

        changeImage(event){
            this.image = event.target.files[0]
        },

        formReset(){
            this.edit_id = null
            this.name = null
            this.statement = null
        }
    }

})