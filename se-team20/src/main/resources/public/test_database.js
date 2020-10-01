var xhr = createRequest();
function connect(dataSource)
{
	if(xhr)
	{
		var requestbody = "test=";
		xhr.open("GET", dataSource, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function()
		{
			//alert(xhr.readyState);
			if (xhr.readyState == 4 && xhr.status == 200)
			{
				obj.innerHTML = xhr.responseText;
			}
		}
		xhr.send(requestbody);
	}
}