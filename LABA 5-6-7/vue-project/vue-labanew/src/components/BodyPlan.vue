<template>
	<div class="plan__body" v-if="IsDark == true">
		<div class="plan__card plan__card-01">
			<div class="plan__rate plan__rate-01">{{ rates[0] }}</div>
			<div class="plan__price plan__price-01">{{ prices[0] }}</div>
			<div class="plan__period plan__period-01">{{ periods[0] }}</div>
			<buttton class="plan__btn plan__btn-01" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div class="plan__card plan__card-02">
			<div class="plan__rate plan__rate-02">{{ rates[1] }}</div>
			<div class="plan__price plan__price-02">{{ prices[1] }}</div>
			<div class="plan__period plan__period-02">{{ periods[1] }}</div>
			<buttton class="plan__btn plan__btn-02" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div class="plan__card plan__card-03">
			<div class="plan__rate plan__rate-03">{{ rates[2] }}</div>
			<div class="plan__price plan__price-03">{{ prices[2] }}</div>
			<div class="plan__period plan__period-03">{{ periods[2] }}</div>
			<buttton class="plan__btn plan__btn-03" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div id="darkback"></div>
		<div class="form " id ="form__autorization">
			<div class="header__form">
				<div>Авторизация</div> 
				<img class="btn__close"  v-on:click="Close" src="../assets/close.svg"/>
			</div>
			<div class="body__form">
				<div>Логин</div> 
				<div><input id="aut__log" type="text" autocomplete="off"/></div> 
				<div>Пароль</div> 
				<div><input id="aut__password" type="text" autocomplete="off"/></div> 
				<div id="btn__aut__aut"><button v-on:click="AutValid">Войти</button></div>
				<div id="btn__aut__reg"><button v-on:click="OpenRegistrationForm">Регистрация</button></div>
			</div>
		</div>
		<div class="form " id="form__registration">
			<div class="header__form">
				<div>Регистрация</div> 
				<img class="btn__close"  v-on:click="Close" src="../assets/close.svg"/>
			</div>
			<div class="body__form">
				<div>Логин</div> 
				<div><input id="reg__log" type="text" autocomplete="off"/></div> 
				<div>Пароль</div> 
				<div><input id="reg__password" type="text" autocomplete="off"/></div> 
				<div id="btn__reg__aut"><button v-on:click="RegValid">Зарегистрироваться</button></div>
				<div id="btn__reg__reg"><button v-on:click="OpenAutorizationForm">Авторизация</button></div>
			</div>
		</div>
	</div>
  <div class="plan__body" v-else>
		<div class="plan__card plan__card-01">
			<div class="plan__rate plan__rate-01">{{ rates[0] }}</div>
			<div class="plan__price plan__price-01">{{ prices[0] }}</div>
			<div class="plan__period plan__period-01">{{ periods[0] }}</div>
			<buttton class="plan__btn plan__btn-01" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div class="plan__card plan__card-02">
			<div class="plan__rate plan__rate-02">{{ rates[1] }}</div>
			<div class="plan__price plan__price-02">{{ prices[1] }}</div>
			<div class="plan__period plan__period-02">{{ periods[1] }}</div>
			<buttton class="plan__btn plan__btn-02" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div class="plan__card plan__card-03">
			<div class="plan__rate plan__rate-03">{{ rates[2] }}</div>
			<div class="plan__price plan__price-03">{{ prices[2] }}</div>
			<div class="plan__period plan__period-03">{{ periods[2] }}</div>
			<buttton class="plan__btn plan__btn-03" v-on:click="OpenAutorizationForm">{{ btn_text }}</buttton>
		</div>
		<div id="darkback"></div>
		<div class="form " id ="form__autorization">
			<div class="header__form">
				<div>Авторизация</div> 
				<img class="btn__close"  v-on:click="Close" src="../assets/close.svg"/>
			</div>
			<div class="body__form">
				<div>Логин</div> 
				<div><input id="aut__log" type="text" autocomplete="off"/></div> 
				<div>Пароль</div> 
				<div><input id="aut__password" type="text" autocomplete="off"/></div> 
				<div id="btn__aut__aut"><button v-on:click="AutValid">Войти</button></div>
				<div id="btn__aut__reg"><button v-on:click="OpenRegistrationForm">Регистрация</button></div>
			</div>
		</div>
		<div class="form " id="form__registration">
			<div class="header__form">
				<div>Регистрация</div> 
				<img class="btn__close"  v-on:click="Close" src="../assets/close.svg"/>
			</div>
			<div class="body__form">
				<div>Логин</div> 
				<div><input id="reg__log" type="text" autocomplete="off"/></div> 
				<div>Пароль</div> 
				<div><input id="reg__password" type="text" autocomplete="off"/></div> 
				<div id="btn__reg__aut"><button v-on:click="RegValid">Зарегистрироваться</button></div>
				<div id="btn__reg__reg"><button v-on:click="OpenAutorizationForm">Авторизация</button></div>
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
    },
  },
	data() {
		return {
			rates: ['Standard', 'Premium', 'Lifetime'],
			prices: ['$9', '$99', '$149'],
			periods: ['Monthly', 'Annually', 'up front'],
			btn_text: 'buy now',
		};
	},
	methods:{
		OpenAutorizationForm: function() {
		var formAutorization = document.getElementById('form__autorization');
		var formRegistration = document.getElementById('form__registration');
		var darkback = document.getElementById('darkback');
		if(formRegistration.style.display == 'flex'){
			formRegistration.style.display = 'none';}

		formAutorization.style.display = 'flex';
		darkback.style.display = 'flex';

		var aut__log = document.getElementById('aut__log');
		var aut__pas = document.getElementById('aut__password');
		var reg__log = document.getElementById('reg__log');
		var reg__pas = document.getElementById('reg__password');
		aut__log.value = "";
		aut__log.style.borderColor = "#000";
		aut__pas.value = "";
		aut__pas.style.borderColor = "#000";
		reg__log.value = "";
		reg__log.style.borderColor = "#000";
		reg__pas.value = "";
		reg__pas.style.borderColor = "#000";
    },
	OpenRegistrationForm: function() {
		var formAutorization = document.getElementById('form__autorization');
		var formRegistration = document.getElementById('form__registration');
		var darkback = document.getElementById('darkback');
		if(formAutorization.style.display == 'flex')
			formAutorization.style.display = 'none';
		formRegistration.style.display = 'flex';
		darkback.style.display = 'flex';

		var aut__log = document.getElementById('aut__log');
		var aut__pas = document.getElementById('aut__password');
		var reg__log = document.getElementById('reg__log');
		var reg__pas = document.getElementById('reg__password');
		aut__log.value = "";
		aut__log.style.borderColor = "#000";
		aut__pas.value = "";
		aut__pas.style.borderColor = "#000";
		reg__log.value = "";
		reg__log.style.borderColor = "#000";
		reg__pas.value = "";
		reg__pas.style.borderColor = "#000";
    },
	Close: function(){
		

		var formAutorization = document.getElementById('form__autorization');
		var formRegistration = document.getElementById('form__registration');
		var darkback = document.getElementById('darkback');
		formRegistration.style.display = 'none';
		formAutorization.style.display = 'none';	
		darkback.style.display = 'none';

		var aut__log = document.getElementById('aut__log');
		var aut__pas = document.getElementById('aut__password');
		var reg__log = document.getElementById('reg__log');
		var reg__pas = document.getElementById('reg__password');
		aut__log.value = "";
		aut__log.style.borderColor = "#000";
		aut__pas.value = "";
		aut__pas.style.borderColor = "#000";
		reg__log.value = "";
		reg__log.style.borderColor = "#000";
		reg__pas.value = "";
		reg__pas.style.borderColor = "#000";


	},
	AutValid: function(){
		var log = document.getElementById('aut__log');
		var pas = document.getElementById('aut__password');
		var regexLog = /^[A-Z][a-z]{4,14}$/;
		var regexPas = /^[a-zA-Z]{8,16}$/;
		var logValue = log.value;
		var pasValue = pas.value;

		function checkLog() {
			if(logValue.match(regexLog)){
				log.style.borderColor = 'Green';
			}
			else{
				log.style.borderColor = 'Red';
			}
		}

		function checkPas() {
			if(pasValue.match(regexPas)){
				pas.style.borderColor = 'Green';
			}
			else{
				pas.style.borderColor = 'Red';
			}
		}

		checkLog();
		checkPas();

		log.addEventListener('input', function(){
			logValue = log.value;
			checkLog();
		});

		pas.addEventListener('input', function(){
			pasValue = pas.value;
			checkPas();
		});
	},
	RegValid: function(){
		var log = document.getElementById('reg__log');
		var pas = document.getElementById('reg__password');
		var regexLog = /^[A-Z][a-z]{4,14}$/;
		var regexPas = /^[a-zA-Z]{8,16}$/;
		var logValue = log.value;
		var pasValue = pas.value;

		function checkLog() {
			if(logValue.match(regexLog)){
				log.style.borderColor = 'Green';
			}
			else{
				log.style.borderColor = 'Red';
			}
		}

		function checkPas() {
			if(pasValue.match(regexPas)){
				pas.style.borderColor = 'Green';
			}
			else{
				pas.style.borderColor = 'Red';
			}
		}

		checkLog();
		checkPas();

		log.addEventListener('input', function(){
			logValue = log.value;
			checkLog();
		});

		pas.addEventListener('input', function(){
			pasValue = pas.value;
			checkPas();
		});
		
	},
	}
	
};
</script>
<style>


