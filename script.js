new Vue({
	el:"#app",
	data : {
		scr_pl : 100,
		scr_mnstr : 100,
		logs : [],
		en_cours : false
	},
	methods:{
		startAttack: function(step){
			pl_step = parseInt(Math.random()*step);
			mnstr_step = parseInt(Math.random()*step);
			if((this.scr_pl < pl_step) | (this.scr_mnstr<mnstr_step)){
				source = this.scr_pl < this.scr_mnstr ? "monster":"player";
				this.logs.push({"source": source, "message":source.toUpperCase()+" WON"});
				return;
			}
			this.scr_pl -= pl_step;
			this.scr_mnstr -= mnstr_step;
			this.logs.push({
				"source":"player",
				"message":"PLAYER HITS MONSTER "+ pl_step
			});
			this.logs.push({
				"source":"monster",
				"message":"MONSTER HITS PLAYER "+mnstr_step
			});
		},
		attack: function(){
			this.startAttack(10);
		},
		specialAttack: function(){
			this.startAttack(20);
		},
		heal: function(){
			this.scr_pl -= parseInt(Math.random()*10);
			if(this.scr_pl>90){
				this.scr_pl = 100;
				return;
			}
			this.scr_pl += 10;
		},
		giveUp: function(){
			this.scr_pl = 100;
			this.scr_mnstr = 100;
			this.en_cours = false;
			this.logs = [];
		},
		start: function(){
			this.en_cours = true;
		}
	}
})