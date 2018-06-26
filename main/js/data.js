$(document).ready(function(){
	$.getJSON("data.json",function(data){
		var bio = '';
		$.each(data,function(key,value) {
			// body...
			bio +='<tr>';
			bio +='<td>'+value.n+'</td>';
			bio +='<td>'+value.name+'</td>';
			bio +='<td>'+value.college+'</td>';
			bio +='<td>'+value.email+'</td>';
			bio +='<td>'+value.status+'</td>';
			bio +='<tr>';
		});
		$('#table').append(bio);
	});
});