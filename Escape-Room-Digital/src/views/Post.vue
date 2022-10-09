<script setup>
    import { storeToRefs } from 'pinia'
    import { PostStore } from '../stores/PostStore'
    const { posts,name,statement,question,result,clue,edit_id,loading } = storeToRefs(PostStore())
    const { addItem,fetchPosts,editItem,changeImage,deleteItem } = PostStore()

    fetchPosts();
    deleteItem() 
</script>


<template>
    <div class="container pt-3">

        <div class="text-center" v-if="loading">
            <div class="spinner-border position-absolute" role="status">
                <span class="sr-only">Loading....</span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-6" v-for="post in posts" :key="post.id">
                        <div class="card mt-2" v-if="post.image">
                            <img :src="`images/`+post.image">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{{ post.name }}</h4>
                            <p class="card-text">{{ post.statement }}</p>
                            <p class="card-text">{{ post.question }}</p>
                            <p class="card-text">{{ post.result }}</p>
                            <p class="card-text">{{ post.clue }}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-transparent border-top-0">
                            <button class="btn btn-default btn-sm" @click="editItem(post.id)">Edit</button>
                            <button class="btn btn-danger btn-sm" @click="deleteItem(post.id)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <form method="POST" @submit.prevent="addItem">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="nombre"
                                v-model="name" />
                            </div>
                            <div class="form-group">
                                <input class="form-control" rows="7" placeholder="statement" v-model="statement">
                                <input class="form-control" rows="7" placeholder="statement" v-model="question">
                                <input class="form-control" rows="7" placeholder="result" v-model="result">
                                <input class="form-control" rows="7" placeholder="clue" v-model="clue">
                            </div>
                            <div class="form-group">
                                <input type="file" class="form-control" @change="changeImage($event)"/>
                            </div>

                            <button type="submit" class="btn btn-dark">{{ edit_id ? 'update' : 'Save' }}</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

