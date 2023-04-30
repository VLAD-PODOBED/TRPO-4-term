<template>
	<div class="plan__header" v-if="IsDark == true" style="background-color: black" id="PRICING">
		<p class="plan__about" style="color: white;">{{ about }}</p>
		<h3 class="plan__title" style="color: white;">{{ titleText }}</h3>
		<p class="plan__text" style="color: white;">{{ text }}</p>
	</div>
  <div class="plan__header" v-else id="PRICING">
    <p class="plan__about">{{ about }}</p>
    <h3 class="plan__title">{{ titleText }}</h3>
    <p class="plan__text">{{ text }}</p>
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
<style>
.plan__header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.plan__about {
	font-size: 14px;
	line-height: 1.5;
	color: #222;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.plan__title {
	font-size: 32px;
	color: #222;
}

.plan__text {
	font-size: 18px;
	line-height: 1.5;
	color: #666;

	max-width: 540px;

	text-align: center;
}
</style>
