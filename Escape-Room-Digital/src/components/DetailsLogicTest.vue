
<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetDataLogicTest } from "../services/serviceLogicTest";
const { getDataLogic, logicstests, logictest, errors, loading, destroyLogic, getlogic } = useGetDataLogicTest();
const route = useRoute();
const router = useRouter();

getlogic(`http://127.0.0.1:8000/api/logictest/show/${route.params.id}`);
</script>



<template>
    <div class="container" style="width: 400px; text-align: left">
        <h2>Story Details</h2>
        <div class="jumbotron" style="padding: 10px;">

            <div class="row" v-for="index in logictest" :key="index">
                <div class="col-sm-4">
                    <p>{{index.name}}:</p>
                </div>
                <div class="col-sm-8">{{ }}</div>
            </div>
        </div>
        <router-link :to="{ name: 'tablelogictest' }" class="btn btn-primary">
            Back
        </router-link>
    </div>
</template>
  
  
