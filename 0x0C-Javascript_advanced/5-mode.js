function changeMode(size, weight, transform, background, color)
{
	return function ()
	{
	  document.body.style.fontSize = size;
	  document.body.style.fontWeight = weight;
	  document.body.style.textTransform = transform;
	  document.body.style.backgroundColor = background;
	  document.body.style.color = color;
	}
}

  function main ()
  {
	let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	let screemMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
	let p = document.createElement('p');

	p.innerHTML = 'Welcome Holberton!';
	document.body.appendChild(p);

	let a1 = document.createElement('button');
	b1.innerHTML = 'Spooky';
	b1.style.border = "1px solid black";
	document.body.appendChild(a1);
	let a2 = document.createElement('button');
	b2.innerHTML = 'Dark mode';
	document.body.appendChild(a2);
	let a3 = document.createElement('button');
	b3.innerHTML = 'Scream mode';
	document.body.appendChild(a3);
	b1.addEventListener ("click", function () {spooky();});

	b2.addEventListener ("click", function () {darkMode();});
	b3.addEventListener ("click", function () {screemMode();});
  }
	main();
