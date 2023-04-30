<template>
	<div class="take__header" v-if="IsDark == true" style="background-color: #240707" id="TESTIMONIALS">
		<p class="take__about" style="color: white;">{{ about }}</p>
		<h3 class="take__title" style="color: white;">{{ title }}</h3>
		<p class="take__text" style="color: white;">{{ text }}</p>
	</div>
  <div class="take__header" v-else id="TESTIMONIALS">
    <p class="take__about">{{ about }}</p>
    <h3 class="take__title">{{ title }}</h3>
    <p class="take__text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    IsBlack: String,
  },
  computed: {
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    },
  },
	data() {
		return {
			about: 'Testimonials',
			title: "Don't take our word for it.",
			text: 'See what our customers are saying.',
		};
	},
};
</script>
<style>
.take__header {
	text-align: center;
	margin-bottom: 40px;
	margin-top: 100px;
	background: #F2F2F2;
}
.take__about {
	font-size: 14px;
	line-height: 1.5;
	text-transform: uppercase;
	letter-spacing: 4px;
	color: #222;
}
.take__title {
	font-size: 32px;
	color: #222;
}
.take__text {
	font-size: 18px;
	line-height: 1.5;
	color: #666;
}
</style>
