<template>
	<footer class="footer" v-if="IsDark == true">
		<div class="footer__body">
			<div class="footer__logo">
				<img
					src="../../public/foto/footer-img.png"
					alt=""
					class="footer__logo-img"
				/>
				<div class="footer__logo-text">{{ logo }}</div>
			</div>
			<div class="footer__links">
				<a
					href="#"
					class="footer__link"
				>
					<img
						src="../../public/foto/twitter.png"
						alt=""
						class="footer__link-img"
					/>
				</a>
				<a
					href="#"
					class="footer__link"
				>
					<img
						src="../../public/foto/inst.png"
						alt=""
						class="footer__link-img"
					/>
				</a>
				<a
					href="#"
					class="footer__link"
				>
					<img
						src="../../public/foto/facebook.png"
						alt=""
						class="footer__link-img"
					/>
				</a>
			</div>
			<div class="footer__license">
				Powered by <span class="footer__license-color">Webflow</span> . All
				rights reserved by Happy Apps, Inc.
				<span class="footer__license-color">Licensing.</span>
			</div>
		</div>
	</footer>
  <footer class="footer" v-else>
    <div class="footer__body">
      <div class="footer__logo">
        <img
            src="../../public/foto/footer-img.png"
            alt=""
            class="footer__logo-img"
        />
        <div class="footer__logo-text">{{ logo }}</div>
      </div>
      <div class="footer__links">
        <a
            href="#"
            class="footer__link"
        >
          <img
              src="../../public/foto/twitter.png"
              alt=""
              class="footer__link-img"
          />
        </a>
        <a
            href="#"
            class="footer__link"
        >
          <img
              src="../../public/foto/inst.png"
              alt=""
              class="footer__link-img"
          />
        </a>
        <a
            href="#"
            class="footer__link"
        >
          <img
              src="../../public/foto/facebook.png"
              alt=""
              class="footer__link-img"
          />
        </a>
      </div>
      <div class="footer__license">
        Powered by <span class="footer__license-color">Webflow</span> . All
        rights reserved by Happy Apps, Inc.
        <span class="footer__license-color">Licensing.</span>
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
<style>
.footer__body {
	text-align: center;
	height: 420px;
	margin: 0;
	margin-top: 5%;
}
.footer__logo-img {
	margin-bottom: 10px;
}
.footer__logo-text {
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 25px;
}
.footer__links {
	margin-bottom: 20px;
}
.footer__link {
	margin-right: 20px;
}
.footer__link:last-child {
	margin-right: 0;
}
.footer__license {
	font-size: 16px;
	line-height: 1.5;
	color: #b1b1b1;
}
.footer__license-color {
	color: #666;
}
</style>
