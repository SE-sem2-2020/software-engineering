var xhr = createRequest();
function connect(dataSource)
{
	if(xhr)
	{
		xhr.open("GET", dataSource);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function()
		{
			if (xhr.readyState == 4 && xhr.status == 200)
			{
				obj.innerHTML = xhr.responseText;
			}
		}
		xhr.send();
	}
}