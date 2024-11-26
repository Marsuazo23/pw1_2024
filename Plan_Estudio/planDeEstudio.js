const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "nombre": "ESPAÑOL",
                "id": "ES-101 (3) (3-0",
                "creditos": 3,
                "orden": 0,
            },
            {
                "nombre": "MATEMATICAS",
                "id": "MT-101 (4) (4-0",
                "creditos": 4,
                "orden": 1,
            },
            {
                "nombre": "iNTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN",
                "id": 'IF-112 (3) (2-1',
                "creditos": 3,
                "orden": 2,
            },
            {
                "nombre": "SOCIOLOGÍA",
                "id": 'SC-101 (3) (3-0',
                "creditos": 3,
                "orden": 3
            },
            {
                "nombre": "FILOSOFÍA",
                "id": 'FI-101 (3) (3-0',
                "creditos": 3,
                "orden": 4
            },
            {
                "nombre": "SEMINARIO DE INICIO",
                "id": 'ESVU 1',
                "creditos": 0,
                "orden": 5
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "nombre": "EXPRESIÓN ORAL Y ESCRITA",
                "id": "ES-201 (3) (3-0",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['ES-101 (3) (3-0']
            },
            {
                "nombre": "PRE-CALCULO",
                "id": "MT-201 (4) (4-0",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT-101 (4) (4-0']
            },
            {
                "nombre": "FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN",
                "id": 'IF-200 (4) (2-2',
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF-112 (3) (2-1']
            },
            {
                "nombre": "HISTORIA DE HONDURAS",
                "id": 'HS-101 (3) (3-0',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "EL HOMBRE FRENTE A LA VIDA",
                "id": 'CR-201 (3) (3-0',
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI-101 (3) (3-0']
            },
            {
                "nombre": "MODULO I - INGLÉS (PRINCIPANTE)",
                "id": 'IDIN 1 (6)',
                "creditos": 6,
                "orden": 5,
            },
            {
                "nombre": "SEMINARIO DE PADRES",
                "id": 'ESPF1',
                "creditos": 0,
                "orden": 6,
            },
            {
                "nombre": "COPROGRAMATICA",
                "id": 'CP 1',
                "creditos": 0,
                "orden": 7,
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "nombre": "ESTADISTICA I",
                "id": "MT-202 (4) (4-0",
                "creditos": 4,
                "orden": 0,
                "requisitos": ['MT-101 (4) (4-0']
            },
            {
                "nombre": "CALCULO I",
                "id": "MT-201 (4) (4-0",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT-201 (4) (4-0']
            },
            {
                "nombre": "PROGRAMACIÓN ESTRUCTURADA I",
                "id": 'IF-214 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF-200 (4) (2-2']
            },
            {
                "nombre": "ESTRUCTURAS DISCRETAS",
                "id": 'IF-213 (3) (2-1',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF-200 (4) (2-2']
            },
            {
                "nombre": "DISEÑO GRÁFICO",
                "id": 'IF-394 (3) (3-0',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "MODULO II - INGLÉS (INTERMEDIO BAJO)",
                "id": 'IDIN 2 (6)',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN 1 (6)']
            },
            {
                "nombre": "SEMINARIO DE PADRES",
                "id": 'ESP1',
                "creditos": 0,
                "orden": 6,
            },
            {
                "nombre": "COPROGRAMATICA II",
                "id": 'CP 2',
                "creditos": 0,
                "orden": 7,
            },
        ]
    },
    {
        "id": 4,
        "bloque": "IV",
        "asignaturas": [
            {
                "nombre": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
                "id": "AD-302 (3) (2-1",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['MT-202 (4) (4-0']
            },
            {
                "nombre": "CÁLCULO II",
                "id": "MT-401 (4) (4-0",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT-303 (4) (4-0']
            },
            {
                "nombre": "PROGRAMACIÓN ESTRUCTURADA II",
                "id": 'IF-214 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF-214 (3) (1-2)']
            },
            {
                "nombre": "FÍSICA I",
                "id": 'FS-201 (3) (2-1',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['MT-101 (4) (4-0']
            },
            {
                "nombre": "ADMINISTRACIÓN",
                "id": 'AD-101 (3) (3-0',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "MODULO III - INGLÉS (INTERMEDIO ALTO)",
                "id": 'IDIN 3 (6)',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN 2 (6)']
            },
            {
                "nombre": "LABORATORIO DE FÍSICA",
                "id": 'CNFS1 (2) (0-2',
                "creditos": 2,
                "orden": 6,
            },
            {
                "nombre": "COPROGRAMATICA II",
                "id": 'CP 3',
                "creditos": 0,
                "orden": 7,
            },
        ]
    },
    {
        "id": 5,
        "bloque": "V",
        "asignaturas": [
            {
                "nombre": "BASE DE DATOS I",
                "id": "IF-322 (3) (1-2",
                "creditos": 3,
                "orden": 0,
            },
            {
                "nombre": "CONTABILIDAD",
                "id": "CT-201 (3) (3-0",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "PROGRAMACIÓN EN ENTORNOS DE DESARROLLO VISUAL",
                "id": 'IF-325 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF-303 (3) (1-2)']
            },
            {
                "nombre": "PRINCIPIOS DE ELECTRÓNICA",
                "id": 'IF-319 (2) (1-2',
                "creditos": 2,
                "orden": 3,
                "requisitos": ['FS-201 (3) (2-1']
            },
            {
                "nombre": "MATEMATICA FINANCIERA",
                "id": 'MT-204 (3) (3-0',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "MODULO IV - INGLÉS AVANZADO",
                "id": 'IDIN 4 (6)',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN 3 (6)']
            },
        ]
    },
    {
        "id": 6,
        "bloque": "VI",
        "asignaturas": [
            {
                "nombre": "BASE DE DATOS II",
                "id": "IF-327 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-322 (3) (1-2']
            },
            {
                "nombre": "ANÁLISIS Y DISEÑO DE SISTEMAS",
                "id": "IF-212 (3) (1-2",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "REDES I",
                "id": 'IF-323 (4) (2-2',
                "creditos": 4,
                "orden": 2,
            },
            {
                "nombre": "CIRCUITOS LOGICOS",
                "id": 'IF-324 (3) (1-2',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF-319 (2) (1-2']
            },
            {
                "nombre": "ÉTICA PROFESIONAL",
                "id": 'FI-501 (3) (3-0',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "MODULO V - INGLÉS (VOCABULARIO Y LECTURA TÉCNICA)",
                "id": 'IDIN 5 (6)',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN 4 (6)']
            },
            {
                "nombre": "SEMINARIO DE MADUREZ EN LA VIDA UNIVERSITARIA",
                "id": 'ESVU 2',
                "creditos": 0,
                "orden": 6,
            },
        ]
    },
    {
        "id": 7,
        "bloque": "VII",
        "asignaturas": [
            {
                "nombre": "BASE DE DATOS MULTIDIMENSIONAL",
                "id": "IF-342 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-327 (3) (1-2']
            },
            {
                "nombre": "PROGRAMACIÓN MULTIPLATAFORMA",
                "id": "IF-340 (3) (1-2",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "DESARROLLO DE SOFTWARE",
                "id": 'IF-314 (4) (2-2',
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF-212 (3) (1-2']
            },
            {
                "nombre": "REDES II",
                "id": 'IF-328 (4) (2-2',
                "creditos": 4,
                "orden": 3,
                "requisitos": ['IF-323 (4) (2-2']
            },
            {
                "nombre": "SISTEMAS AUTOMATIZADOS",
                "id": 'IF-239 (3) (1-2',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "MODULO VI - INGLÉS (COMPOSICIÓN Y CONVERSACIÓN)",
                "id": 'IDIN 6 (6)',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN 5 (6)']
            },
        ]
    },
    {
        "id": 8,
        "bloque": "VIII",
        "asignaturas": [
            {
                "nombre": "SISTEMAS INTELIGENTES PARA NEGOCIOS",
                "id": "IF-391 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-327 (3) (1-2']
            },
            {
                "nombre": "ECOLOGÍA",
                "id": "BG-205 (3) (3-0",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE",
                "id": 'IF-346 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF-314 (4) (2-2']
            },
            {
                "nombre": "SISTEMAS OPERATIVOS I",
                "id": 'IF-345 (3) (1-2',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "MICROCONTROLADORES",
                "id": 'IF-370 (3) (1-2',
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 9,
        "bloque": "IX",
        "asignaturas": [
            {
                "nombre": "DESAROLLO DE PORTALES WEB I",
                "id": "IF-353 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-340 (3) (1-2']
            },
            {
                "nombre": "PROGRAMACIÓN MÓVIL I",
                "id": "IF-351 (3) (1-2",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "GESTIÓN DE LA CALIDAD",
                "id": 'AD-104 (3) (2-1',
                "creditos": 3,
                "orden": 2,
            },
            {
                "nombre": "SISTEMAS OPERATIVOS II",
                "id": 'IF-352 (3) (1-2',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF-345 (3) (1-2']
            },
            {
                "nombre": "SEMINARIO DE HARDWARE Y ELECTRICIDAD",
                "id": 'IF-381 (3) (1-2',
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 10,
        "bloque": "X",
        "asignaturas": [
            {
                "nombre": "DESAROLLO DE PORTALES WEB II",
                "id": "IF-357 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-353 (3) (1-2']
            },
            {
                "nombre": "PROGRAMACIÓN MÓVIL II",
                "id": "IF-355 (3) (1-2",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF-351 (3) (1-2']
            },
            {
                "nombre": "CONTROL ESTADISTICO DE LA CALIDAD",
                "id": 'MT-304 (3) (2-1',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['AD-104 (3) (2-1']
            },
            {
                "nombre": "GESTIÓN Y ESTANDARES DE TECNOLOGÍAS DE INFORMACIÓN",
                "id": 'IF-356 (3) (2-1',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "DOCTRINA SOCIAL DE LA IGLESIA",
                "id": 'CR-501 (3) (3-0',
                "creditos": 0,
                "orden": 4,
                "requisitos": ['FI-501 (3) (3-0']
            },
            {
                "nombre": "SEMINARIO DE PREPARACIÓN A LA VIDA PROFESIONAL",
                "id": 'ESVU 3',
                "creditos": 0,
                "orden": 5,
            },
        ]
    },
    {
        "id": 11,
        "bloque": "XI",
        "asignaturas": [
            {
                "nombre": "NEGOCIOS WEB",
                "id": "IF-362 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-357 (3) (1-2']
            },
            {
                "nombre": "PROGRAMACIÓN DE NEGOCIOS",
                "id": "IF-347 (3) (1-2",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "PLANEACIÓN Y DISEÑO DE UN MODELO DE CALIDAD",
                "id": 'AD-402 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['MT-304 (3) (2-1']
            },
            {
                "nombre": "SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGOS",
                "id": 'IF-360 (3) (1-2',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF-356 (3) (2-1']
            },
            {
                "nombre": "ADMINISTRACIÓN DE CENTROS DE COMPUTO",
                "id": 'IF-358 (3) (1-2',
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF-356 (3) (2-1']
            },
            {
                "nombre": "TRABAJO EDUCATIVO SOCIAL",
                "id": 'TES',
                "creditos": 0,
                "orden": 5,
            },
        ]
    },
    {
        "id": 12,
        "bloque": "XII",
        "asignaturas": [
            {
                "nombre": "SEMINARIO - TALLER DE SOFTWARE",
                "id": "IF-361 (3) (1-2",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF-362 (3) (1-2']
            },
            {
                "nombre": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "id": "IF-392 (3) (1-2",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF-347 (3) (1-2']
            },
            {
                "nombre": "BIG DATA",
                "id": 'IF-350 (3) (1-2',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF-391 (3) (1-2']
            },
            {
                "nombre": "AUDITORÍA DE SISTEMAS DE INFORMACIÓN",
                "id": 'IF-380 (3) (1-2',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF-360 (3) (1-2']
            },
            {
                "nombre": "EXCEL AVANZADO",
                "id": 'IF-393 (3) (1-2',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "TRABAJO EDUCATIVO SOCIAL",
                "id": 'TES',
                "creditos": 0,
                "orden": 5,
            },
        ]
    },
];

class PlanDeEstudio{
    planDeEstudio=[];
    container = null;
    constructor( planDeEstudio, containerSelector = "main"){
        if (!planDeEstudio) {
            throw new Error("Plan de Estudio es requerido.");
        }
        const tmpContainer = document.querySelector(containerSelector);
        if (!tmpContainer) {
            throw new Error("El contenedor no se encuentra");
        }
        this.planDeEstudio = planDeEstudio;
        this.container = tmpContainer;
        this.generateUI();
    }
    generateUI(){
        this.container.classList.add('plan');
        this.planDeEstudio.forEach( (bloque) => {
            this.container.appendChild(
                this.generateBloque(bloque)
            );
        } );

    }
    generateBloque(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        bloqueUI.setAttribute("id", `blq_${bloque.id}`);
        
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.innerHTML = bloque.bloque;
        bloqueUI.appendChild(bloqueLabel);

        const asignaturas = document.createElement("DIV");
        asignaturas.classList.add('asignaturas');
        bloque.asignaturas.forEach(
            (asignatura)=>{
                asignaturas.appendChild(this.generateAsignatura(asignatura));
            }
        );
        bloqueUI.appendChild(asignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add('asignatura');
        asignaturaUI.setAttribute('id', asignatura.id);
        if(asignatura.requisitos){
            asignaturaUI.setAttribute(
                'data-requisitos',
                JSON.stringify(asignatura.requisitos)
            );
        }
        asignaturaUI.innerHTML = `<strong>${asignatura.nombre}
            <br/>(${asignatura.id})
            </strong>
            <br/>
            Créditos: ${asignatura.creditos}`;
        return asignaturaUI;
    }
}

class PlanDeEstudio2{
    planDeEstudio2=[];
    container = null;
    constructor( planDeEstudio2, containerSelector = "main"){
        if (!planDeEstudio2) {
            throw new Error("Plan de Estudio es requerido.");
        }
        const tmpContainer = document.querySelector(containerSelector);
        if (!tmpContainer) {
            throw new Error("El contenedor no se encuentra");
        }
        this.planDeEstudio2 = planDeEstudio2;
        this.container = tmpContainer;
        this.generateUI();
    }
    generateUI(){
        this.container.classList.add('plan');
        this.planDeEstudio2.forEach( (bloque) => {
            this.container.appendChild(
                this.generateBloque(bloque)
            );
        } );

    }
    generateBloque(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        bloqueUI.setAttribute("id", `blq_${bloque.id}`);
        
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.innerHTML = bloque.bloque;
        bloqueUI.appendChild(bloqueLabel);

        const asignaturas = document.createElement("DIV");
        asignaturas.classList.add('asignaturas');
        bloque.asignaturas.forEach(
            (asignatura)=>{
                asignaturas.appendChild(this.generateAsignatura(asignatura));
            }
        );
        bloqueUI.appendChild(asignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add('asignatura');
        asignaturaUI.setAttribute('id', asignatura.id);
        if(asignatura.requisitos){
            asignaturaUI.setAttribute(
                'data-requisitos',
                JSON.stringify(asignatura.requisitos)
            );
        }
        asignaturaUI.innerHTML = `<strong>${asignatura.nombre}
            <br/>(${asignatura.id})
            </strong>
            <br/>
            Créditos: ${asignatura.creditos}`;
        return asignaturaUI;
    }
}
