<template>
  <div :class="$style.Main" v-if="IsDark == true" style="background-color:  #212020">
    <div :class="$style.Text">
    <p  :class="$style.TextHeader"></p>
    <img src="../../public/foto/IMAGE.svg" :class="$style.Logo"/>
    <h1 :class="$style.HeaderText">The future of digital photos.</h1>
    <p :class="$style.MainText"> The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</p>
    <a href="foto/Frame01.png" download=""><button :class="$style.buttom">Download</button></a>
    <a href="#zatemnenie" ><button :class="$style.buttom">Read more</button></a>
  </div>
  <div :id="$style.zatemnenie">
      <div :id="$style.okno">
        The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!
        With H(app)y, you can take stunning photos that will make your friends and family jealous. The app offers a variety of filters, effects, and editing tools to enhance your pictures and make them truly unique. Plus, it's user-friendly and easy to navigate, so you don't have to be a professional photographer to use it.
        Whether you're a beginner or a pro, H(app)y has something for everyone. You can choose from different modes like portrait, landscape, and night mode to capture different styles of photos. And with its advanced technology, you can snap photos with incredible clarity and detail.
        But H(app)y isn't just about taking great photos. It also offers a social platform where you can share and discover amazing pictures taken by other users. You can follow your friends, favorite photographers, and browse through a curated feed of trending photos.
        So go ahead and give H(app)y a try. You won't be disappointed. It's the ultimate app for anyone who loves to take photos and wants to make them look their best. Download it now and start capturing moments that will last a lifetime.<br>
        <a href="#" :class="$style.close">Закрыть окно</a>
      </div>
    </div>
   <div :class="$style.PhoneDiv">
     <img src="../../public/foto/Frame01.png"/>
   </div> 
</div>

<div :class="$style.Main" v-else>
  <div :class="$style.Text">
    <p  :class="$style.TextHeader"></p>
    <img src="../../public/foto/IMAGE.svg" :class="$style.Logo"/>
    <h1 :class="$style.HeaderText">The future of digital photos.</h1>
    <p :class="$style.MainText"> The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</p>
    <a href="foto/Frame01.png" download=""><button :class="$style.buttom">Download</button></a>
    <a href="#zatemnenie" ><button :class="$style.buttom">Read more</button></a>
  </div>
  <div :id="$style.zatemnenie">
      <div :id="$style.okno">
        The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!
        With H(app)y, you can take stunning photos that will make your friends and family jealous. The app offers a variety of filters, effects, and editing tools to enhance your pictures and make them truly unique. Plus, it's user-friendly and easy to navigate, so you don't have to be a professional photographer to use it.
        Whether you're a beginner or a pro, H(app)y has something for everyone. You can choose from different modes like portrait, landscape, and night mode to capture different styles of photos. And with its advanced technology, you can snap photos with incredible clarity and detail.
        But H(app)y isn't just about taking great photos. It also offers a social platform where you can share and discover amazing pictures taken by other users. You can follow your friends, favorite photographers, and browse through a curated feed of trending photos.
        So go ahead and give H(app)y a try. You won't be disappointed. It's the ultimate app for anyone who loves to take photos and wants to make them look their best. Download it now and start capturing moments that will last a lifetime.<br>
        <a href="#" :class="$style.close">Закрыть окно</a>
      </div>
    </div>
   <div :class="$style.PhoneDiv">
     <img src="../../public/foto/Frame01.png"/>
   </div>
</div>
</template>

<script>
    export default{
        name: 'TheMain',
        props: {
          IsBlack: String,
        },
        computed:{
        IsDark() {
          return this.IsBlack == "true" ? true : false;
        },
      }
    }
</script>

<style module>
.Logo{
    width: 192px;
    height: 64px;
}
.buttom{
    height: 40px;
    position: relative;
    margin-left:10px;
    margin-top:10px; 
    background: #222222;    
    border-radius: 4px;
    width:172px;
    color:white;
}

#zatemnenie {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        justify-content:center;
      }
      #okno {
        width: 300px;
        height: 500px;
        text-align: center;
        padding: 15px;
        border: 3px solid #222222;
        border-radius: 10px;
        color: #222222;
        margin:auto;
        background: white;
      }
      #zatemnenie:target {display: block;}
      
      .close {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #222222;
        color: white;
        height: 40px;
        width:172px;
        text-decoration: none;
        background: #222222;    
        border-radius: 4px;
        font-size: 14pt;
        cursor:pointer;
        margin: auto;
        margin-top: 5%;
      }
      .close:hover {background: #222222;}



.HeaderText {
  font-family: Poppins;
  font-weight: bold;
  font-size: 54px;

}
.TextHeader {
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 2px;
}

.MainText{
    font-size: 16px;
}

.Text {
  font-family: Poppins;
  font-size: 18px;
  width: 450px;
  height: 400px;
  display: inline-block;
  grid-row: 3;
}

.PhoneDiv {
  font-family: Poppins;
  display: inline-block;
  margin-top: 200px;
  right: 20px;
  width: 376px;
  height: 548px;
  margin-left: 200px;
}

.Main {
    align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background: white;
}
</style>