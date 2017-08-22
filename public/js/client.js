function updateRGBString(picker) { 
     document.getElementById('colorPicker').innerHTML = picker.toRGBString(); 
}

function DoThis(picker) {
    updateValues(picker); 
    updateInnerHTML(picker); 
    updateRGBString(picker); 
}
    
function updateInnerHTML(picker) { 
    document.getElementById('red').innerHTML=Math.round(picker.rgb[0]); 
    document.getElementById('green').innerHTML=Math.round(picker.rgb[1]); 
    document.getElementById('blue').innerHTML=Math.round(picker.rgb[2]); 
}

function updateValues(picker) { 
    document.getElementById('red').value=Math.round(picker.rgb[0]); 
    document.getElementById('green').value=Math.round(picker.rgb[1]); 
    document.getElementById('blue').value=Math.round(picker.rgb[2]); 
}

function updateAttributes(picker) { 
    document.getElementById('red').attribute=Math.round(picker.rgb[0]); 
    document.getElementById('green').attribute=Math.round(picker.rgb[1]); 
    document.getElementById('blue').attribute=Math.round(picker.rgb[2]); 
}
