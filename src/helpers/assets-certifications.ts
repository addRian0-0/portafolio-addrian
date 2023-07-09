export const arrayImages: Images[] = [
    { 
        nombre: "REST API (Intermediate)", 
        description: "La certificación de la API RESTful de HackerRank es un examen en línea que evalúa conocimientos y habilidades en el desarrollo de API RESTful. Incluye preguntas de opción múltiple, preguntas prácticas y desafíos de codificación para evaluar tu comprensión y experiencia práctica en la construcción de API RESTful efectivas y seguras.", 
        emisora: "HackerRank", 
        fechaExpedicion: "Septiembre - 2022", 
        id: "e1bcbde0c5f0", 
        url: "https://www.hackerrank.com/certificates/e1bcbde0c5f0", 
        src: "/rest-api.png", 
    },
    { 
        nombre: "JavaScript(Basic)", 
        description: "La certificación de JavaScript básico de HackerRank consiste en un examen en línea que abarca una variedad de temas, incluyendo variables, tipos de datos, operadores, estructuras de control, funciones, manipulación de arreglos y objetos, manejo de errores y conceptos básicos de programación.", 
        emisora: "HackerRank", 
        fechaExpedicion: "Septiembre - 2022", 
        id: "37fa38fc3576", 
        url: "https://www.hackerrank.com/certificates/37fa38fc3576", 
        src: "/js-basic.png"
    },
    { 
        nombre: "Formación Desarrollo Personal G5 - ONE", 
        description: "Esta certificación se centra en el desarrollo de habilidades blandas o soft skills, que son competencias necesarias en el entorno profesional actual. A través de los cursos, aprenderás herramientas para mejorar tu enfoque, establecer hábitos efectivos y organizar tu tiempo. También se enfoca en el desarrollo personal para establecer un mindset de alto rendimiento, mejorar la comunicación, las relaciones interpersonales y aprender a ofrecer y recibir feedback de manera efectiva. Al completar esta certificación, habrás adquirido habilidades clave para enfrentar los desafíos del mercado laboral actual. Esta certificación forma parte del Programa ONE, una colaboración entre Alura Latam y Oracle.", 
        emisora: "Alura Latam", 
        fechaExpedicion: "Abril - 2023", 
        id: "5c7afe29-0bb6-42ae-88a5-edd46ff20178", 
        url: "https://app.aluracursos.com/degree/certificate/5c7afe29-0bb6-42ae-88a5-edd46ff20178", 
        src: "/desarrollo-personal-g5.png", 
    },
    { 
        nombre: "Formación Principiante en Programación G5 - ONE", 
        description: "Esta certificación de Principiante en Programación está diseñada para aquellos que no tienen conocimientos previos en programación y desean ingresar al campo del desarrollo y la tecnología. La formación comienza con la enseñanza de la Lógica de Programación, que es fundamental en cualquier carrera o profesión relacionada con la tecnología. Esta certificación es especialmente útil para aquellos que trabajan en áreas como ciencia de datos, marketing digital, experiencia de usuario (UX), diseño, entre otras, ya que les proporcionará una mejor comprensión del funcionamiento de los desarrolladores. Forma parte del Programa ONE, una colaboración entre Alura Latam y Oracle.", 
        emisora: "Alura Latam", 
        fechaExpedicion: "Mayo - 20223", 
        id: "807efb9b-9cb1-47cc-be74-e78747f67509", 
        url: "https://app.aluracursos.com/degree/certificate/807efb9b-9cb1-47cc-be74-e78747f67509", 
        src: "/principiante-programacion-alura.png", 
    },
    {
        nombre: "Formación Java Orientado a Objetos G5 - ONE",
        description: "La certificación 'Java Orientado a Objetos' de Alura es una guía completa de aprendizaje diseñada para aquellos que desean iniciar una carrera en programación Java. A través de esta certificación, aprenderás desde los fundamentos del lenguaje hasta las mejores prácticas y conocimientos esenciales para el desarrollo orientado a objetos. La certificación forma parte del Programa ONE, una alianza entre Alura Latam y Oracle. Es ideal para aquellos interesados en aprovechar las oportunidades laborales en el campo de desarrollo backend y en aplicaciones web, móviles y de Internet de las cosas (IoT).",
        emisora: "Alura Latam",
        fechaExpedicion: "Julio - 2023",
        id: "4380d4b4-1a30-4ec9-8c9e-fcc19929c356",
        url: "https://app.aluracursos.com/degree/certificate/4380d4b4-1a30-4ec9-8c9e-fcc19929c356",
        src: "/java-poo.png",
    }
]

export interface Images {
    nombre: string;
    description: string;
    emisora: string;
    fechaExpedicion: string;
    id: string;
    url: string;
    src: string;
}