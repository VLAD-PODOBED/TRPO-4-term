<template>
  <div v-if="IsDark">
    <div class="Wrapper" v-if="getRight" style="background-color: black; color: white">
  <div class="Technology_Text" style="grid-column: 2; margin-left: 100px;">
    <p  class="Text_Before_Header">{{ PreHeader }}</p>
    <h1 class="HeaderText">{{Header}}</h1>
    <p class="MainText"> {{MainText}}</p>
  </div>
   <div class="PhoneDiv" style="grid-column: 1; margin-left: 400px">
     <img :src="ImageProps" style = "width: 321px; height: 495px"/>
   </div>
  </div>
  <div class="Wrapper" style="background-color: #222; color: white" v-else>
    <div class="Technology_Text" style="grid-column: 1; margin-left: 280px">
      <p  class="Text_Before_Header">{{ PreHeader }}</p>
      <h1 class="HeaderText">{{Header}}</h1>
      <p class="MainText"> {{MainText}}</p>
    </div>
    <div class="PhoneDiv" style="grid-column: 2; margin-left: 100px">
      <img :src="ImageProps" style = "width: 321px; height: 495px"/>
    </div>
    </div>
  </div>
  <div v-else>
    <div class="Wrapper" v-if="getRight == true">
      <div class="Technology_Text" style="grid-column: 2; margin-left: 100px;">
        <p  class="Text_Before_Header">{{ PreHeader }}</p>
        <h1 class="HeaderText">{{Header}}</h1>
        <p class="MainText"> {{MainText}}</p>
      </div>
      <div class="PhoneDiv" style="grid-column: 1; margin-left: 400px">
        <img :src="ImageProps" style = "width: 321px; height: 495px"/>
      </div>
    </div>
    <div class="Wrapper" v-else>
      <div class="Technology_Text" style="grid-column: 1; margin-left: 280px">
        <p  class="Text_Before_Header">{{ PreHeader }}</p>
        <h1 class="HeaderText">{{Header}}</h1>
        <p class="MainText"> {{MainText}}</p>
      </div>
      <div class="PhoneDiv" style="grid-column: 2; margin-left: 100px">
        <img :src="ImageProps" style = "width: 321px; height: 495px"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'TextBlock',
  props: {
    PreHeader: String,
    Header: String,
    MainText: String,
    IsRight: String,
    Background: String,
    ImageProps: String,
    IsBlack: String,
  },
  computed:{
    getRight() {
      return this.IsRight == "true" ? true : false;
    },
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    },
  },
})


</script>

<style>

.HeaderText {
  font-family: Poppins;
  font-weight: bold;
  font-size: 32px;

}
.Text_Before_Header {
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 2px;
}

.Technology_Text {
  font-family: Poppins;
  font-size: 18px;
  width: 450px;
  height: 300px;
  display: inline-block;
  grid-row: 3;
  padding-bottom: 60px;
}

.PhoneDiv {
  font-family: Poppins;
  display: inline-block;
  grid-row: 2;
  -ms-grid-row-span: 2;
  margin-top: 30px;
}

.Wrapper {
  height: 700px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 5% 45% 45% 0%;
  background-color: v-bind(Background);
}
</style>