var thermostat = new Thermostat();

document.getElementById("room_temp").innerHTML = Math.floor(Math.random()*10 + 18);

update()

function reset(){
	thermostat.reset();
	update()
}

function increase_temp(){
	thermostat.up(1);
	update()
}


function decrease_temp(){
	thermostat.down(1);
	update()
}

function powersavetoggle(){
	if (thermostat.powersaving()){ thermostat.powersavingoff()}
	else if (!thermostat.powersaving()){ thermostat.powersavingon()}
	update()
}

function update(){
	document.getElementById("set_temp").innerHTML = thermostat.temperature();
	document.getElementById("power_saving").innerHTML = "powersave: "+thermostat.powersaving();
}