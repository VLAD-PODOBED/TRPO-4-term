<template>
	<footer :class="$style.footer" v-if="IsDark == true">
		<div :class="$style.footerbody">
			<div :class="$style.footerlogo">
				<img
					src="../../public/foto/footer-img.png"
					alt=""
					:class="$style.footerlogo-img"
				/>
				<div :class="$style.footerlogo-text">{{ logo }}</div>
			</div>
			<div :class="$style.footerlinks">
				<a
					href="#"
					:class="$style.footerlink"
				>
					<img
						src="../../public/foto/twitter.png"
						alt=""
						:class="$style.footerlink-img"
					/>
				</a>
				<a
					href="#"
					:class="$style.footerlink"
				>
					<img
						src="../../public/foto/inst.png"
						alt=""
						:class="$style.footerlink-img"
					/>
				</a>
				<a
					href="#"
					:class="$style.footerlink"
				>
					<img
						src="../../public/foto/facebook.png"
						alt=""
						:class="$style.footerlink-img"
					/>
				</a>
			</div>
			<div :class="$style.footerlicense">
				Powered by <span class="footer__license-color">Webflow</span> . All
				rights reserved by Happy Apps, Inc.
				<span :class="$style.footerlicense-color">Licensing.</span>
			</div>
		</div>
	</footer>
  <footer :class="$style.footer" v-else>
    <div :class="$style.footerbody">
      <div :class="$style.footerlogo">
        <img
            src="../../public/foto/footer-img.png"
            alt=""
            :class="$style.footerlogo-img"
        />
        <div :class="$style.footerlogo-text">{{ logo }}</div>
      </div>
      <div :class="$style.footerlinks">
        <a
            href="#"
            :class="$style.footerlink"
        >
          <img
              src="../../public/foto/twitter.png"
              alt=""
              :class="$style.footerlink-img"
          />
        </a>
        <a
            href="#"
            :class="$style.footerlink"
        >
          <img
              src="../../public/foto/inst.png"
              alt=""
              :class="$style.footerlink-img"
          />
        </a>
        <a
            href="#"
            :class="$style.footerlink"
        >
          <img
              src="../../public/foto/facebook.png"
              alt=""
              :class="$style.footerlink-img"
          />
        </a>
      </div>
      <div :class="$style.footerlicense">
        Powered by <span :class="$style.footerlicense-color">Webflow</span> . All
        rights reserved by Happy Apps, Inc.
        <span :class="$style.footerlicense-color">Licensing.</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    IsBlack: String,
  },
  computed: {
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    }
  },
	name:'FooterBlock',
	data() {
		return {
			logo: 'H(app)y',
		};
	},
};
</script>
<style module>
.footerbody {
	text-align: center;
	height: 420px;
	margin: 0;
	margin-top: 5%;
}
.footerlogo-img {
	margin-bottom: 10px;
}
.footerlogo-text {
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 25px;
}
.footerlinks {
	margin-bottom: 20px;
}
.footerlink {
	margin-right: 20px;
}
.footerlink:last-child {
	margin-right: 0;
}
.footerlicense {
	font-size: 16px;
	line-height: 1.5;
	color: #b1b1b1;
}
.footerlicense-color {
	color: #666;
}
</style>
