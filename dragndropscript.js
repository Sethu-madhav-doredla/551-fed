function drop(e)
{
	e.dataTransfer.setData('image',e.target.id);
}
function alllowdrop(e)
{
	e.preventdefault();
}
function drop(e)
{
	e.preventdefault();
	var data=e.dataTransfer.getData('image');
	e.target.appendChild(document.getelementById(data));
}