function start()
{
	document.getElementById('superficies').addEventListener('click',show)
	document.getElementById('curvaturas').addEventListener('click',show)
	document.getElementById('parciales').addEventListener('click',show)
	document.getElementById('gradientes').addEventListener('click',show)
	document.getElementById('polares').addEventListener('click',show)
	document.getElementById('triples').addEventListener('click',show)
	document.getElementById('esfericas').addEventListener('click',show)
	document.getElementById('masas').addEventListener('click',show)
	document.getElementById('campos').addEventListener('click',show)
	document.getElementById('home').addEventListener('click',show)
	
}
function show(who)
{
 	/*list=[33,31,29,44,39,40,49,27,18]*/
 	l=who.target.textContent.length;
 	tittle=who.target.textContent;
 	content=document.getElementById('content')
	if(l==33){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p><span style='font-size:18px;'>Superficies Cuádricas:</span><br><br>"+
		"Una superficie cuádrica <b>es la gráfica de una ecuación</b> de segundo"+
		" grado en tres variables: X,Y y Z; La ecuación más general es: <br>"+
		"<img class='formula' src='resources/1/ecug.png' ><br>"+
		"Donde A,B,C...J son constantes, aunque por trazlación y rotación se puede "+
		"llevar a una de las formas estándar: <br>"+
		"<img class='formula' src='resources/1/ecus.png' ><br></p>"+
		
		
		"<p><span style='font-size:18px;'>Cilindros:</span><br><br>"+
		"Un cilindro es una superficie que consiste de"+
		" <span style='color:#CA2A51;'><i>todas las lineas rectas (llamadas generatrices)</i></span> que son"+
		" <b>paralelas </b>a <span style='color:#FF9A00;'><i>una recta dada</i></span> y pasan por <span style='color:#5930AD; '><i>"+
		"una curva plana dada</i></span>.<br>"+
		"<img class='little' src='resources/1/xcuadrado.png'/>"+
		"<img class='little' src='resources/1/circulo.png'/></p>"+
		
		
		"<p><span style='font-size:18px;'>Trazas:</span><br><br>"+
		"Las trazas en los planos verticales X=K son las parábolas que abren hacia arriba"+
		",  las trazas en Y=K son las parábolas que abren hacia abajo y las trazas "+
		"horizontales son (y^2-X^2=K) una familia de hipérbolas:<br>"+
		"<img class='little' src='resources/1/trazax.png'/>"+
		"<img class='little' src='resources/1/trazax2.png'/>"+
		"<img class='little' src='resources/1/trazay.png'/>"+	
		"<img class='little' src='resources/1/trazay2.png'/>"+
		"<img class='little' src='resources/1/trazaz.png'/>"+
		"<img class='little' src='resources/1/trazaz2.png'/>"+
		"<img src='resources/1/silla.png'/></p>"+
		

		"<p><span style='font-size:18px;'>Principales superficies cuádricas</span><br><br>"+
		"<img src='resources/1/tabla.png'/>"+
		"<img class='little' src='resources/1/elipsoide2.png'/>"+
		"<img class='little' src='resources/1/paraboloideeliptico2.png'/>"+
		"<img class='little' src='resources/1/silla2.png'/>"+	
		"<img class='little' src='resources/1/cono2.png'/>"+
		"<img class='little' src='resources/1/hiperboloide1hoja2.png'/>"+
		"<img class='little' src='resources/1/hiperboloide2hojas2.png'/></p>";
		
		
		//
	 }
	else if(l==44){
		
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p><span style='font-size:18px;'>Funciones Vectoriales:</span><br><br>"+
	 	"En general una función es una regla que asigna a cada elemento del dominio, un"+
	 	" elemento del rango. Una <b>función con valores vectoriales </b>, es decir :"+
	 	"<br><br>Una función vectorial, <b>es simplemente una función cuyo dominio"+
	    " es el conjunto de los números reales y cuyos rango es un conjunto de vectores.</b>"+
	 	"El interés se centro más en funciones vectoriales r cuyos valores son "+
	 	"vectores tridimencionales.<br><img src='resources"+
	 	"/1/vectortrayectoria.png'/>"+
	 	"<br><span style='color:#EF008C;'>Esto significa que para cada número <i>t</i>"+
	 	" en el dominio <b>r</b></span> <span style='color:#00AEEF;'>hay un vector único en V3 que se denota con "+
	 	"<b>r(t)</b></span>. Si <i>f(t),g(t) y h(t)</i> son las componentes del vector <b>r(t)</b>"+
	 	", entoces <i>f,g y h</i> son funciones de valores reales llamadas<b>"+
	 	" funciones componentes </b>de <b>r</b> y podemos escribir:"+
	 	"<img  src='resources/1/funcioncomponente.png'/></p>"+
	 	
	 	"<p><span style='font-size:18px;'>Dominio:</span><br><br>"+
	 	"Conciste en la <b>INTRESECCION</b> de todos los dominios precentes <i>t</i>"+
	 	" en  cada componente <b>f(t),g(t),h(t) </b>de dicho vector <b>r(t)</b>"+
	 	"<img src='resources/1/dominio.png'/></p>"+
	 	
	 	"<p><span style='font-size:18px;'>Límite:</span><br><br>"+
	 	"El límite de una función vectorial r se define obteniendo los límites de sus "+
	 	"funciones componentes."+
	 	"<img  src='resources/1/limite.png'/>"+
	 	"Siempre que existan los límites de las funciones componentes</p>"+
	 	
	 	"<p> <span style='font-size:18px;'>Curvas en el Espacio</span><br><br>"+
		"Hay una estrecha relación entre funciones vectoriales continuas y curvas "+
		"en el espacio. Supongamos que f,g y h son funciones continuas de valores reales "+
		"sobre un intervalo I. Entonces el conjunto C de todos los puntos (x,y,z) en el "+
		"espacio, donde: X=f(t) Y=g(t) Z=h(t) y t varia en el intervalo I, se llama curva en "+
		"el espacio.</ p>"+
		
		"<p> <span style='font-size:18px;'>Ecuaciones Paramétricas</span><br><br>"+
		"Entoces las ecuaciones en C reciben el nombre de ecuaciones paramétricas "+
		"de todos los puntos (x,y,z) en el espacio, y t se llama parámetro.<br></p>"+
		
		
		"<p><span style='font-size:18px;'>Gráficas</span><br><br>"+
		"Las curvas en el espacio son inherentemente más difíciles de trazar a mano "+
		"que las curvas en el plano. Si queremos conseguir una representación exacta "+
		"necesitamos recurrir a los adelantos técnicos.<br>"+
		"Aun cuando se utiliza una computadora para trazar una curva en el espacio, "+
		"es difícil obtener la ilusión óptica que logra una buena impresión de cómo "+
		"se ve la curva en realidad:"+
		"<img  src='resources/1/coordenada.png'/>"+
		"Por tanto es mejor encerrar una curva o superficie en una caja en lugar "+
		"de mostrar los ejes coordenados; Cuando se ve la misma curva en una caja "+
		"se tiene mucho más clara la imagen de la curva:<br>"+
		"<img class='little' src='resources/1/caja1.png'/>"+
		"<img class='little' src='resources/1/caja2.png'/>"+
		"Otro método para representar es darse cuenta que se puede ver la curva "+
		"de intersección de los cilindros:"+
		"<img  src='resources/1/colision.png'/>"+
		"DEBIDO AL SOFTWARE QUE VAMOS A UTILIZAR DURANTE TODO EL "+
		"PROCESO, ESTE ÚLTIMO SERÁ EL MÉTODO AL CUAL DEBEMOS "+
		"FAMILIARIZARNOS PARA LA INTERPRETACIÓN DE FUTUROS TEMAS.</p>";
	}
	else if(l==29){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Hay una estrecha relación entre funciones vectoriales continuas y curvas "+
		"en el espacio. Supongamos que f,g y h son funciones continuas de valores reales "+
		"sobre un intervalo I. Entonces el conjunto C de todos los puntos (x,y,z) en el "+
		"espacio, donde: X=f(t) Y=g(t) Z=h(t) y t varia en el intervalo I, se llama curva en "+
		"el espacio.</ p>"+
		
		"<p> <span style='font-size:18px;'>Ecuaciones Paramétricas</span><br><br>"+
		"Entoces las ecuaciones en C reciben el nombre de ecuaciones paramétricas "+
		"de todos los puntos (x,y,z) en el espacio, y t se llama parámetro.</p>"
	}
	else if(l==42){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==39){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/integrales/d.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==40){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/integrales/t.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==49){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==27){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==18){
		content.innerHTML="<h1>"+tittle+"</h1><hr>"+
		"<p> <span style='font-size:18px;'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p>";
	}
	else if(l==11||l==10){
		content.innerHTML="<h1>Matemáticas III</h1><hr>"+
		"<p><span style='font-size:18px;'>Bienvenidos</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico"+
		" de la asignatura, le permitirá comprender y trabajar"+
		" de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/bk.jpg' ><i>f(x,y)=sen(x)·cos(y)</i>"+
		"<br><br>La anterior figura es una de muchas superficies"+
		" que podremos observar y construir, a través de los objetivos"+
		" planteados para la asignatura </p>";
	}
	
	
	
}
window.addEventListener('load',start);