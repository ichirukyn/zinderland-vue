<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  color: #fff;
  font-family: "ComfortaaLight";
  font-size: 16px;
  transition: 0.3s;
}

li,a {
  padding: 3px;
  list-style: none;
  text-decoration: none;
  transition: 0.3s;
}

body {
  background: #121212;
}

input {
  border: 1px solid orange;
  width: 100%;
  max-width: 178px;
  background: #242323;
  outline: none;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}

select {
  background: #242323;
  outline: none;
  border: none;
  padding: 5px;
  margin: 2px;
}

.app{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: stretch;
}

.mini-header{
  color: #fff;
  font-size: 22px;
  margin-bottom: 15px;
}

.user-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}




/* Block*/
.column{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  
}
.row{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.block{
  background: #171716;
  border-radius: 5px;
}

.main{
  width: 80%;
  height: 350px;
  margin-top: 20px;
}

/* Scroll */
.scroll {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}


/* Text */
.label{
  padding: 5px;
  margin: 5px;
  font-size: 18px;
  font-style: bold;
}
.text{
  text-align: justify;
}

@font-face {
  font-family: "ComfortaaLight"; 
  src: url("./assets/fonts/Comfortaa-Light.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 




/* Tabs */
.item{
  margin: 5px;
  padding: 5px 15px;
  background: #242323;
  border-bottom: 1px solid #242323;
  border-radius: 5px;
}

.tab-panel {
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.active {
  background: #171716 !important;
  border-bottom: solid 1px #DB6F15;
}
.active > a {
  line-height: 22px;
  color: #DB6F15;
}

.show{
  display:block!important;
}

/* Image */
img{
  border-radius: 5px;
  object-fit: cover;
}
.image-350 > img{
  max-width: 350px;
  height: 250px;
}
.image-50 > img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

/* Form */
.autofill:-webkit-autofill {
    border: 1px solid orange;
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 50px #242323 inset;
            box-shadow: 0 0 0px 50px #242323 inset;
    color: #fff !important;
}

.submit{
  background: #f35f0b;
  max-width: 200px;
}

.btn{
  text-align: center;
  width: 180px;
  outline: none;
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background: #DB6F15;
}

.dis{
  background: #242323;
}

.btn > a{
  -webkit-text-fill-color: #fff!important;
  border: none!important;
}

/* .btn > a{
  font-family: 'ComfortaaLight';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  -webkit-text-fill-color: #fff!important;
  border: none!important;
} */
</style>