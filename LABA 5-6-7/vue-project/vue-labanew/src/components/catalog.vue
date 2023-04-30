<template>
<div :class="$style.wrapper" v-if="IsDark == false">
  <div :class="$style.vlad" id= "VLAD">
    <div :class="$style.Textmain">
          <p :class="$style.Features" style="margin-top: 0;">Features</p>
          <p :class="$style.Features2" style="margin-top: 0;">The latest & greatest in phone photography.</p>
        </div>

    <div :class="$style.addformcontrol">
    <p :class="$style.instuctor">Add an image:</p>
    <input :class="$style.control" v-model="imagemain" style="background-image: url(image.png);">
    <p :class="$style.instuctor">Add an image:</p>
    <input :class="$style.control" v-model="imagelitle"  style="background-image: url(image.png);">
    <p :class="$style.instuctor">Add Text:</p>
    <input :class="$style.control" v-model="posttoptext">
    <p :class="$style.instuctor">Add Text:</p>
    <input :class="$style.control" v-model="postbottomtext">
</div>

<div :class="$style.ap"  :key="index">
    <button @click="addComponent" :class="$style.addbuttom">Add a component</button>
    <button @click="deleteComponent" :class="$style.addbuttom">Delete a component</button>
  </div>
  

    <div :class="$style.Main">
      <div :class="$style.product" id="block-1">
        <img :src="TheImg"><br>
        <img :class="$style.foto" src="../../public/foto/kubik.png" style="width: 64px;height: 64px;">
        <h3 style="color: #0278ED;">{{ TheText1 }}</h3>
        <p :class="$style.ProductText">{{ TheText2 }}</p>
      </div>
      <div :class="$style.product" >
        <img :src="TheImg2"><br>
        <img :class="$style.foto" src="../../public/foto/Framekubik2.png" style="width: 64px;height: 64px;">
        <h3 style="color: #FF5437;">{{ TheText3 }}</h3>
        <p :class="$style.ProductText">{{ TheText4 }}</p>
      </div>
      <div :class="$style.product" >
        <img :src="TheImg"><br>
        <img :class="$style.foto" src="../../public/foto/Framekubik3.png" style="width: 64px;height: 64px;">
        <h3 style="color: #FF9209;">{{ TheText5 }}</h3>
        <p :class="$style.ProductText">{{ TheText6 }}</p>
      </div>
      <div :class="$style.product" >
        <img :src="TheImg3"><br>
        <img :class="$style.foto" src="../../public/foto/Framekubik4.png" style="width: 64px;height: 64px;">
        <h3 style="color: #E738CE;">{{ TheText7 }}</h3>
        <p :class="$style.ProductText">{{ TheText8 }}</p>
      </div>
      <div :class="$style.product" >
        <img :src="TheImg"><br>
        <img :class="$style.foto" src="../../public/foto/Framekubik5.png" style="width: 64px;height: 64px;">
        <h3 style="color: #00C6DF;">{{ TheText9 }}</h3>
        <p :class="$style.ProductText">{{ TheText10 }}</p>
      </div>
      <div :class="$style.product" >
        <img :src="TheImg4"><br>
        <img :class="$style.foto" src="../../public/foto/Framekubik6.png" style="width: 64px;height: 64px;">
        <h3 style="color: #B25DF8;">{{ TheText11 }}</h3>
        <p :class="$style.ProductText">{{ TheText12 }}</p>
      </div>


      <div v-for="showComponent in arr" :key="showComponent" :class="$style.app">
          <div :class="$style.product1"> 
            <component-a :item="showComponent"></component-a> 
            <img :src="imagemain" style="width:228px;height:300px"><br>
            <img :class="$style.foto" :src="imagelitle" style="width: 64px;height: 64px;">
            <h3 style="color: #0278ED;">{{posttoptext}}</h3>
            <p :class="$style.ProductText">{{postbottomtext}}</p>
          </div>
        </div>
    </div>
  </div>
</div>
  <div :class="$style.wrapper" v-else>
    <div :class="$style.vlad" id= "VLAD">
      <div :class="$style.text-main">
        <p :class="$style.Features" style="margin-top: 0;">Features</p>
        <p :class="$style.Features2" style="margin-top: 0;">The latest & greatest in phone photography.</p>
      </div>

      <div :class="$style.add-form-control">
    <p :class="$style.instuctor-text">Add an image:</p>
    <input :class="$style.form-control" v-model="image_main" style="background-image: url(image.png);">
    <p :class="$style.instuctor-text">Add an image:</p>
    <input :class="$style.form-control" v-model="image_litle"  style="background-image: url(image.png);">
    <p :class="$style.instuctor-text">Add Text:</p>
    <input :class="$style.form-control" v-model="post_top_text">
    <p :class="$style.instuctor-text">Add Text:</p>
    <input :class="$style.form-control" v-model="post_bottom_text">