#btn__aut__aut>*, #btn__reg__aut>*{
	border-style: none;
	background-color: #fff;
	text-decoration: underline;
}

#btn__aut__aut>*:active, #btn__reg__aut>*:active{
	border-style: none;
	background-color: #fff;
	text-decoration: underline;
	color: #0278ed;
}

#btn__aut__reg>*,#btn__reg__reg>* {
	background-color:#ff9209;
	border-radius: 5px;
}

#btn__aut__reg>*:active,#btn__reg__reg>*:active{
	background-color:#d57909;
	border-radius: 5px;
}

.body__form{
	display: flex;
	flex-direction: column;
	background-color:#fff;
	border-bottom-right-radius: 12px;
	border-bottom-left-radius: 12px;
}

.body__form>div{
    display: flex;
    text-align: center;
    font-size: 30px;
    justify-content: center;
	padding: 15px;
	
}

.body__form>div>input{
	border-color: dimgray;
	border-radius: 5px;
}


.btn__close{
	width: 40px;
	height: 40px;
	margin-top: 5px;
	margin-right: 5px;
	margin-left: 20px;
}

.header__form{
	background-color:#f2f2f2;
	border-top-right-radius: 12px;
	border-top-left-radius: 12px;
	
}

.header__form>div{
	text-align: right;
	width: 200px;
	height: 50px;
	font-size: 30px;
	padding-right: 10px;
	margin-top: 8px;
}

