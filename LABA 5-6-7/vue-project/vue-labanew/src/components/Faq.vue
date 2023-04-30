<template>
	<div class="faq" v-if="IsDark == true" style="background-color: black; color: white">
		<h3 class="faq__title" style="color: white;">{{ title }}</h3>
		<p class="faq__subtitle" style="color: white">{{ subtitle }}</p>
		<div class="faq__body">
			<div class="faq__content">
				<div class="faq__inner-title">What devices does H(app)y support?</div>
				<div class="faq__inner-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
					consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate
					ut ligula.
				</div>
				<div class="faq__inner-title">
					Will my photos magically be more beautiful if I use this app?
				</div>
				<div class="faq__inner-text">
					Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
					ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum.
					Cras commodo consequat orci, in convallis risus egestas non. Nulla
					efficitur auctor hendrerit.
				</div>
			</div>
			<div class="faq__content">
				<div class="faq__inner-title">
					How many megapixels does H(app)y support?
				</div>
				<div class="faq__inner-text">
					Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
					condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit
					amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus
					orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit
					et nisi ultrices, ut faucibus orci tincidunt.
				</div>
				<div class="faq__inner-title">
					How many photos can I store in H(app)y?
				</div>
				<div class="faq__inner-text">
					Vestibulum ultrices, orci nec egestas pharetra, ligula est semper
					enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus
					libero ac, cursus quam. Aenean porta neque eget consequat fringilla.
				</div>
			</div>
		</div>
	</div>
  <div class="faq" v-else>
    <h3 class="faq__title">{{ title }}</h3>
    <p class="faq__subtitle">{{ subtitle }}</p>
    <div class="faq__body">
      <div class="faq__content">
        <div class="faq__inner-title">What devices does H(app)y support?</div>
        <div class="faq__inner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
          consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate
          ut ligula.
        </div>
        <div class="faq__inner-title">
          Will my photos magically be more beautiful if I use this app?
        </div>
        <div class="faq__inner-text">
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum.
          Cras commodo consequat orci, in convallis risus egestas non. Nulla
          efficitur auctor hendrerit.
        </div>
      </div>
      <div class="faq__content">
        <div class="faq__inner-title">
          How many megapixels does H(app)y support?
        </div>
        <div class="faq__inner-text">
          Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
          condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit
          amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus
          orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit
          et nisi ultrices, ut faucibus orci tincidunt.
        </div>
        <div class="faq__inner-title">
          How many photos can I store in H(app)y?
        </div>
        <div class="faq__inner-text">
          Vestibulum ultrices, orci nec egestas pharetra, ligula est semper
          enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus
          libero ac, cursus quam. Aenean porta neque eget consequat fringilla.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    IsBlack: String,
  },
	name:'FaqBlock',
  computed: {
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    },
  },
	data() {
		return {
			title: 'faq',
			subtitle: 'Some questions & some answers',
		};
	}
};
</script>
<style>
.faq{
	background: #E5E5E5;
}
.faq__title {
	font-size: 32px;
	line-height: 1.5;
	color: #222;
	text-transform: uppercase;
}
.faq__subtitle {
	font-size: 15px;
	line-height: 1.5;
	color: #222;

	margin-bottom: 35px;
}

.faq__body {
	display: flex;
}

.faq__content{
	width: 40%;

}

.faq__content:nth-child(1) {
	margin-right: 10%;
}

.faq__inner-title {
	font-size: 18px;
	line-height: 1.5;
	margin-bottom: 10px;
}
.faq__inner-text {
	margin-bottom: 20px;
}
.faq > * {
	margin-left: 136px;
    text-align: left;
}
</style>
