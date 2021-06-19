var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) 
{	
	coll[i].addEventListener("click", 
		function() 
		{
			for (var j = 0; j < coll.length; j++)
				if (coll[j] != this)
					coll[j].classList.remove("active");
		
			this.classList.toggle("active");
			
			for (var j = 0; j < coll.length; j++) 
			{
				var content = coll[j].nextElementSibling;
			
				if (coll[j].classList.contains("active"))				
					content.style.maxHeight = content.scrollHeight + "px";
				else
					content.style.maxHeight = null;
			}
		}
	);
}