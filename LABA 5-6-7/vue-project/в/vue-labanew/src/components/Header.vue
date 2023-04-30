<template>
<div :class="$style.main" v-if="IsDark == true" style="background-color: black">
    <header :class="$style.header">
      <div :class="$style.logo">
        <img src="../../public/foto/IMAGE.svg" >
      </div>
      <nav :class="$style.nav">
        <div :class="$style.dwsmeny">
          <a href="#VLAD" style="scroll-behavior: smooth; ">{{ TheText1 }}</a>
          <a href="#PRICING">{{ TheText2 }}</a>
          <a href="#TESTIMONIALS">{{ TheText3 }}</a>
          <a href="#DOWNLOAD">{{ TheText4 }}</a>
          <a href="foto/Frame01.png" download=""><button :class="$style.Buttom" :id="$style.printBlock">Get template</button></a>
        </div>
      </nav>
    </header>
</div>
  <div :class="$style.main" v-else>
    <header :class="$style.header">
      <div :class="$style.logo">
        <img src="../../public/foto/IMAGE.svg" >
      </div>
      <nav :class="$style.nav">
        <div :class="$style.dwsmeny">
          <a href="#VLAD" style="scroll-behavior: smooth; ">{{ TheText1 }}</a>
          <a href="#PRICING">{{ TheText2 }}</a>
          <a href="#TESTIMONIALS">{{ TheText3 }}</a>
          <a href="#DOWNLOAD">{{ TheText4 }}</a>
          <a href="foto/Frame01.png" download=""><button :class="$style.Buttom" :id="$style.printBlock">Get template</button></a>
        </div>
      </nav>
    </header>
</div>

</template>

<script>
    export default{
        name:'TheHeader',
        props: {    
        TheText1: String,
        TheText2: String,
        TheText3: String,
        TheText4: String,
        IsBlack: String,
  },
      computed: {
          IsDark()
          {
            return this.IsBlack == "true" ? true : false;
          }
      },
}
</script>

<style module>

.main{
    background: #FFFFFF;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
    border-radius: 0px;
    width: 100%;
    height: 90px;
    scroll-behavior: smooth;
}


.Buttom{
    background: #222222; 
    color: #fff; 
    border: none;
    width: 172px;
    height: 40px;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.Buttom::after{
    content: "";
    background: white;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}
.logo {
  margin: 0;
  padding: 0;
  height: auto;
  width: 120px;
}

    .dwsmeny {
  list-style: none;
}

.dwsmeny {
    align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  float: right;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
          margin-top: 0%;
          margin-bottom: 0%;
}

.dwsmeny >  a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 15px 15px 15px;
  font-size: 1.5em;
  color: #000000;
  text-decoration: none;
}

.dwsmeny > li {
  position: relative;
}

.dwsmeny > a {
  color: #000000;
}

a:hover {
    color: #ff9900;  
    text-decoration: underline;
}

.header {
  display: -webkit-box;
  display: -ms-flexbox;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.logo > img {
  width: 180px;
}

</style>