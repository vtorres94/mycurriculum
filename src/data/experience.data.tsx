import React from 'react';
import logoCultura from '../assets/images/logocultura.png';
import logoCiesoft from '../assets/images/CIESOFT.png';
import imageCultura from '../assets/images/cultura.jpg';
import imageCiesoft from '../assets/images/ciesoft.jpg';

export const empleos = [
    {
        id: 1,
        title: 'Subdirector',
        company: `Instituto Villanovense de Cultura`,
        logo: logoCultura,
        slogan: '"Antonio Aguilar Barraza"',
        location: 'Villanueva, Zac',
        startDate: '2016',
        endDate: '2018',
        description: <span>
            Una gran experiencia trabajar en el sector público y más<br/>
            en el ámbito cultural, conocí un montón de personas interesantes,<br/>
            culturas locales que se creían perdidas y todo tipo de costumbres <br/>
            de nuestro México.
        </span>,
        image: imageCultura
    },
    {
        id: 2,
        title: 'Becario Desarrollador Full Stack',
        company: `Ciesoft - BlueHealth`,
        logo: logoCiesoft,
        slogan: 'Consultoría Integral Empresarial',
        location: 'Zacatecas, Zac',
        startDate: 'Octubre 2019',
        endDate: 'Julio 2020',
        description: <span>
            Desarrollo de aplicación web dirigido a la gestión<br/>
            de clínicas de misión crítica, con alta disponibilidad<br/>
            y con un nivel alto de implementación de reglas de<br/>
            negocio, este proyecto está basado en micro<br/>
            servicios usando una plataforma de desarrollo<br/>
            para aplicaciones web modernas llamada JHipster<br/>
            que utiliza Java, JPA, Spring Boot, Maven,<br/>
            Hibernate, Liquibase, Swagger entre otras en el<br/>
            backend y React, Typescript y Bootstrap en el<br/>
            frontend.
        </span>,
        image: imageCiesoft
    }
];

export const employes = [
    {
        id: 1,
        title: 'Subdirector',
        company: `Instituto Villanovense de Cultura`,
        logo: logoCultura,
        slogan: '"Antonio Aguilar Barraza"',
        location: 'Villanueva, Zac',
        startDate: '2016',
        endDate: '2018',
        description: <span>
            A great experience working in the public sector and more <br/>
            in the cultural field, I met a lot of interesting people, <br/>
            local cultures that believed they were lost and all kinds <br/>
            of cultural customs of our Mexico.
        </span>,
        image: imageCultura
    },
    {
        id: 2,
        title: 'Internship Full Stack Developer',
        company: `Ciesoft - BlueHealth`,
        logo: logoCiesoft,
        slogan: 'Comprehensive Business Consulting',
        location: 'Zacatecas, Zac',
        startDate: 'October 2019',
        endDate: 'July 2020',
        description: <span>
            Development of web application aimed at management<br/>
            mission critical clinics with a high availability<br/>
            and a high level of implementation of<br/>
            business rules, this project is based on micro<br/>
            services using a development platform<br/>
            for modern web applications called JHipster<br/>
            which uses Java, JPA, Spring Boot, Maven,<br/>
            Hibernate, Liquibase, Swagger among others in the<br/>
            backend and React, Typescript and Bootstrap in the<br/>
            frontend.
        </span>,
        image: imageCiesoft
    }
]