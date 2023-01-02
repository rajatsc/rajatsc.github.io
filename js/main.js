$( document ).ready(function() {
    console.log( "ready!" );

    $(".list-inline-item").click(function () {
    	$(".list-inline-item").removeClass("active");
    	// $(".tab").addClass("active"); // instead of this do the below 
    	$(this).addClass("active");   
	});

    var $projects = $('.grid').isotope({
        itemSelector: '.grid-element',
        layoutMode: 'fitRows',
        percentPosition: true,
    });

    $('#project-filters').on('click', '.list-inline-item', function() {
    	var $filterButton = $(this);
    	var filterValue = $filterButton.attr('data-filter');
    	 	
    	$projects.isotope({ filter: filterValue });
    
    	
	});


    $('#vwatch-project').on('click', function(){
        window.location.href =  'https://vwatch0.herokuapp.com/'
    })


    $('#DeepC-project').on('click', function(){
        window.location.href =  'https://github.com/rajatsc/DeepC'
    })

    $('#racecar-project').on('click', function(){
        window.location.href =  'https://github.com/rajatsc/autonomous-rc-car'
    }) 

});
