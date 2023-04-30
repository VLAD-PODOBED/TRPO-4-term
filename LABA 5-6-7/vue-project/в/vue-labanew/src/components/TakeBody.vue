<template>
	<div :class="$style.takebody" v-if="IsDark == true" style="background-color: rgba(5,5,5,0.8)">
		<div :class="$style.takecard" style="background-color: black">
			<div :class="$style.takecontent" style="color: white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus.
			</div>
			<div :class="$style.takeinner">
				<img
					:class="$style.takeimg"
					src="../../public/foto/take-01.jpg"
				/>
				<div :class="$style.takedescription" style="color: white">
					<p :class="$style.takename">Pam Beesly</p>
					<p :class="$style.takepost">Dunder Mifflin</p>
				</div>
			</div>
		</div>
		<div :class="$style.takecard" style="background-color: black">
			<div :class="$style.takecontent" style="color: white;">
				Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
				ac, cursus quam. Aenean porta neque eget consequat fringilla.
			</div>
			<div :class="$style.takeinner">
				<img
					:class="$style.takeimg"
					src="../../public/foto/take-02.jpg"
				/>
				<div :class="$style.takedescription" style="color: white;">
					<p :class="$style.takename">Michael Scott</p>
					<p :class="$style.takepost">Dunder Mifflin</p>
				</div>
			</div>
		</div>
		<div :class="$style.takecard" style="background-color: black">
			<div :class="$style.takecontent" style="color: white">
				Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim,
				nec auctor sapien leo nec purus.
			</div>
			<div :class="$style.takeinner">
				<img
					:class="$style.takeimg"
					src="../../public/foto/take-03.jpg"
				/>
				<div :class="$style.takedescription" style="color: white">
					<p :class="$style.takename">Angels Schrute</p>
					<p :class="$style.takepost">Dunder Mifflin</p>
				</div>
			</div>
		</div>
	</div>
  <div :class="$style.takebody" v-else>
    <div :class="$style.takecard">
      <div :class="$style.takecontent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus.
      </div>
      <div :class="$style.takeinner">
        <img
            :class="$style.takeimg"
            src="../../public/foto/take-01.jpg"
        />
        <div :class="$style.takedescription">
          <p :class="$style.takename">Pam Beesly</p>
          <p :class="$style.takepost">Dunder Mifflin</p>
        </div>
      </div>
    </div>
    <div :class="$style.takecard">
      <div :class="$style.takecontent">
        Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
        ac, cursus quam. Aenean porta neque eget consequat fringilla.
      </div>
      <div :class="$style.takeinner">
        <img
            :class="$style.takeimg"
            src="../../public/foto/take-02.jpg"
        />
        <div :class="$style.takedescription">
          <p :class="$style.takename">Michael Scott</p>
          <p :class="$style.takepost">Dunder Mifflin</p>
        </div>
      </div>
    </div>
    <div :class="$style.takecard">
      <div :class="$style.takecontent">
        Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim,
        nec auctor sapien leo nec purus.
      </div>
      <div :class="$style.takeinner">
        <img
            :class="$style.takeimg"
            src="../../public/foto/take-03.jpg"
        />
        <div :class="$style.takedescription">
          <p :class="$style.takename">Angels Schrute</p>
          <p :class="$style.takepost">Dunder Mifflin</p>
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
<style module>
.takebody {
	display: flex;
	background: #F2F2F2;
}
.takecard {
	background:#FFFFFF;
	flex: 25%;
	margin: 30px;
	border-radius: 20px;
	align-items: center;
}

.takecontent {
	font-size: 16px;
	line-height: 1.5;
	color: #222;
	margin-top: 20px;
	margin-bottom: 20px;
}

.takeinner {
	display: flex;
	align-items: center;
}
.takeimg {
	margin-right: 10px;
	width: 48px;
	height: 48px;
}

</style>
