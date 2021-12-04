var container = document.querySelector('.container');

function AddElement(){
	var element = document.createElement("div");
    element.style.display = "flex";
    container.append(element);
	
	var input1 = document.createElement("input");
	input1.className = 'input1';
	element.append(input1);
	var input2 = document.createElement("input");
	input2.className = 'input2';
	element.append(input2);

	var buttonUp = document.createElement("button");
	buttonUp.innerHTML = "↑";
	element.append(buttonUp);
	buttonUp.onclick = Up;
	
	var buttonDown = document.createElement("button");
	buttonDown.innerHTML = "↓";
	element.append(buttonDown);
	buttonDown.onclick = Down;
	
	var buttonDelete = document.createElement("button");
	buttonDelete.innerHTML = "✕";
	element.append(buttonDelete);
	buttonDelete.onclick = Delete;
}

function Up(){
	container.insertBefore(this.parentNode, this.parentNode.previousSibling);
}

function Down(){
	container.insertBefore(this.parentNode.nextSibling, this.parentNode);
}

function Delete(){
	this.parentNode.remove();
}

function SaveElement(){
	var input1 = document.querySelectorAll('.input1');
	var input2 = document.querySelectorAll('.input2');

	var result = '';
	for (let i = 0; i < input1.length; i++)
	{
		result = result + `"${input1[i].value}":"${input2[i].value}"`;
		if (i+1 < input1.length)
		result = result + ',';
	}
	document.body.append(`{${result}}`);
} 