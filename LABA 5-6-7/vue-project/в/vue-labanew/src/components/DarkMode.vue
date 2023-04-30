<template>
  <div class="container">

<TheHeader
      :IsBlack="isDark"
      TheText1="Features"
      TheText2="Pricing"
      TheText3="Testimonials"
      TheText4="Instructions"
/>
<TheMain
    :IsBlack="isDark"
/>
<TheCatalog
      :IsBlack = "isDark"
      TheImg="Frame1.png"
      TheImg2="Frame2.png"
      TheImg3="Frame3.png"
      TheImg4="Frame4.png"
      TheText1="Calendar view"
      TheText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus."
      TheText3="Lists"
      TheText4="Dolor sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
      TheText5="Varied type"
      TheText6="Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue."
      TheText7="Split-screen"
      TheText8="Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus."
      TheText9="Uploads"
      TheText10="Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non."
      TheText11="Focus mode"
      TheText12="Lorem sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
/>
<TheOrange 
      TheText1="400+"
      TheText2="Pictures analyzed"
      TheText3="25+"
      TheText4="Operations per minute"
      TheText5="95%"
      TheText6="Accuracy"
/>

<TextBlock
                ImageProps = "1.png"
                
                IsRight="false"
                PreHeader = "TECHNOLOGY"
                Header = "Use H(app)y to give your digital photos some pop."
                MainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                :IsBlack = "isDark"
   />

<TextBlock      
                ImageProps = "2.png"
                Background = "#F2F2F2"
                IsRight="true"
                PreHeader = "TECHNOLOGY"
                Header = "Use H(app)y to give your digital photos some pop."
                :IsBlack = "isDark"
                MainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
/>
<TheVlad />
<div :class="$style.wpDark">
    <p :class="$style.PreHeaderDark">DARK MODE</p>
    <p :class="$style.HeaderDark">Also available in dark.</p>
    <p :class="$style.MainTextDark">Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.</p>
    <img :src="PhoneImage" :class="$style.img">
    <hr :class="$style.Line">
    <div :class="$style.FooterDiv">
  <div>
    <img :src="Sun" :class="$style.sun" v-on:click="setDark('sun')">
    <img :src="Moon"  v-on:click = "setDark('dark')">
  </div>
      <p :class = "$style.LghtMd">LIGHT MODE</p>
      <p :class="$style.DrkMd">DARK MODE</p>
    </div>
  </div>
<HeaderPlan :IsBlack="isDark"/>
<BodyPlan :IsBlack = "isDark"/>
<TakeBlock :IsBlack="isDark"/>
<DownloadBlock :IsBlack="isDark"/>
<FaqBlock :IsBlack="isDark"/>
<FooterBlock :IsBlack="isDark"/>
</div>
</template>

<script>
import {defineComponent} from "vue";
import PhoneImage from "../../public/foto/photo_5246716892310259432_x-removebg-preview.png";
import Moon from "../../public/foto/Path.svg";
import Sun from  "../../public/foto/Shape.svg";
import HeaderPlan from "../components/HeaderPlan.vue";
import BodyPlan from "../components/BodyPlan.vue";
import TakeBlock from '../components/Take.vue';
import DownloadBlock from '../components/Download.vue';
import FaqBlock from '../components/Faq.vue';
import FooterBlock from '../components/Footer.vue';
import TheHeader from "../components/Header.vue";
import TheMain from "../components/main.vue";
import TheCatalog from "../components/catalog.vue";
import TheOrange from "../components/orange.vue";
import TextBlock from "../components/TextBlock.vue";

export default defineComponent({
  name: 'DarkMode',
  props: {
    PreHeader: String,
    Header: String,
    MainText: String,
    IsRight: String,
    Background: String,
  },
  components: {
   TheHeader,
   TheMain,
   TheCatalog,
   TheOrange,

   TextBlock,

   HeaderPlan,
   BodyPlan,
   TakeBlock,
   DownloadBlock,
   FaqBlock,
   FooterBlock,
  },
  methods: {
    setDark(theme) {
      this.isDark = theme == "dark" ? "true" : "false";
    },
  },
  data()
  {
    return {
      PhoneImage,
      Sun,
      Moon,
      isDark: "false"
    }
  }
})
</script>
<style module>

.wpDark {
  background-color: #222222;
  height: 1000px;
}

.HeaderDark {
  font-family: Poppins;
  font-weight: lighter;
  display: block;
  text-align: center;
  color: white;
  font-size:40px;
  font-weight: bold;
}

.PreHeaderDark {
  font-family: Poppins;
  font-weight: lighter;
  padding-top: 40px;
  margin: 0%;
  display: block;
  text-align: center;
  color: white;
  font-weight: lighter;
  letter-spacing: 2px;
}

.MainTextDark {

  display: block;
  color: white;
  font-size: 22px;
  width: 550px;
  margin-left: auto;
    margin-right: auto;
  text-align: center;
}

.img {
  display: block;
  width: 371px;
  height: 525px;
  margin-left: auto;
  margin-right: auto;
}

.Line {
  color: white;
  height: 2px;
  width: 630px;
  background-color: white;
  border-radius: 20px;
}

.sun {
  margin-right: 6%;
  margin-left: 0;
}

.LghtMd {
  display: inline;
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
  width: 100px;
  margin-right: 3%;
  margin-left: 0;
}

.DrkMd {
  display: inline;
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
  width: 100px;
}

.FooterDiv {
  margin-top: 50px;
  text-align: center;
}


</style>