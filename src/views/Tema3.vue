<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .bloque-fondo1  
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 3
        h1 <i>Big data</i> - Más allá de los datos masivos
      .row.justify-content-center.align-items-start.mb-4 
        .col-lg-7.my-3  
          p(data-aos="fade-down") Al hablar de <i>Big data</i> se hace referencia a conjuntos de datos o combinaciones de conjuntos de datos, en los cuales su tamaño o volumen, su complejidad, velocidad de crecimiento y cambio o variabilidad, hace difícil técnicamente su captura, gestión, procesamiento o análisis mediante tecnologías y herramientas convencionales o tradicionales como las bases de datos o los paquetes estadísticos, obstaculizando la obtención de la información oportuna y en los parámetros requeridos por la organización. 
          .bg4.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Además de un proceso, es una tecnología de amplio alcance, que pasó a superar a la minería de datos en cuanto a capacidad para la gestión y almacenamiento de datos. Surge como una evolución tecnológica para la gestión de datos masivos de alta complejidad, teniendo la capacidad en materia de <i>software</i> para capturar, organizar, procesar, evaluar y emitir conclusiones de forma veraz todo tipo de datos bajo patrones de análisis dimensionados por especialistas.         
        .col-lg-5.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')

      p(data-aos="fade-down").mb-5 La robustez de los sistemas de información bajo <i>Big data</i>, maneja métricas basadas en algoritmos generados por desarrolladores informáticos. Se almacenan datos en “nubes”, y pueden distribuirse los datos en forma real entre unidades organizativas empresariales por la red.  Por tanto, es fundamental como herramienta de la inteligencia de negocios, aportando a la productividad y calidad de todo tipo de gestión, recordando que el sistema empresarial se dinamiza a través de los datos.

    .row.justify-content-center.align-items-start.mt-5
      .col-lg-10
        .bg4.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Por tanto, la <i>Big data</i> y la minería de datos confluyen en ser técnicas de gestión de datos, pero cuando la minería de datos, bajo el concepto de los desarrolladores de datos pierde el alcance, debe recurrirse a los modelos de <i>Big data</i>, lo cual amerita la adquisición o tercerización de la gestión de la información empresarial.                    

      p(data-aos="fade-down").my-5 Las características más importantes del <i>Big data</i> se pueden clasificar en siete magnitudes, más conocidas como las siete V del <i>Big data</i>, las cuales son (Instituto de Ingeniería del Conocimiento, s.f.): 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/27.svg', alt='')

          .tarjeta.color-secundario.p-3(x="8.5%" y="98%" numero="+")
            h4.mb-4 Volumen de información
            p.mb-0 Se refiere a la cantidad de datos que son generados cada segundo, minuto y días en nuestro entorno. Es la característica más asociada al <i>Big data</i>, porque hace referencia a las cantidades masivas de datos que se almacenan con la finalidad de procesar dicha información, transformando los datos en acciones.  
          .tarjeta.color-secundario.p-3(x="24%" y="98%" numero="+")
            h4.mb-4 Velocidad de los datos
            p.mb-0 Se refiere a los datos en movimiento por las constantes interconexiones que realizamos, es decir, a la rapidez en la que son creados, almacenados y procesados en tiempo real.             
          .tarjeta.color-secundario.p-3(x="39.5%" y="98%" numero="+")
            h4.mb-4 Variedad de los datos
            p.mb-0 Se refiere a las formas, tipos y fuentes en las que se registran los datos. Estos datos pueden ser datos estructurados y fáciles de gestionar como son las bases de datos, o datos no estructurados, entre los que se incluyen documentos de texto, correos electrónicos, datos de sensores, audios, e infinidad de acciones más que realizamos desde nuestros teléfonos móviles, computadores o tabletas.  
          .tarjeta.color-secundario.p-3(x="55.5%" y="98%" numero="+")
            h4.mb-4 Veracidad de los datos
            p Es la incertidumbre de los datos, es decir, al grado de fiabilidad de la información recibida. 
            p.mb-0 Es necesario invertir tiempo para conseguir datos de calidad, aplicando soluciones y métodos que puedan eliminar datos imprevisibles que puedan surgir, como datos económicos, o comportamientos de los consumidores que puedan influir en las decisiones de compra.
  
          .tarjeta.color-secundario.p-3(x="72%" y="98%" numero="+")
            h4.mb-4 Viabilidad
            p.mb-0 La inteligencia empresarial es un componente fundamental para la viabilidad de un proyecto y el éxito empresarial. Se trata de la capacidad que tienen las compañías en generar un uso eficaz del gran volumen de datos que manejan.    
          .tarjeta.color-secundario.p-3(x="88%" y="98%" numero="+")
            h4.mb-4 Visualización de los datos
            p.mb-0 Es el modo en el que los datos son presentados. Una vez que los datos son procesados (los datos están en tablas y hojas de cálculo), necesitamos representarlos visualmente de manera que sean legibles y accesibles, para encontrar patrones y claves ocultas en el tema a investigar. Para que los datos sean comprendidos existen herramientas de visualización que te ayudarán a comprender los datos gráficamente y en perspectiva contextual.          
          .tarjeta.color-secundario.p-3(x="100%" y="98%" numero="+")
            h4.mb-4 Valor de los datos
            p.mb-0 El dato no es un valor. El valor se obtiene de datos que se transforman en información; esta a su vez se convierte en conocimiento, y este en acción o en decisión. El valor de los datos está en que sean accionables, es decir, que los responsables de las empresas puedan tomar una decisión (la mejor decisión) basándose en estos datos.     

      p(data-aos="fade-down") Uno de los objetivos del uso de las tecnologías <i>Big data</i> es el de transformar los datos en conocimiento útil para la empresa, y para ello se necesitan herramientas que nos ayuden a analizar, procesar y almacenar todos los datos recogidos. Un gran número de entre las mejores herramientas usadas en <i>Big data</i> son <i>open source</i>, lo que da fe del éxito de este modelo de desarrollo, además de las alternativas de pago.
      p(data-aos="fade-down").mb-5 A continuación, se muestra una selección de herramientas <i>open source</i> que ofrecen soluciones para la explotación de <i>software</i> de <i>Big data</i> en todos sus procesos de almacenamiento, procesamiento y análisis, en la empresa.   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')

          .tarjeta.color-secundario.p-3(x="50%" y="8%" numero="+")
            h4.mb-4 Hadoop 
            p.mb-0 Esta herramienta se considera el <i>framework</i> estándar para el almacenamiento de grandes volúmenes de datos; se usa también para analizar y procesar. Utiliza modelos de programación simples para el almacenamiento y procesamiento, distribuido de grandes conjuntos de datos en <i>clusters</i>, dando redundancia para no perder nada y, al mismo tiempo, aprovechando muchos procesos a la vez.     
          .tarjeta.color-secundario.p-3(x="70%" y="25%" numero="+")
            h4.mb-4 MongoDB 
            p.mb-0 Es una base de datos orientada a documentos (guarda los datos en documentos, no en registros). Estos documentos son almacenados en BSON, que es una representación binaria de JSON. A pesar de que las bases de datos NoSQL no tienen una extensa variedad de uso, MongoDB tiene un ámbito de aplicación más amplio en diferentes tipos de proyectos: es especialmente útil en entornos que requieran escalabilidad.         
          .tarjeta.color-secundario.p-3(x="75%" y="57%" numero="+")
            h4.mb-4 Elasticsearch 
            p.mb-0 Es una potente herramienta para la búsqueda entre grandes cantidades de datos, especialmente cuando los datos son de tipo complejo. Permite indexar y analizar en tiempo real un gran volumen de datos y hacer consultas sobre ellos. Un ejemplo de uso son las consultas de texto completo; al estar los datos indexados, los resultados se obtienen de forma muy rápida. Se utiliza como herramienta para indexar datos dentro de soluciones de entorno digital.
          .tarjeta.color-secundario.p-3(x="61%" y="84%" numero="+")
            h4.mb-4 Apache Spark 
            p.mb-0 Es un motor de procesamiento de datos de código abierto realmente rápido. Se considera el primer <em>software open source</em> que hace la programación distribuida (muy en esencia, consiste en distribuir el trabajo entre un grupo de ordenadores, “cluster”, que trabajan como uno) realmente accesible a los científicos de datos.  
          .tarjeta.color-secundario.p-3(x="39%" y="84%" numero="+")
            h4.mb-4 Apache Storm 
            p Es un sistema de computación distribuida en tiempo real orientado a procesar flujos constantes de datos, por ejemplo, datos de sensores que se emiten con una alta frecuencia o datos que provengan de las redes sociales, donde a veces es importante saber qué se está compartiendo en este momento.
            p.mb-0 Apache Storm está siendo una revolución para procesar grandes cantidades de información en tiempo real, porque es capaz de procesar millones de mensajes por segundo. Un ejemplo es para procesar en tiempo real los comentarios de las redes sociales para su monitorización y análisis.   
          .tarjeta.color-secundario.p-3(x="25%" y="55%" numero="+")
            h4.mb-4 Lenguaje R 
            p.mb-0 Es un lenguaje de programación y entorno de <em>software</em> para cálculo estadístico y gráficos. El lenguaje R es de los más usados por los estadistas y otros profesionales interesados en la minería de datos, la investigación bioinformática y las matemáticas financieras.
    
          .tarjeta.color-secundario.p-3(x="30%" y="24%" numero="+")
            h4.mb-4 Python 
            p Es un lenguaje avanzado de programación con la ventaja de ser relativamente fácil de usar para usuarios que no estén familiarizados con la informática de manera profesional, pero que necesitan trabajar con análisis de datos. Es una herramienta para <i>Big data</i> muy eficiente, en parte debido a la gran comunidad existente, por lo que Python dispone de muchas librerías ya hechas por otros usuarios.
            p.mb-0 Sin embargo, tiene en su contra que no es un lenguaje muy rápido en su ejecución, por lo que suele ser empleado para tareas de integración o tareas donde no haya cálculos pesados. 

</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaC,
  },
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
