<template>
    <div class="pageLoader" v-if="!isLoaded">
        <span class="pageLoader__object">
            <img src="../../../../public/ball.svg" alt="Girl in a jacket" />
        </span>
    </div>
</template>
<script lang="">
import { Vue } from 'vue-class-component';


export default class pageLoader extends Vue{
    data() {
        return{
            isLoaded: false,
        }
    }

    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete") {
                this.isLoaded = true;
                console.log(12321)
            }
        }
    }
}
</script>

<style>
.pageLoader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 999;
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

.pageLoader__object {
    opacity: 0.5;
    animation: spin 5s linear infinite;
}

</style>