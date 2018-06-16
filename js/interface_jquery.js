var thermostat = new Thermostat();

$(document).ready(function(){

	$("#room_temp").text(Math.floor(Math.random()*10 + 18));



	$("#set_temp").text(thermostat.temperature());
	$("#power_saving").text("PS: "+thermostat.powersaving());

	$.fn.update = function(){
		$("#set_temp").text( thermostat.temperature() );
	};

	$.fn.decrease_temp = function(){

		try{
			thermostat.down(1);
			$.fn.update();
		}
		catch(err){
			alert(err);
		}
	};

	$.fn.increase_temp = function(){
		try{
		thermostat.up(1);
		$.fn.update();
		}
		catch(err){
			alert(err);
		}
		
	};

	$("#power_saving").click(function(){
		if (thermostat.powersaving()){ thermostat.powersavingoff()}
		else if (!thermostat.powersaving()){ thermostat.powersavingon()}
	
		$("#power_saving").text("PS: "+thermostat.powersaving());
		
	});

	$("#reset").click(function(){
		thermostat.reset();
		$.fn.update();
	});

	

});