.form > div{
	display: flex;
}

.form
{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 11;
	border-radius:  40px;
	display: none;
	flex-direction: column;
}

#darkback{
	position: fixed;
	top: 0;
  left: 0;
  bottom: 0;
  right: 0;
	z-index: 10;
	background-color: black;
	width: 100%;
	height: 100%;
	opacity: 90%;
	display: none;
}

/*---------------------------------------- */
.plan__body {
	display: flex;

	margin-top: 40px;
}
.plan__card {
	background-color: #f2f2f2;

	padding: 30px;
	padding-bottom: 50px;
	margin-bottom: 3px;

	text-align: center;

	border-radius: 20px;

	flex: 33.333%;

	margin: 0 15px;
}
.plan__rate {
	font-size: 18px;
	line-height: 1.5;
}

.plan__price {
	font-size: 100px;
	letter-spacing: 8px;

	margin-bottom: 20px;
}

.plan__period {
	font-size: 22px;
	line-height: 1.5;
	letter-spacing: 4px;
	text-transform: uppercase;

	margin-bottom: 20px;
}

.plan__btn {
	font-size: 14px;
	line-height: 1.5;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 2px;

	border-radius: 4px;

	padding: 10px 25px;

	cursor: pointer;
}



.plan__btn-01 {
	background-color: #0278ed;
}

.plan__btn-02 {
	background-color: #ff5437;
}

.plan__btn-03 {
	background-color: #ff9209;
}

.plan__rate-01,
.plan__price-01,
.plan__period-01 {
	color: #0278ed;
}
.plan__rate-02,
.plan__price-02,
.plan__period-02 {
	color: #ff5437;
}

.plan__rate-03,
.plan__price-03,
.plan__period-03 {
	color: #ff9209;
}


.plan__btn:hover{
	transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.plan__btn:active{
	transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

</style>
