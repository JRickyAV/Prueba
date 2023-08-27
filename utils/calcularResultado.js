const calcularResultado = () => {

	function tenerDecision(param){
		if (param == 0){
			return('Piedra')
		}
		else if (param == 1){
			return('Papel')
		}
		else if (param == 2){
			return('Tijera')
		}
	}

	function resultadoFinal(decision){
		var numero = Math.floor(Math.random() * 3);
		if (decision == numero){
			return 'Empate';
		}
		else if (decision == 1 && numero == 0 || decision == 2 && numero == 1 || decision == 0 && numero == 2) {
			return 'Ganaste';
		}
		else{
			return 'Perdiste';
		}
	}
	return {resultadoFinal,tenerDecision}
}
export default calcularResultado;