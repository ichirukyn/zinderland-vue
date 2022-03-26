<template>
    <div class="main block row">
        <div class="image-350 column">
            <img src="../../assets/images.png" />
        </div>
        <div class="news_lists column">
            <li class="item block column last"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item block column"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item block column"><a>Начали разрабатывать систему магии!</a></li>
            <li class="item block column"><a>Начали разрабатывать систему магии!</a></li>
        </div>
    </div>
</template>

<script>

export default({

})
</script>

<style scoped>

.news_lists{
    margin-left: 20px;
    align-items: stretch;
    width: 50%;
}

/* .news_lists > li{
    background: #242323;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    margin: 5px;
    padding: 5px 15px;
    height: 40px;
} */

.last{
    background: #171716!important;
	border-bottom: solid 1px #DB6F15;
}
.last > a{
    line-height: 22px;
    color: #DB6F15;
}
</style>