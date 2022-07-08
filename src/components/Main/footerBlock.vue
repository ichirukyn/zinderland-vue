<template>
    <footer>
        <div class="footer-wrap">
            <img src="../../assets/logo_big.svg">
            <div>
                <h4>Zinderland</h4>
                <p>Product by <b>Phoenix Party</b></p>
            </div>
        </div>
    </footer>
</template>

<script>

export default({

})
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

footer{
    .column(center);
    justify-content: center;
    width: 100%;
    height: 300px;
    background: @block_bg;
    margin-top: @mg_big;

    
}

.footer-wrap {
    .row();
    width: 70%;
    justify-content: flex-start;

    & > div {
        .column(center);    
    }

    & > div > h4 {
        font-size: @header_3;
        color: @main_color;
    }

    & > div > p > b {
        color: @main_color;
    }

}

img{
    .image(80px, 80px);
}

</style>