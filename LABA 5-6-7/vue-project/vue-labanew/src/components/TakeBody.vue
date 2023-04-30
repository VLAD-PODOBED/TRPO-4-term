<template>
	<div class="take__body" v-if="IsDark == true" style="background-color: rgba(5,5,5,0.8)">
		<div class="take__card" style="background-color: black">
			<div class="take__content" style="color: white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus.
			</div>
			<div class="take__inner">
				<img
					class="take__img"
					src="../../public/foto/take-01.jpg"
				/>
				<div class="take__description" style="color: white">
					<p class="take__name">Pam Beesly</p>
					<p class="take__post">Dunder Mifflin</p>
				</div>
			</div>
		</div>
		<div class="take__card" style="background-color: black">
			<div class="take__content" style="color: white;">
				Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
				ac, cursus quam. Aenean porta neque eget consequat fringilla.
			</div>
			<div class="take__inner">
				<img
					class="take__img"
					src="../../public/foto/take-02.jpg"
				/>
				<div class="take__description" style="color: white;">
					<p class="take__name">Michael Scott</p>
					<p class="take__post">Dunder Mifflin</p>
				</div>
			</div>
		</div>
		<div class="take__card" style="background-color: black">
			<div class="take__content" style="color: white">
				Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim,
				nec auctor sapien leo nec purus.
			</div>
			<div class="take__inner">
				<img
					class="take__img"
					src="../../public/foto/take-03.jpg"
				/>
				<div class="take__description" style="color: white">
					<p class="take__name">Angels Schrute</p>
					<p class="take__post">Dunder Mifflin</p>
				</div>
			</div>
		</div>
	</div>
  <div class="take__body" v-else>
    <div class="take__card">
      <div class="take__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus.
      </div>
      <div class="take__inner">
        <img
            class="take__img"
            src="../../public/foto/take-01.jpg"
        />
        <div class="take__description">
          <p class="take__name">Pam Beesly</p>
          <p class="take__post">Dunder Mifflin</p>
        </div>
      </div>
    </div>
    <div class="take__card">
      <div class="take__content">
        Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
        ac, cursus quam. Aenean porta neque eget consequat fringilla.
      </div>
      <div class="take__inner">
        <img
            class="take__img"
            src="../../public/foto/take-02.jpg"
        />
        <div class="take__description">
          <p class="take__name">Michael Scott</p>
          <p class="take__post">Dunder Mifflin</p>
        </div>
      </div>
    </div>
    <div class="take__card">
      <div class="take__content">
        Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim,
        nec auctor sapien leo nec purus.
      </div>
      <div class="take__inner">
        <img
            class="take__img"
            src="../../public/foto/take-03.jpg"
        />
        <div class="take__description">
          <p class="take__name">Angels Schrute</p>
          <p class="take__post">Dunder Mifflin</p>
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
  computed: {
    IsDark() {
      return this.IsBlack == "true" ? true : false;
    }
  },
	data() {
		return {};
	},
};
</script>
<style>
.take__body {
	display: flex;
	background: #F2F2F2;
}
.take__card {
	background:#FFFFFF;
	flex: 25%;
	margin: 30px;
	border-radius: 20px;
	align-items: center;
}

.take__content {
	font-size: 16px;
	line-height: 1.5;
	color: #222;
	margin-top: 20px;
	margin-bottom: 20px;
}

.take__inner {
	display: flex;
	align-items: center;
}
.take__img {
	margin-right: 10px;
	width: 48px;
	height: 48px;
}

.take__description {
	/* padding-top: 5px; */
}
</style>
