let result = "";
let last = false;
window.onload = function() {
	result = document.getElementById('result'); //入力不可にする
};

function ac_click() {
	result.value = "0";
}

function num_click(value) {
	if (last) {
		result.value = "0";
		last = false;
	}
	if (result.value == "0" && value == "0") {
		result.value = "0";
	} else if (result.value == "0" && value == ".") {
		result.value = "0.";
	} else if (result.value == "0") {
		result.value = value;
	} else {
		result.value += value;
	}
}
//演算子
function operator_click(value) {
	if (last) {
		last = false;
	}
	if (last_operation()) {
		result.value = result.value.slice(0, -1) + value;
	} else {
		result.value += value;
	}
}
//イコール
function equal_click() {
	if (last_operation()) {
		result.value = result.value.slice(0, -1);
	}
	let number = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
	if (number == Infinity || Number.isNaN(number)) {
		result.value = "Error";
	} else {
		result.value = number;
		last = true;
	}
	
}

function last_operation() {
	return ["+", "-", "×", "÷"].includes(result.value.toString().slice(-1));
}