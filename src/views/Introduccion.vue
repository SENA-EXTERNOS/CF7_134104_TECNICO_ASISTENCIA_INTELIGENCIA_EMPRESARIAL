<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-start.mb-4     
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')         
      .col-lg-7.my-3  
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde se mostrará un amplio compendio de información para la comprensión del procesamiento de datos y visualización de la información, con base en la tendencia de los datos masivos, dada la evolución tecnológica empresarial. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/xanH-w16hZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)              
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