</div>

  <div :class="$style.ap"  :key="index">
    <button @click="addComponent" :class="$style.addbuttom">Add a component</button>
    <button @click="deleteComponent" :class="$style.addbuttom">Delete a component</button>
  </div>

      <div :class="$style.Main">
        <div :class="$style.product" id="block-1" style="background-color: black; color: white">
          <img :src="TheImg"><br>
          <img :class="$style.foto" src="../../public/foto/kubik.png" style="width: 64px;height: 64px;">
          <h3 style="color: #0278ED;">{{ TheText1 }}</h3>
          <p :class="$style.ProductText">{{ TheText2 }}</p>
        </div>
        <div :class="$style.product" style="background-color: black; color: white">
          <img :src="TheImg2"><br>
          <img :class="$style.foto" src="../../public/foto/Framekubik2.png" style="width: 64px;height: 64px;">
          <h3 style="color: #FF5437;">{{ TheText3 }}</h3>
          <p :class="$style.ProductText">{{ TheText4 }}</p>
        </div>
        <div :class="$style.product" style="background-color: black; color: white">
          <img :src="TheImg"><br>
          <img :class="$style.foto" src="../../public/foto/Framekubik3.png" style="width: 64px;height: 64px;">
          <h3 style="color: #FF9209;">{{ TheText5 }}</h3>
          <p :class="$style.ProductText">{{ TheText6 }}</p>
        </div>
        <div :class="$style.product" style="background-color: black; color: white">
          <img :src="TheImg3"><br>
          <img :class="$style.foto" src="../../public/foto/Framekubik4.png" style="width: 64px;height: 64px;">
          <h3 style="color: #E738CE;">{{ TheText7 }}</h3>
          <p :class="$style.ProductText">{{ TheText8 }}</p>
        </div>
        <div :class="$style.product" style="background-color: black; color: white">
          <img :src="TheImg"><br>
          <img :class="$style.foto" src="../../public/foto/Framekubik5.png" style="width: 64px;height: 64px;">
          <h3 style="color: #00C6DF;">{{ TheText9 }}</h3>
          <p :class="$style.ProductText">{{ TheText10 }}</p>
        </div>
        <div :class="$style.product" style="background-color: black; color: white">
          <img :src="TheImg4"><br>
          <img :class="$style.foto" src="../../public/foto/Framekubik6.png" style="width: 64px;height: 64px;">
          <h3 style="color: #B25DF8;">{{ TheText11 }}</h3>
          <p :class="$style.ProductText">{{ TheText12 }}</p>
        </div>

        <div v-for="showComponent in arr" :key="showComponent" :class="$style.app">
          <div :class="$style.product1"> 
            <component-a :item="showComponent"></component-a> 
            <img :src="image_main" style="width:228px;height:300px"><br>
            <img :class="$style.foto" :src="image_litle" style="width: 64px;height: 64px;">
            <h3 style="color: #0278ED;">{{post_top_text}}</h3>
            <p :class="$style.ProductText">{{post_bottom_text}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'TheCatalog',
  props: {
    TheImg:Object,
    TheImg2:Object,
    TheImg3:Object,
    TheImg4:Object,
    TheText1: String,
    TheText2: String,
    TheText3: String,
    TheText4: String,
    TheText5: String,
    TheText6: String,
    TheText7: String,
    TheText8: String,
    TheText9: String,
    TheText10: String,
    TheText11: String,
    TheText12: String,
    IsBlack: String,
  },
  computed: {
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    },
  },
  data() {
    return {
      showComponent: true,
      arr: [],
      post:[],
    };
  },
  methods: {
    addComponent(){
      this.arr.push({ });
    },
    deleteComponent(){
          this.arr.splice({ });
      },
  },
}
</script>


<style module>
.Main {
  display: grid;
  grid-template-columns: repeat(3, 370px);
  justify-content: center;
  grid-gap: 20px;
  left: 20px;
  width: 100%;
  align-content: center;
  margin-bottom:10%;
  scroll-behavior: smooth;
  }
  .ap{
    grid-template-columns: repeat(2, 200px);
    display:grid;
    justify-content:center;
    margin-top:20px;
    margin-bottom:20px;
    grid-gap:20px; 
    width:auto;  
  }

  .addbuttom{
    width:172px;
    height:40px;
}
  .app{
  display: grid;
  grid-template-columns: repeat(3, 370px);
  justify-content: space-between;
  border-radius: 4px;
  }

  .addformcontrol{
    display: grid;
    justify-content: center;
  } 

  .control{
    width:300px;
    height:20px;
    margin-bottom: 10px;
    justify-content: center;
  } 

  .instuctor{
    margin-bottom:10px;
    margin-top:0px;
    text-align:center;
    color:white;
    justify-content: center;
  }
  .product1{
    background-color: #fff;
    border: 1px solid #ccc; 
    padding: 10px;
    height: 490px;
    column-gap: 20px;
    text-align: center;
    border-radius: 20px;
  }
  
  .product1 h3 {
  font-size: 20px;
  font-weight: bold;
  }
  
  .product1 p {
  margin: 10px 0;
  font-size: 15px;
  }
  
  .product1 img {
  margin-bottom: -15px;
  }
  
  .vlad{
      display: grid;
      background: #222222;
      height: 100%;
      width: 100%;
      align-content: space-evenly;
  }
  
  .Textmain{
      display: grid;
      text-align: center;
      color: white;
      margin-top:10px;
      align-content: center;
      top:20%;
  }
  
  .Features{
      margin-left: auto;
      margin-right: auto;
      font-size: 16px;
      width: 85px;
      height: 20px;
      color:white;
  }
  
  .Features2{
      margin-left: auto;
      margin-right: auto;
      font-size: 32px;
      width: 495px;
      height: 72px;
      color:white;
      text-align:center;
  }
  
  .product {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  height: 490px;
  column-gap: 20px;
  text-align: center;
  border-radius: 20px;
  }
  
  .product h3 {
  font-size: 20px;
  font-weight: bold;
  }
  
  .product p {
  margin: 10px 0;
  font-size: 15px;
  }
  
  .product img {
  margin-bottom: -15px;
  } 
  </style>