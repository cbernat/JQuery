$(document).ready(function(){
	$("#addElementForm").validate();
});

$(".dropdown-menu li a").click(function(){
	$("#fieldTypedd").removeClass("error");
	$(".errorType").remove();
	$("#fieldTypedd label").text($(this).text());
});

function resetForm(){
	
}

function addNewElement(fieldName, fieldType){
	var newElement;
	var label = $("<label></label>", {text:fieldName});
	switch(fieldType)
	{
		case "Text":
		  newElement = $("<input></input>", { id:fieldName, type:'text'});
		break;
		case "Boolean":
		break;
		case "Number":
		break;
		case "Email":
		break;
	}
	$("#formPreview").append(label).append(newElement);
	resetForm();
}

$("#addNewBtn").click(function(){
	if ($("#addElementForm").valid() && $("#fieldTypedd label").text().indexOf("Field Value") == -1)
	{
		//add new element to form
		addNewElement($("#fieldNameInput").val(),$("#fieldTypedd label").text());
	}
	else{
		$("#fieldTypedd").addClass("error");
		$(".errorType").remove();
		$("div.dropdown").parent().append($("<label class='errorType'>Select a type of field</label>"));
	}

});