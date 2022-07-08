<template>
    <div class="error">
        <p>{{error_coment}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error_coment = "" 
        }
    }
}
</script>


<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

.error{ 
    position: abolute;
    left: 0;
    right: 0;
    top: 20px;

    background: @main_block;
}

</style>