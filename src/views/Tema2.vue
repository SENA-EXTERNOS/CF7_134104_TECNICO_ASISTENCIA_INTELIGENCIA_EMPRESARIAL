<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .bloque-fondo1  
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 2
        h1 Minería de datos para datos masivos
      .row.justify-content-center.align-items-start.mb-4 
        .col-lg-7.my-3  
          p(data-aos="fade-down") Continuemos con la minería de datos o <i>Data Mining</i>, proceso en el cual la recolección y selección de los datos, de la mano del procesamiento computacional, es la clave de la calidad de la información, para dar paso a la evaluación y preparación de los datos puestos al servicio de los analistas de datos. Se amerita minería de datos en función del gran volumen de datos, que se encuentra tanto en el entorno como al interior de la organización, y la función es depurar los datos, hallar patrones de comportamiento, y generar correlaciones que permitan la interrelación, predicción y proyección de los datos para dar mayor fortaleza al uso de los datos en pro de la obtención de información de mayor calidad. Por ello, la minería de datos surge ante la presencia de datos complejos, no por la “dificultad” de su comprensión, sino por la cantidad, flujo constante, e interrelaciones crecientes en la medida que son más complejos los procesos empresariales. A mayor cantidad de información requerida para el desarrollo de los procesos, mayor la tendencia al uso de técnicas de manejo de datos masivo.
        .col-lg-5.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')  

      .row.justify-content-center.align-items-start.mb-4 
        .col-lg-5.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')        
        .col-lg-7.my-3  
          p(data-aos="fade-down") Dado que la minería de datos se fundamenta en exploración de datos bajo los fundamentos de la estadística y a través de técnicas computacionales, trabaja bajo modelos de algoritmos matemáticos que preparan los expertos en las ciencias de la computación, la matemática y los sistemas. Al hacer uso de las técnicas y herramientas de minería de datos, el analista de datos tiene como fin incrementar la eficiencia, efectividad y eficacia de los datos, optimizar los procesos, y mejorar las dinámicas de los elementos del sistema organizacional, reduciendo al máximo el uso de datos superfluos o innecesarios en la toma de decisiones. Los datos no estructurados por sí solos conforman el 90 % de los datos existentes, pero, más información no significa necesariamente mayor conocimiento. El conocimiento se basa en los datos exactos y oportunos para las necesidades requeridas.

      p(data-aos="fade-down").mb-5 Son elementos clave en la minería de datos, los siguientes términos tecnológicos:

      .row.justify-content-center.mb-5
        .col-lg-5.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/37.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 La estadística
              p.mb-0 Como ciencia que permite el procesamiento de las frecuencias, proporciones y correlaciones de datos para hallar las relaciones internas existentes, consistencia y validez matemática de los datos.

        .col-lg-5.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/38.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Las bases de datos
              p.mb-0 Como fuentes de los datos, tanto internas como externas al sistema empresarial.
      .row.justify-content-center.mb-5
        .col-lg-5.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/39.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 La inteligencia artificial
              p.mb-0 El manejo de los datos a profundidad, emulando los procesos analíticos humanos, a través de <i>software</i> y/o máquinas inteligentes.

        .col-lg-5.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/40.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 El aprendizaje automático
              p.mb-0 O <i>machine learning</i> por sus siglas en inglés (LM), correspondiente al diseño de algoritmos, a través de los cuales se puede comprender el comportamiento de los datos y hacer predicciones. 
    p(data-aos="fade-down").mb-5 En cuanto a los modelos de minería de datos existentes en el mercado tecnológico, se pueden mencionar los siguientes:
    .row.justify-content-center.align-items-start
      .col-lg-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')            
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Asociación")
            p En la minería de datos, es la técnica más utilizada por los analistas, porque lo que se busca con los datos masivos, es tener la mayor y mejor organización posible. Entonces, la asociación busca relación entre los datos, en la búsqueda de patrones de comportamiento, es decir, tendencias que permitan observar la dinámica de los datos y hacer predicciones. Puede ser útil en <i>marketing</i> para conocer los productos más comprados; en calidad, para conocer el conjunto de fallas más comunes en los procesos; en el análisis de proveedores, para conocer las zonas geográficas de mayor competitividad y crecimiento de la oferta, entre otros.   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Agrupación o<br>a <i>clustering</i>")
            p A diferencia de la asociación, esta técnica es de decisión del analista de datos, quien decide los grupos de datos, categorías, grupos o conjuntos que amerita crear para sus análisis en función de las necesidades de la empresa. Ya no se trata del origen propio de los datos, sino de la modalidad de análisis, variables y focos de interés empresarial.   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Clasificación<br>a inteligente")
            p Esta técnica es propia del aprendizaje automático. Los <i>software</i> poseen la capacidad de clasificar los elementos o variables en un conjunto de datos, en grupos o clases predefinidos, en función de su comportamiento interno. Para ello, se basa en algoritmos de programación lineal, estadísticas, árboles de decisión y redes neuronales artificiales en la minería de datos, entre otras técnicas que generan los ingenieros en sistemas o informáticos, o especialistas en matemática y computación.   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Predicción")
            p Es una de las bases clave de la minería de datos para la toma de decisiones, poder predecir el comportamiento y preparar los procesos empresariales para el cambio, en la búsqueda de competitividad. Se predice, mediante algoritmos a través de los <i>software</i>, la relación entre variables, rentabilidad, volúmenes de ventas, cambios en las variables económicas del entorno, capacidades de producción, factibilidad de proyectos de inversión, entre otras.    
          .tarjeta.color-acento-botones--borde.p-4(titulo="Patrones<br> secuenciales")
            p Este modelo es básico para identificar tendencias constantes en el comportamiento de los datos, es decir, comportamientos predecibles. Esta técnica sirve de alerta cuando se presentan cambios, y permite a los analistas tomar decisiones oportunas. Se utiliza en gran medida para el mercadeo, en el establecimiento de patrones de compras, frecuencias de compra, y preparación de ofertas comerciales.                 

    .row.justify-content-center.align-items-start
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/22.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Sistematización teórica de minería de datos en el área de <i>marketing</i>
                  p.mb-0 Para ampliar la información, lo invitamos a leer en el material complementario, del documento Sistematización teórica de minería de datos en el área de <i>marketing</i>.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="http://dspace.espoch.edu.ec/bitstream/123456789/13757/1/mkt_n14_09.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download    
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/22.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Análisis de la minería de datos aplicada en empresas del sector <i>retail</i>
                  p.mb-0 Para ampliar la información, lo invitamos a leer en el material complementario, del documento Análisis de la minería de datos aplicada en empresas del sector <i>retail</i>.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://repositorio.ucsp.edu.pe/bitstream/20.500.12590/16199/1/DONGO_POZO_ALD_MIN.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    p(data-aos="fade-down") Ahora, la recolección y selección de datos masivos, depende de las necesidades de información de la empresa, tomando en cuenta que se debe contar con los recursos disponibles en herramientas tecnológicas para tal fin, además de talento humano con las competencias necesarias para su uso. Por ello, la minería de datos forma parte de los objetivos, planes estratégicos y políticas de información de la empresa. 
    p(data-aos="fade-down").mb-5 En el proceso de recolección y selección de los datos, deben conocerse los tipos de datos que pueden ser minados (extraídos), los cuales son: 

    .row.justify-content-center.align-items-start
      .col-lg-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')            
      .col-lg-9
        LineaTiempoD.color-primario(data-aos="fade-left")
          p(numero="1" titulo="Los almacenados en bases de datos") Debe tenerse en cuenta que la minería de datos se hace a través de <i>software</i>, y estos hacen las exportaciones de datos en sistemas análogos, es decir, compatibles o con posibilidad de convertirlos. Este proceso se conoce como Gestión de Bases de Datos (DBMS), y el objetivo es almacenar datos relacionados entre sí. Se define una estructura de datos requerida, y se vela por el almacenamiento seguro y consistente de los datos.               
          p(numero="2" titulo="La <i>Data Warehouse</i>") Reconocida como “almacén de datos”, es una única ubicación de almacenamiento de datos que recopila datos de varias fuentes y luego los almacena en un <i>software</i> a partir de una estructura preestablecida. Este almacén de datos está en la base de datos de la empresa, y la finalidad es que en dicho almacenaje, los datos estén en permanente depuración, integración, carga y actualización.              
          p(numero="3" titulo="La data transaccional") Se almacenan registros específicos de transacciones entre partes o elementos, es decir, se trabaja sobre la relación de intercambio de dos variables: compras y ventas, ventas y devoluciones, preguntas y respuestas. Es muy útil en mercadeo. 

    .row.justify-content-center.align-items-start.my-5
      .col-lg-10
        .bg4.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La garantía de calidad en la recolección y selección de los datos, busca eliminar la anomalía o datos “inservibles” a los intereses del análisis. Por ello, en esta recolección y selección los factores clave son la limpieza, enriquecimiento, reducción y transformación de los datos de las bases de datos disponibles.

    p(data-aos="fade-down").mb-5 Ahora, el procesamiento computacional, es el trabajo realizado por las máquinas inteligentes, es decir, los <em>software</em>, donde se contemplan cinco pasos fundamentales, hasta llegar al conjunto de datos finales. La siguiente figura nos presenta esos pasos:

    .row.justify-content-center.align-items-start
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          p.mb-0 
            em Pasos para el procesamiento computacional de datos masivos
        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='') 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/25.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Luego de modelados los datos, los <i>software</i> arrojan la información producto de los datos procesados. El comportamiento de los datos se evalúa con técnicas estadísticas a través de indicadores o métricas, las cuales pueden ser establecidas por la empresa o generadas por los propios datos. 
                br
                br
                | La función del analista de datos es mostrar las conclusiones realizadas desde la minería de los datos, para que quienes tomen las decisiones, posean los insumos para sus procesos. Por ello, es fundamental el uso de sistemas de información especializados en las empresas.              
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
