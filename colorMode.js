var darkMode = localStorage.getItem('colorMode') == 'dark';

function swapColorMode()
{
	if(darkMode)
	{
		localStorage.setItem('colorMode','light');
		darkMode = false;
		setText(darkMode);
		toggleColors();
	}
	else{
		localStorage.setItem('colorMode','dark');
		darkMode = true;
		setText(darkMode);
		toggleColors();
	}
}

function setText(darkMode)
{
	if(darkMode)
	{
		let button = document.getElementById('switchColors-text');
		button.innerHTML = "Dark";
	}
	else
	{
		let button = document.getElementById('switchColors-text');
		button.innerHTML = "Light";
	}
}

function closeSettings()
{
	let settingsElement = document.getElementById("settings");

	if(settingsElement != undefined)
	{
		settingsElement.classList.remove("answer-box-display");
	}
}

function toggleSettings()
{
	let settingsElement = document.getElementById("settings");

	if(settingsElement != undefined && !settingsElement.classList.contains("answer-box-display"))
	{
		settingsElement.classList.add("answer-box-display");
	}
	else if(settingsElement != undefined)
	{
		settingsElement.classList.remove("answer-box-display");
	}
}

function toggleColors()
{
	if(!darkMode)
	{
		let darkElements = document.getElementsByClassName("dark");
		let darkTextElements = document.getElementsByClassName("text-dark");
		let antiElements = document.getElementsByClassName("anti-dark");
		let antiTextElements = document.getElementsByClassName("text-anti-dark");
		let antiBorderElements = document.getElementsByClassName("anti-dark-border");

		for(let i = darkElements.length - 1; i>=0;i--)
		{
			darkElements.item(i).classList.add("light");
			darkElements.item(i).classList.remove("dark");
		}

		for(let i = antiElements.length - 1; i>=0;i--)
		{
			antiElements.item(i).classList.add("anti-light");
			antiElements.item(i).classList.remove("anti-dark");
		}

		for(let i = darkTextElements.length - 1; i>=0;i--)
		{
			darkTextElements.item(i).classList.add("text-light");
			darkTextElements.item(i).classList.remove("text-dark");
		}

		for(let i = antiTextElements.length - 1; i>=0;i--)
		{
			antiTextElements.item(i).classList.add("text-anti-light");
			antiTextElements.item(i).classList.remove("text-anti-dark");
		}

		for(let i = antiBorderElements.length - 1; i>=0;i--)
		{
			antiBorderElements.item(i).classList.add("anti-light-border");
			antiBorderElements.item(i).classList.remove("anti-dark-border");
		}
	}
	else
	{
		let lightElements = document.getElementsByClassName("light");
		let lightTextElements = document.getElementsByClassName("text-light");
		let antiElements = document.getElementsByClassName("anti-light");
		let antiTextElements = document.getElementsByClassName("text-anti-light");
		let antiBorderElements = document.getElementsByClassName("anti-light-border");

		for(let i = lightElements.length - 1; i>=0;i--)
		{
			lightElements.item(i).classList.add("dark");
			lightElements.item(i).classList.remove("light");
		}

		for(let i = antiElements.length - 1; i>=0;i--)
		{
			antiElements.item(i).classList.add("anti-dark");
			antiElements.item(i).classList.remove("anti-light");
		}

		for(let i = lightTextElements.length - 1; i>=0;i--)
		{
			lightTextElements.item(i).classList.add("text-dark");
			lightTextElements.item(i).classList.remove("text-light");
		}

		for(let i = antiTextElements.length - 1; i>=0;i--)
		{
			antiTextElements.item(i).classList.add("text-anti-dark");
			antiTextElements.item(i).classList.remove("text-anti-light");
		}

		for(let i = antiBorderElements.length - 1; i>=0;i--)
		{
			antiBorderElements.item(i).classList.add("anti-dark-border");
			antiBorderElements.item(i).classList.remove("anti-light-border");
		}
	}
}

function initalizeColors()
{
	setText(darkMode);
	toggleColors(darkMode);
}