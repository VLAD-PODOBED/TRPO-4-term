<template>
<div :class="$style.orange">
    <div :class="$style.orangetext1">
        <p :class="$style.number">{{ TheText1 }}</p>
        <p :class="$style.string">{{ TheText2 }}</p>
    </div>
    <div :class="$style.orangetext1">
        <p :class="$style.number">{{ TheText3 }}</p>
        <p :class="$style.string">{{ TheText4 }}</p>
    </div>
    <div :class="$style.orangetext1">
        <p :class="$style.number">{{ TheText5 }}</p>
        <p :class="$style.string">{{ TheText6 }}</p>
    </div>
</div>
</template>

<script>
    export default{
        name:'TheOrange',
        props: {
        TheText1: String,
        TheText2: String,
        TheText3: String,
        TheText4: String,
        TheText5: String,
        TheText6: String,
  },
    }
</script>

<style module>
.orange{
    display: flex;
    width: 100%;
    height: 316px;
    background: #FF5437;
    color: white;
    text-align: center;
}
.orangetext1{
    margin-left: auto;
    margin-right: auto;
    margin-top: 6%;
}
.number{
    font-size: 96px;
    margin: 0%;
}

.string{
    font-size: 14px;
}
</style>