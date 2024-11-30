const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "nombre": "ESPAÑOL",
                "id": "ES101",
                "creditos": 3,
                "orden": 0,
            },
            {
                "nombre": "MATEMATICAS",
                "id": "MT101",
                "creditos": 4,
                "orden": 1,
            },
            {
                "nombre": "INTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN",
                "id": 'IF112',
                "creditos": 3,
                "orden": 2,
            },
            {
                "nombre": "SOCIOLOGÍA",
                "id": 'SC101',
                "creditos": 3,
                "orden": 3
            },
            {
                "nombre": "FILOSOFÍA",
                "id": 'FI101',
                "creditos": 3,
                "orden": 4
            },
            {
                "nombre": "SEMINARIO DE INICIO",
                "id": 'ESVU1',
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
                "id": "ES201",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['ES101']
            },
            {
                "nombre": "PRE-CALCULO",
                "id": "MT201",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT101']
            },
            {
                "nombre": "FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN",
                "id": 'IF200',
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF112']
            },
            {
                "nombre": "HISTORIA DE HONDURAS",
                "id": 'HS101',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "EL HOMBRE FRENTE A LA VIDA",
                "id": 'CR201',
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI101']
            },
            {
                "nombre": "INGLÉS (PRINCIPANTE)",
                "id": 'IDIN1',
                "creditos": 6,
                "orden": 5,
            },
            {
                "nombre": "SEMINARIO DE PADRES",
                "id": 'ESPF1',
                "creditos": 0,
                "orden": 6,
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "nombre": "ESTADISTICA I",
                "id": "MT202",
                "creditos": 4,
                "orden": 0,
                "requisitos": ['MT101']
            },
            {
                "nombre": "CALCULO I",
                "id": "MT303",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT201']
            },
            {
                "nombre": "PROGRAMACIÓN ESTRUCTURADA I",
                "id": 'IF214',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF200']
            },
            {
                "nombre": "ESTRUCTURAS DISCRETAS",
                "id": 'IF213',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF200']
            },
            {
                "nombre": "INGLÉS (INTERMEDIO BAJO)",
                "id": 'IDIN2',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN1']
            },
            {
                "nombre": "DISEÑO GRÁFICO",
                "id": 'IF394',
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 4,
        "bloque": "IV",
        "asignaturas": [
            {
                "nombre": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
                "id": "AD302",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['MT202']
            },
            {
                "nombre": "CÁLCULO II",
                "id": "MT401",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT303']
            },
            {
                "nombre": "PROGRAMACIÓN ESTRUCTURADA II",
                "id": 'IF303',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF214']
            },
            {
                "nombre": "FÍSICA I",
                "id": 'FS201',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['MT101']
            },
            {
                "nombre": "ADMINISTRACIÓN",
                "id": 'AD101',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "INGLÉS (INTERMEDIO ALTO)",
                "id": 'IDIN3',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN2']
            },
            {
                "nombre": "LABORATORIO DE FÍSICA",
                "id": 'CNFS1',
                "creditos": 2,
                "orden": 6,
            },
        ]
    },
    {
        "id": 5,
        "bloque": "V",
        "asignaturas": [
            {
                "nombre": "BASE DE DATOS I",
                "id": "IF322",
                "creditos": 3,
                "orden": 0,
            },
            {
                "nombre": "CONTABILIDAD",
                "id": "CT201",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "PROGRAMACIÓN EN ENTORNOS DE DESARROLLO VISUAL",
                "id": 'IF325',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF303']
            },
            {
                "nombre": "PRINCIPIOS DE ELECTRÓNICA",
                "id": 'IF319',
                "creditos": 2,
                "orden": 3,
                "requisitos": ['FS201']
            },
            {
                "nombre": "MATEMATICA FINANCIERA",
                "id": 'MT204',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "INGLÉS AVANZADO",
                "id": 'IDIN4',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN3']
            },
        ]
    },
    {
        "id": 6,
        "bloque": "VI",
        "asignaturas": [
            {
                "nombre": "BASE DE DATOS II",
                "id": "IF327",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF322']
            },
            {
                "nombre": "ÉTICA PROFESIONAL",
                "id": 'FI501',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "ANÁLISIS Y DISEÑO DE SISTEMAS",
                "id": "IF212",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "REDES I",
                "id": 'IF323',
                "creditos": 4,
                "orden": 2,
            },
            {
                "nombre": "CIRCUITOS LOGICOS",
                "id": 'IF324',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF319']
            },
            {
                "nombre": "INGLÉS (VOCABULARIO Y LECTURA TÉCNICA)",
                "id": 'IDIN5',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN4']
            },
            {
                "nombre": "SEMINARIO DE MADUREZ EN LA VIDA UNIVERSITARIA",
                "id": 'ESVU2',
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
                "id": "IF342",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF327']
            },
            {
                "nombre": "PROGRAMACIÓN MULTIPLATAFORMA",
                "id": "IF340",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "DESARROLLO DE SOFTWARE",
                "id": 'IF314',
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF212']
            },
            {
                "nombre": "REDES II",
                "id": 'IF328',
                "creditos": 4,
                "orden": 3,
                "requisitos": ['IF323']
            },
            {
                "nombre": "SISTEMAS AUTOMATIZADOS",
                "id": 'IF239',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "INGLÉS (COMPOSICIÓN Y CONVERSACIÓN)",
                "id": 'IDIN6',
                "creditos": 6,
                "orden": 5,
                "requisitos": ['IDIN5']
            },
        ]
    },
    {
        "id": 8,
        "bloque": "VIII",
        "asignaturas": [
            {
                "nombre": "SISTEMAS INTELIGENTES PARA NEGOCIOS",
                "id": "IF391",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF342']
            },
            {
                "nombre": "IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE",
                "id": 'IF346',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF314']
            },
            {
                "nombre": "SISTEMAS OPERATIVOS I",
                "id": 'IF345',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "MICROCONTROLADORES",
                "id": 'IF370',
                "creditos": 3,
                "orden": 4,
            },
            {
                "nombre": "ECOLOGÍA",
                "id": "BG205",
                "creditos": 3,
                "orden": 1,
            },
        ]
    },
    {
        "id": 9,
        "bloque": "IX",
        "asignaturas": [
            {
                "nombre": "DESAROLLO DE PORTALES WEB I",
                "id": "IF353",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF340']
            },
            {
                "nombre": "PROGRAMACIÓN MÓVIL I",
                "id": "IF351",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "GESTIÓN DE LA CALIDAD",
                "id": 'AD104',
                "creditos": 3,
                "orden": 2,
            },
            {
                "nombre": "SISTEMAS OPERATIVOS II",
                "id": 'IF352',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF345']
            },
            {
                "nombre": "SEMINARIO DE HARDWARE Y ELECTRICIDAD",
                "id": 'IF381',
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
                "id": "IF357",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF353']
            },
            {
                "nombre": "PROGRAMACIÓN MÓVIL II",
                "id": "IF355",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF351']
            },
            {
                "nombre": "CONTROL ESTADISTICO DE LA CALIDAD",
                "id": 'MT304',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['AD104']
            },
            {
                "nombre": "GESTIÓN Y ESTANDARES DE TECNOLOGÍAS DE INFORMACIÓN",
                "id": 'IF356',
                "creditos": 3,
                "orden": 3,
            },
            {
                "nombre": "DOCTRINA SOCIAL DE LA IGLESIA",
                "id": 'CR501',
                "creditos": 0,
                "orden": 4,
                "requisitos": ['FI501']
            },
            {
                "nombre": "SEMINARIO DE PREPARACIÓN A LA VIDA PROFESIONAL",
                "id": 'ESVU3',
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
                "id": "IF362",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF357']
            },
            {
                "nombre": "PROGRAMACIÓN DE NEGOCIOS",
                "id": "IF347",
                "creditos": 3,
                "orden": 1,
            },
            {
                "nombre": "PLANEACIÓN Y DISEÑO DE UN MODELO DE CALIDAD",
                "id": 'AD402',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['MT304']
            },
            {
                "nombre": "SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGOS",
                "id": 'IF360',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF356']
            },
            {
                "nombre": "ADMINISTRACIÓN DE CENTROS DE COMPUTO",
                "id": 'IF358',
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF356']
            },
            {
                "nombre": "TRABAJO EDUCATIVO SOCIAL",
                "id": 'FMTS1',
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
                "id": "IF361",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF362']
            },
            {
                "nombre": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "id": "IF392",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF347']
            },
            {
                "nombre": "BIG DATA",
                "id": 'IF350',
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF391']
            },
            {
                "nombre": "AUDITORÍA DE SISTEMAS DE INFORMACIÓN",
                "id": 'IF380',
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF360']
            },
            {
                "nombre": "EXCEL AVANZADO",
                "id": 'IF393',
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 13,
        "bloque": "XIII",
        "asignaturas": [
            {
                "nombre": "PRÁCTICA PROFESIONAL SUPERVISADA",
                "id": "IF400",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },
    {
        "id": 14,
        "bloque": "ELECTIVAS APROBADAS",
        "asignaturas": [
            {
                "nombre": "INVESTIGACIÓN TECNOLÓGICA",
                "id": "IF395",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },
    {
        "id": 15,
        "bloque": "RQT.",
        "asignaturas": [
            {
                "nombre": "20%",
                "id": "20",
                "creditos": 0,
                "orden": 0,
            },
            {
                "nombre": "30%",
                "id": "30",
                "creditos": 0,
                "orden": 1,
            },
            {
                "nombre": "40%",
                "id": "40",
                "creditos": 0,
                "orden": 2,
            },
            {
                "nombre": "50%",
                "id": "50",
                "creditos": 0,
                "orden": 3,
            },
            {
                "nombre": "60%",
                "id": "60",
                "creditos": 0,
                "orden": 4,
            },
            {
                "nombre": "70%",
                "id": "70",
                "creditos": 0,
                "orden": 5,
            },
            {
                "nombre": "80%",
                "id": "80",
                "creditos": 0,
                "orden": 6,
            },
        ]
    },
    {
        "id": 16,
        "bloque": "CPG.",
        "asignaturas": [
            {
                "nombre": "COPROGRAMATICA I",
                "id": "CPG1",
                "creditos": 0,
                "orden": 0,
            },
            {
                "nombre": "COPROGRAMATICA II",
                "id": "CPG2",
                "creditos": 0,
                "orden": 0,
            },
            {
                "nombre": "COPROGRAMATICA III",
                "id": "CPG3",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },
];

class PlanDeEstudio{
    planDeEstudio=[];
    container = null;
    asignaturas = {};
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

        asignaturaUI.addEventListener('mouseenter', (e)=>{
            asignaturaUI.classList.add('selected');
            const requisitos = JSON.parse(asignaturaUI.dataset.requisitos || '[]');
            const apertura = JSON.parse(asignaturaUI.dataset.apertura || '[]');
            requisitos.forEach((req)=>{
                this.asignaturas[req].classList.add("requisito");
            });
            apertura.forEach((apt)=>{
                this.asignaturas[apt].classList.add("apertura");
            });
        });
        asignaturaUI.addEventListener('mouseleave', (e)=>{
            asignaturaUI.classList.remove('selected');
            const requisitos = JSON.parse(asignaturaUI.dataset.requisitos || '[]');
            const apertura = JSON.parse(asignaturaUI.dataset.apertura || '[]');
            requisitos.forEach((req)=>{
                this.asignaturas[req].classList.remove("requisito");
            });
            apertura.forEach((apt)=>{
                this.asignaturas[apt].classList.remove("apertura");
            });
        });
        if(asignatura.requisitos){
            asignatura.requisitos.forEach((req)=>{
                if(this.asignaturas[req]){
                    /*
                    const apertura = JSON.parse(
                        this.asignaturas[req].getAttribute ('data-apertura')||'[]'
                    );
                    */
                    const apertura = JSON.parse(
                        this.asignaturas[req].dataset.apertura || '[]'
                    );
                    if( !apertura.includes(asignatura.id)){
                        apertura.push(asignatura.id);
                    }
                    this.asignaturas[req].setAttribute(
                        'data-apertura',
                        JSON.stringify(apertura)
                    );
                }
            });
        }

        this.asignaturas[asignatura.id] = asignaturaUI;
        return asignaturaUI;
    }
}