<template>
	<div class="faq" v-if="IsDark == true" style="background-color: black; color: white">
		<h3 :class="$style.faqtitle" style="color: white;">{{ title }}</h3>
		<p :class="$style.faqsubtitle" style="color: white">{{ subtitle }}</p>
		<div :class="$style.faqbody">
			<div :class="$style.faqcontent">
				<div :class="$style.faqinner-title">What devices does H(app)y support?</div>
				<div :class="$style.faqinner-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
					consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate
					ut ligula.
				</div>
				<div :class="$style.faqinner-title">
					Will my photos magically be more beautiful if I use this app?
				</div>
				<div :class="$style.faqinner-text">
					Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
					ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum.
					Cras commodo consequat orci, in convallis risus egestas non. Nulla
					efficitur auctor hendrerit.
				</div>
			</div>
			<div :class="$style.faqcontent">
				<div :class="$style.faqinner-title">
					How many megapixels does H(app)y support?
				</div>
				<div :class="$style.faqinner-text">
					Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
					condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit
					amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus
					orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit
					et nisi ultrices, ut faucibus orci tincidunt.
				</div>
				<div :class="$style.faqinner-title">
					How many photos can I store in H(app)y?
				</div>
				<div :class="$style.faqinner-text">
					Vestibulum ultrices, orci nec egestas pharetra, ligula est semper
					enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus
					libero ac, cursus quam. Aenean porta neque eget consequat fringilla.
				</div>
			</div>
		</div>
	</div>
  <div :class="$style.faq" v-else>
    <h3 :class="$style.faqtitle">{{ title }}</h3>
    <p :class="$style.faqsubtitle">{{ subtitle }}</p>
    <div :class="$style.faqbody">
      <div :class="$style.faqcontent">
        <div :class="$style.faqinner-title">What devices does H(app)y support?</div>
        <div :class="$style.faqinner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
          consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate
          ut ligula.
        </div>
        <div :class="$style.faqinner-title">
          Will my photos magically be more beautiful if I use this app?
        </div>
        <div :class="$style.faqinner-text">
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum.
          Cras commodo consequat orci, in convallis risus egestas non. Nulla
          efficitur auctor hendrerit.
        </div>
      </div>
      <div :class="$style.faqcontent">
        <div :class="$style.faqinner-title">
          How many megapixels does H(app)y support?
        </div>
        <div :class="$style.faqinner-text">
          Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
          condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit
          amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus
          orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit
          et nisi ultrices, ut faucibus orci tincidunt.
        </div>
        <div :class="$style.faqinner-title">
          How many photos can I store in H(app)y?
        </div>
        <div :class="$style.faqinner-text">
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
<style module>
.faq{
	background: #E5E5E5;
}
.faqtitle {
	font-size: 32px;
	line-height: 1.5;
	color: #222;
	text-transform: uppercase;
}
.faqsubtitle {
	font-size: 15px;
	line-height: 1.5;
	color: #222;

	margin-bottom: 35px;
}

.faqbody {
	display: flex;
}

.faqcontent{
	width: 40%;

}

.faqcontent:nth-child(1) {
	margin-right: 10%;
}

.faqinner-title {
	font-size: 18px;
	line-height: 1.5;
	margin-bottom: 10px;
}
.faqinner-text {
	margin-bottom: 20px;
}
.faq > * {
	margin-left: 136px;
    text-align: left;
}
</style>
