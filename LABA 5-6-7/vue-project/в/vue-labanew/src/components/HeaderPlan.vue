<template>
	<div :class="$style.planheader" v-if="IsDark == true" style="background-color: black" id="PRICING">
		<p :class="$style.planabout" style="color: white;">{{ about }}</p>
		<h3 :class="$style.plantitle" style="color: white;">{{ titleText }}</h3>
		<p :class="$style.plantext" style="color: white;">{{ text }}</p>
	</div>
  <div :class="$style.planheader" v-else id="PRICING">
    <p :class="$style.planabout">{{ about }}</p>
    <h3 :class="$style.plantitle">{{ titleText }}</h3>
    <p :class="$style.plantext">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    IsBlack: String,
  },
  computed: {
    IsDark()
    {
      return this.IsBlack == "true" ? true : false;
    }
  },
	data() {
		return {
			about: 'Pricing',
			titleText: 'A plan for every need.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.',
		};
	},
};
</script>
<style module>
.planheader {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.planabout {
	font-size: 14px;
	line-height: 1.5;
	color: #222;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.plantitle {
	font-size: 32px;
	color: #222;
}

.plantext {
	font-size: 18px;
	line-height: 1.5;
	color: #666;

	max-width: 540px;

	text-align: center;
}
</style>
