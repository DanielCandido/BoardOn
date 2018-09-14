window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to file url
          img.onload = imageIsLoaded; // optional onload event listener
      }
  });
});

function imageIsLoaded(e) { alert(e); }

$("#imagem").bind('mouseover',function(){
    
	   $(this).animate({height:"200px",width:"200px"});

});
$("#imagem").bind('mouseout',function(){
 
    $(this).animate({height:"76px",width:"75px"});
   
});