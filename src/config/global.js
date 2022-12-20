export default {
  global: {
    componenteFormativo:
      'Procesamiento de datos y visualización de la información',
    descripcionCurso:
      'Este componente muestra los elementos necesarios para el procesamiento y visualización de la información basada en datos masivos. En el marco de la inteligencia de negocios, las empresas deben estar a la vanguardia para este tipo de procesamiento, modelando soluciones de negocio propicias para los procesos, de la mano de herramientas de visualización gráfica y presentación formal de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inteligencia de negocios (BI)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Minería de datos para datos masivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<i>Big data</i> - Más allá de los datos masivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Visualización de los datos masivos en la empresa e informes como herramienta de distribución de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Minería de datos para datos masivos',
      referencia:
        'Sarzosa, S., Freire, T., Medina, P. & López, G. (2019). Sistematización teórica de minería de datos en el área de marketing. <i>mktDescubre - ESPOCH FADE</i>, 14, p. 90-100.  ',
      tipo: 'PDF',
      link:
        'http://dspace.espoch.edu.ec/bitstream/123456789/13757/1/mkt_n14_09.pdf',
    },
    {
      tema: 'Minería de datos para datos masivos',
      referencia:
        'Dongo, A. y Silva, X. (2020). <i>Análisis de la minería de datos aplicada en empresas del sector retail</i> (Para optar el grado académico bachiller en ingeniería industrial, Universidad Católica San Pablo, Arequipa). Repositorio UCSP.',
      tipo: 'PDF',
      link:
        'https://repositorio.ucsp.edu.pe/bitstream/20.500.12590/16199/1/DONGO_POZO_ALD_MIN.pdf',
    },
    {
      tema: '<i>Big data</i> - Más allá de los datos masivos',
      referencia:
        'Universidad de Navarra. (2017). Big Data: <i>¿cómo lo usan los investigadores y las grandes empresas?</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ig9cwXaqR5M',
    },
    {
      tema: '<i>Big data</i> - Más allá de los datos masivos',
      referencia:
        'Lasso Cardona, L. A., Franco Ocampo, D. F., & Estrada-Esponda, R. D. (2022). Aplicaciones de la Datificación y Big Data en América Latina entre el 2015 y 2019. <i>Revista Logos Ciencia & Tecnología</i>, 14(2), p. 125-143. ',
      tipo: 'PDF',
      link:
        'http://www.scielo.org.co/pdf/logos/v14n2/2422-4200-logos-14-02-125.pdf',
    },
    {
      tema:
        'Visualización de los datos masivos en la empresa e informes como herramienta de distribución de datos',
      referencia:
        'Graph Everywhere. (s.f.). <i>Las 20 herramientas de visualización de datos Big</i> Data del momento. ',
      tipo: 'Página web',
      link:
        'https://www.grapheverywhere.com/las-20-herramientas-de-visualizacion-de-datos-big-data-del-momento',
    },
  ],
  glosario: [
    {
      termino: '<i>Big data</i>',
      significado:
        'corresponde a datos en volúmenes y estructuración, que forman parte de los procesos y decisiones de negocios estratégicos. Supera a los datos masivos en cuanto a cantidad, complejidad, captura, procesamiento, haciendo que la empresa adquiera o busque el apoyo en herramientas computacionales no convencionales. ',
    },
    {
      termino: 'Codificación de los datos',
      significado:
        'asignación de elementos distintivos a los datos para su mejor gestión, especialmente cuando se trata de datos masivos y datos en cantidad y pertenecientes a procesos distintos en el sistema empresarial. ',
    },
    {
      termino: 'Datos masivos',
      significado:
        'datos en cantidades y agrupamientos complejos que se ameritan para el desarrollo de los procesos de la empresa. Ameritan el uso de sistemas de información especializados y de personal conocedor del proceso de gestión de los datos. ',
    },
    {
      termino: 'Informes',
      significado:
        'herramienta digital o física que presenta y permite la distribución de la información luego del procesamiento de los datos. Los informes son de uso en los distintos procesos empresariales, espacialmente los gerenciales. ',
    },
    {
      termino: 'Inteligencia de Negocios (BI)',
      significado:
        'estrategia de competitividad empresarial basada en el uso de la información para el desarrollo de los procesos.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'proceso de extracción de datos masivos de bases de datos especializadas.',
    },
    {
      termino: 'Normalización para informes',
      significado:
        'elementos reglamentarios requeridos para la elaboración y presentación de informes de gestión organizacional o resultados de procesos. ',
    },
    {
      termino: 'Procesamiento de datos',
      significado:
        'conversión de datos en información, siendo la tendencia el uso de sistemas computacionales para la obtención, selección, agrupamiento, procesamiento y síntesis de la información.',
    },
    {
      termino: 'Procesos empresariales',
      significado:
        'todos los que conforman al sistema organizacional en sus distintos niveles: estratégico, táctico y operativo. De los procesos se generan datos, y se ameritan datos para su desarrollo.',
    },
    {
      termino: 'Visualización de la información',
      significado:
        'forma de presentar los datos y la información de manera gráfica para su mejor comprensión por parte tanto de los analistas como de los usuarios directos e indirectos de la información. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Normas APA actualizadas (7ª edición). (2022). <i>Normas APA 2022</i>.',
      link: 'https://normas-apa.org/etiqueta/normas-apa-2022/',
    },
    {
      referencia:
        'Berrio, D., Higuita, S., Echeverri, M., López, E. & Valencia, S. (2020). Responsabilidad Social Empresarial y certificación en calidad: una breve relación documental. <i>Revista de estudiantes de Contaduría Pública</i>, 24, p. 1-10.',
      link:
        'https://revistas.udea.edu.co/index.php/adversia/article/view/343084/20803194',
    },
    {
      referencia:
        'Cordero, E., Erazo, J., Narváez, C. y Cordero, D. (2020). Soluciones corporativas de inteligencia de negocios en las pequeñas y medianas empresas. <i>Revista Arbitrada Interdisciplinaria Koinonía, (5)</i>10, p. 483-514.',
      link: 'https://www.redalyc.org/journal/5768/576869215018/html/',
    },
    {
      referencia:
        'Instituto de Ingeniería del Conocimiento. (s.f.). Las 7 V del Big data: <i>Características más importantes</i>.',
      link:
        'https://www.iic.uam.es/innovacion/big-data-caracteristicas-mas-importantes-7-v/',
    },
    {
      referencia:
        'López, J. (2020). <i>La importancia y necesidad de las certificaciones en el proceso de innovación</i>. Revista Forbes.',
      link:
        'https://www.forbes.com.mx/la-importancia-y-necesidad-de-las-certificaciones-en-el-proceso-de-innovacion/',
    },
    {
      referencia: 'Normas Icontec. (2022). <i>Normas Icontec: Guía [2022]</i>.',
      link: 'https://normasicontec.co/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
