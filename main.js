
			const button = document.querySelector('#btn');
			const body=document.querySelector('body');
			const value=document.querySelector('#hexvalue');
			const hexvalues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
			
			function background(){
				
				let hex='#';
				for(let i=0;i<6;i++)
				{
					const index=parseInt(Math.random()*hexvalues.length)
					
					hex+=hexvalues[index]
				}
					value.textContent = hex;
					body.style.backgroundColor=hex;
				}
				button.addEventListener('click',background)
	
		
				
              
	
			

			
				