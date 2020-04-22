/** @description Генерирует на главной странице превью адресной таблички из введённых данных
 */

/*
"fieldStreetType">

<!--
<p>&larr; Первый дом</p>
<input type="text" id="startNumber">

<p>&rarr;</p>
-->

<p>Название на английском</p>
<!--Наименование на английском-->
<input type="text" id="fieldStreetNameEnglish">

<p>Номер дома</p>
<input type="text" id="fieldHouseNumber">
*/

$(document).ready(function(){
    $("#buttonGenerateSign").click(function(){

        var streetName = $("#fieldStreetName").val();
        var streetType = $("#fieldStreetType").val();
        var houseNumber = $("#fieldHouseNumber").val();
        var streetNameEnglish = $("#fieldStreetNameEnglish").val();

        $("#signStreetName").text(streetName);
        $("#signStreetType").text(streetType);
        $("#signHouseNumber").text(houseNumber);
        $("#signStreetNameEnglish").text(streetNameEnglish);
    });

});

