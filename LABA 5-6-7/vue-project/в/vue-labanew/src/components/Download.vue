<template>
	<div :class="$style.download" id="DOWNLOAD">
		<div :class="$style.downloadabout">{{ about }}</div>
		<h3 :class="$style.downloadtitle">{{ title }}</h3>
		<div :class="$style.downloadtext">
			Duis tristique sed lorem a vestibulum. Cras commodo consequatorci <br />,
			in convallis risus egestas non.
		</div>
		<a href="https://www.apple.com/ru/app-store/"><img
			src="../../public/foto/download.jpg"
			alt="Кнопка EZ 0))))"
			:class="$style.downloadimg"
		/></a>
	</div>
</template>
<script>
export default {
	name:'DownloadBlock',
	data() {
		return {
			about: 'Download',
			title: "It's available right now!",
		};
	},
	methods: {
    Drk() {
      this.IsBlack = 'true';
    },
    Lgt() {
      this.IsBlack = 'false';
    },
  },
};
</script>
<style module>
.download {
	margin-top: 100px;
	text-align: center;
}

.downloadabout {
	font-size: 14px;
	line-height: 1.5;
	color: #222;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 5px;
}

.downloadtitle {
	font-size: 32px;
	color: #222;
	margin-bottom: 10px;
}

.downloadtext {
	font-size: 18px;
	line-height: 1.5;
	color: #666;
	margin-bottom: 25px;
}
.downloadimg {
	cursor: pointer;
}
</style>
