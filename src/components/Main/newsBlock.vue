<template>
    <div>
        <div class="image">
            <img src="../../assets/image_fire.png" />
        </div>
        <ul class="news_lists">
            <li class="item last"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item"><a>Начали разрабатывать систему магии!</a></li>
        </ul>
    </div>
</template>

<script>

export default({

})
</script>

<style lang="less" scoped>
@import "./src/assets/less/var";
@import "./src/assets/less/mixin";

.news_lists {
    .column(center);
    align-items: stretch;
    width: 50%;

    & > li {
        .column(center);
        background: @main_bg;
        margin: @mg_base;
        height: @hg_big;
        align-items: self-start;
    }

    & > li > a {
        margin: @mg_big;
    }

}

.image {
    width: 35%;
    .column(center);
    & > img {
        width: 100%;
        .image(auto,300px);
    }
}

.last {
    background: @active_bg!important;
}

</style>