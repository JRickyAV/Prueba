import { useState } from "react";
import calcularResultado from "../utils/calcularResultado";

const usePiedra = () => {
	const [decision,setDecision] = useState(0);
	const [resultado,setResultado] = useState('');
	const [decisionString,setDecisionString] = useState('aa')

	const {resultadoFinal,tenerDecision} = calcularResultado();

	function cambiarDecision(param){
		var desc = tenerDecision(param)
		setDecisionString(desc)
	}

	function calcularResultadoFinal(){
		var resultadoString = resultadoFinal(decision);
		setResultado(resultadoString);
	}

	return {decisionString,cambiarDecision,resultado,calcularResultadoFinal}
}

export default usePiedra; 