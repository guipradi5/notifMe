

	function showmenu(a){
	if(a==1){
		$( "#places" ).animate({
			left: '0px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	if(a==0){
		$( "#places" ).animate({
			left: '-150px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	}
	
	function showses(a){
	if(a==1){
		$( "#session" ).animate({
			top: '90px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	if(a==0){
		$( "#session" ).animate({
			top: '-100px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	}	
	function showreg(a){
	if(a==1){
		$( "#register" ).animate({
			top: '90px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	if(a==0){
		$( "#register" ).animate({
			top: '-50px',
		  }, 500, function() {
			// Animation complete.
		  });
	}
	}

	

