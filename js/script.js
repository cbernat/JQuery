var validator;
$(document).ready(function(){
	validator = $("#addElementForm").validate();
	$("#fieldNameInput").rules("add", "required");
});

$(".dropdown-menu li a").click(function(){
	$("#fieldTypedd").removeClass("error");
	$(".errorType").remove();
	$("#fieldTypedd label").text($(this).text());
});

function resetForm(){
	$("#fieldNameInput").rules("remove", "required");
	$("#fieldNameInput").val("");
	$("#fieldTypedd label").text("Field Value");
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
			var div = $("<div></div>");
			newElement = div.append($("<label>Yes</label>")).append($("<input></input>", { type:'radio', value:'Yes', name:fieldName})).append($("<label>No</label>")).append($("<input></input>", { type:'radio', value:'No', name:fieldName}));
		break;
		case "Number":
			newElement = $("<input></input>", {id:fieldName, type:"number"});
		break;
		case "Email":
		 newElement = $("<input></input>", {id:fieldName, type:'email'});
		break;
	}
	$("#elementsContainer").append(label).append(newElement).append($("<br/>"));
	resetForm();
}

$("#addNewBtn").click(function(){
	$("#fieldNameInput").rules("add", "required");
	if ($("#addElementForm").valid() && $("#fieldTypedd label").text().indexOf("Field Value") == -1)
	{
		//add new element to form
		addNewElement($("#fieldNameInput").val(),$("#fieldTypedd label").text());
		if ($("#elementsContainer").children().length > 0)
			$("#formPreview").show();
	}
	else{
		$("#fieldTypedd").addClass("error");
		$(".errorType").remove();
		$("div.dropdown").parent().append($("<label class='errorType'>Select a type of field</label>"));
	}


});