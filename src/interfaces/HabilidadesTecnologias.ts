export interface IHabilidades {
    title: string;
    sections: string[];
    tecnologias: Tecnologia[];
}

interface Tecnologia {
    nombre: string;
    link: string;
    section: string;
}