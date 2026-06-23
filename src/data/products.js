export const productCategories = {
  plcs: {
    title: "Controladores Lógicos Programables (PLC)",
    description: "Equipos confiables de automatización industrial para optimizar procesos secuenciales y analógicos de cualquier escala.",
    introCommercial: "En CEITSA Electromecatrónica ofrecemos la gama completa de PLCs de Delta Electronics, reconocidos internacionalmente por su alta eficiencia, robustez y software de programación de licencia gratuita (ISPSoft/WPLSoft). Desde microaplicaciones compactas hasta grandes redes modulares con control de movimiento avanzado.",
    features: [
      { title: "Estructura Modular", desc: "Permite añadir módulos de I/O digitales, analógicos, temperatura y celdas de carga según tu necesidad." },
      { title: "Software Gratuito", desc: "Ahorra costos operativos programando con ISPSoft (conforme a IEC 61131-3) sin pagar licencias." },
      { title: "Control de Movimiento", desc: "Funciones avanzadas de posicionamiento de alta velocidad para servomotores y motores a pasos." },
      { title: "Garantía Industrial", desc: "Equipos diseñados para soportar entornos agresivos con inmunidad a ruidos eléctricos." }
    ],
    protocols: [
      { name: "Modbus RTU/ASCII", type: "Serial (RS-485)", desc: "Estándar integrado en todos los modelos para comunicación local básica." },
      { name: "Modbus TCP/IP", type: "Ethernet", desc: "Para alta velocidad y enlace directo con pantallas HMI, SCADAs y redes locales." },
      { name: "EtherNet/IP", type: "Ethernet Industrial", desc: "Integración nativa con equipos multi-marca y sensores inteligentes." },
      { name: "CANopen", type: "Bus de Campo", desc: "Comunicación dedicada y veloz para el control de drives y servos en movimiento." },
      { name: "OPC-UA", type: "IIoT/Nube", desc: "Integración directa de los PLCs hacia bases de datos y plataformas de analítica." }
    ],
    solutions: [
      "Líneas de empaque y llenadoras automáticas",
      "Sistemas de bombeo y tratamiento de agua",
      "Control de temperatura y humedad en hornos industriales",
      "Automatización de HVAC y ventilación industrial",
      "Integración de celdas robóticas y bandas transportadoras"
    ],
    items: [
      {
        id: "plc-dvp",
        title: "PLC Delta Serie DVP",
        subtitle: "Línea Compacta / Estándar",
        description: "El PLC compacto más vendido del mercado. Excelente relación costo-beneficio para proyectos pequeños y medianos.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/admin/tmpl-25010/1775755175154-sk02d0/public",
        features: [
          "Hasta 512 puntos de E/S con módulos de extensión",
          "Puertos RS-232 y RS-485 embebidos",
          "Modelos con Ethernet integrado (Serie SE)",
          "Salidas a transistor de alta velocidad (100kHz) para pulsos"
        ],
        applications: [
          "Máquinas tejedoras",
          "Bandas transportadoras",
          "Dosificadoras",
          "Sistemas de riego"
        ]
      },
      {
        id: "plc-as",
        title: "PLC Delta Serie AS",
        subtitle: "Gama Media / Alto Rendimiento",
        description: "Controlador modular diseñado para automatización de máquinas complejas con CPU de 32 bits de alta velocidad de procesamiento.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/admin/tmpl-41837/1775840754055-7neydf/public",
        features: [
          "Velocidad de ejecución de 40k pasos/ms",
          "Comunicaciones EtherNet/IP y Modbus integradas",
          "Soporta hasta 32 módulos de expansión sin rack adicional",
          "Ranura MicroSD para respaldo de programas y registro de datos"
        ],
        applications: [
          "Etiquetadoras rotativas",
          "Máquinas de moldeo",
          "Industria textil",
          "Empacadoras de alta velocidad"
        ]
      },
      {
        id: "plc-ah",
        title: "PLC Delta Serie AH",
        subtitle: "Gama Alta / Modular Avanzado",
        description: "Diseñado para sistemas de gran escala, automatización de plantas y procesos continuos complejos con redundancia.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43822/epdcei-delta-dvp-dop/primary/public",
        features: [
          "Hot-Swap: Cambia módulos sin apagar el controlador",
          "CPU con redundancia de hardware para evitar paros",
          "Distancia entre racks de hasta 100 metros por fibra óptica",
          "Soporta más de 100,000 puntos de E/S"
        ],
        applications: [
          "Plantas de tratamiento de agua",
          "Sistemas de cogeneración",
          "Sistemas de transporte masivo",
          "Control de hornos industriales"
        ]
      },
      {
        id: "starter-kits",
        title: "Starter Kits de Programación",
        subtitle: "Paquetes de Aprendizaje y Pruebas",
        description: "Paquetes todo incluido diseñados para estudiantes, ingenieros e integradores que desean iniciar rápido con PLCs y HMIs.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43822/epdcei-delta-dvp-dop/primary/public",
        features: [
          "Incluye PLC, HMI, Fuente de alimentación y cables",
          "Ejemplos prácticos y guías de programación incluidas",
          "Software de programación gratuito descargable",
          "Soporte técnico directo de CEITSA para arranque"
        ],
        applications: [
          "Laboratorios educativos",
          "Desarrollo de prototipos rápidos",
          "Pruebas de concepto de control"
        ]
      },
      {
        id: "modulos-expansion",
        title: "Módulos de Expansión DVP/AS",
        subtitle: "Conectividad y Adaptabilidad",
        description: "Amplía las capacidades de tu controlador agregando entradas/salidas digitales, analógicas, termopares o comunicación adicional.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/admin/tmpl-25011/1775758745650-vtznau/public",
        features: [
          "Módulos digitales de 8, 16 y 32 puntos (relé o transistor)",
          "Entradas y salidas analógicas de alta resolución (0-10V, 4-20mA)",
          "Módulos de temperatura para RTD (Pt100) y Termopares (J, K, T)",
          "Tarjetas de comunicación CANopen, DeviceNet y Profibus"
        ],
        applications: [
          "Monitoreo de sensores analógicos",
          "Control PID multizona de temperatura",
          "Adición de límites de carrera y solenoides"
        ]
      },
      {
        id: "fuentes-control",
        title: "Fuentes de Alimentación Delta DVP/CliQ",
        subtitle: "Energía Confiable a 24VCD",
        description: "Fuentes de poder industriales para riel DIN que aseguran un suministro estable de energía a PLCs, HMIs y sensores.",
        image: "https://img.ceitsa.com.mx/brand/delta/1774467254433-a62o6z/image.png",
        features: [
          "Salida regulada a 24 VCD (1A, 2A, 5A, 10A, 20A)",
          "Protección contra cortocircuito, sobrecarga y sobrevoltaje",
          "Montaje directo en riel DIN tipo industrial",
          "Carcasa metálica o plástica de alta eficiencia térmica"
        ],
        applications: [
          "Alimentación de tableros de control",
          "Energización de sensores y actuadores",
          "Respaldo de potencia en sistemas críticos"
        ]
      }
    ]
  },
  variadores: {
    title: "Variadores de Frecuencia / Velocidad",
    description: "Control preciso de velocidad, torque y posición de motores eléctricos trifásicos con un alto ahorro energético.",
    introCommercial: "En CEITSA Electromecatrónica suministramos variadores de velocidad de Delta Electronics. Ideales para el control inteligente de motores en aplicaciones industriales críticas. El uso de variadores disminuye el consumo eléctrico hasta en un 40% y extiende la vida útil de tus motores mecánicos.",
    features: [
      { title: "Ahorro Energético", desc: "Ajusta la velocidad del motor a la demanda real del proceso, reduciendo consumos picos." },
      { title: "Control de Torque", desc: "Control vectorial avanzado de lazo abierto y cerrado para arranques suaves con carga pesada." },
      { title: "Protección Integrada", desc: "Salvaguarda el motor contra sobrecorrientes, caídas de fase, sobrevoltaje y sobretemperatura." },
      { title: "Fácil Programación", desc: "Teclado intuitivo desmontable y software de configuración en PC mediante Modbus." }
    ],
    solutions: [
      "Control de caudal y presión en sistemas de bombeo",
      "Sincronización de velocidad en bandas transportadoras",
      "Extractor de aire y ventilación inteligente en naves industriales",
      "Control de grúas, elevadores y mezcladoras industriales",
      "Modernización de compresores y extrusoras de plástico"
    ],
    items: [
      {
        id: "var-el",
        title: "Variador Delta Serie VFD-EL",
        subtitle: "Variador Compacto Multifuncional",
        description: "Ideal para aplicaciones sencillas y de baja potencia. Cuenta con filtro EMI integrado y comunicación Modbus flexible.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public",
        features: [
          "Rango de potencia: 0.2 HP a 5 HP",
          "Control V/f y compensación automática de torque",
          "Teclado integrado con potenciómetro",
          "Compartición de bus DC de fácil conexión"
        ],
        applications: [
          "Bandas transportadoras pequeñas",
          "Ventiladores centrífugos",
          "Bombas de agua pequeñas",
          "Puertas automáticas"
        ]
      },
      {
        id: "var-el-w",
        title: "Variador Delta Serie VFD-EL-W",
        subtitle: "Línea Compacta Avanzada",
        description: "Evolución de la serie EL, optimizado para optimizar espacio en el tablero, control de velocidad confiable y diseño ultra delgado.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public",
        features: [
          "Diseño extra delgado para montaje lado a lado",
          "Funciones multi-bomba integradas",
          "Control PID incorporado de alta precisión",
          "Protección avanzada para sobrecargas del motor"
        ],
        applications: [
          "Sistemas de presión constante de agua",
          "Sopladores industriales",
          "Máquinas empacadoras",
          "Agitadores químicos"
        ]
      },
      {
        id: "var-ms300",
        title: "Variador Delta Serie MS300",
        subtitle: "Control Vectorial de Nueva Generación",
        description: "Variador micro-vectorial de alto rendimiento. Soporta control de motores IM (inducción) y PM (imanes permanentes) con PLC integrado de 2k pasos.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public",
        features: [
          "Soporta motores IM, PM y de alta velocidad (hasta 1500Hz)",
          "Función de seguridad STO (Safe Torque Off) SIL2 integrada",
          "Puerto USB integrado para configuración rápida sin encender",
          "Micro PLC de 2,000 pasos de programación integrado"
        ],
        applications: [
          "Husillos de alta velocidad en máquinas CNC",
          "Compresores industriales",
          "Herramientas mecánicas de precisión",
          "Industria de carpintería y aserraderos"
        ]
      },
      {
        id: "var-c2000",
        title: "Variador Delta Serie C2000",
        subtitle: "Control Vectorial Avanzado / Trabajo Pesado",
        description: "Drives de alta gama para aplicaciones de torque severo, control preciso de velocidad y excelente respuesta dinámica.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public",
        features: [
          "Rango de potencia: Hasta 475 HP (Trabajo Pesado)",
          "Control de lazo cerrado (FOC) con tarjeta encoder opcional",
          "PLC integrado de 10k pasos y reloj en tiempo real",
          "Modularidad de red: Profibus, DeviceNet, CANopen, Ethernet/IP"
        ],
        applications: [
          "Grúas y polipastos de carga pesada",
          "Extrusoras de hule y plástico",
          "Molinos e industria minera",
          "Prensas mecánicas de estampado"
        ]
      },
      {
        id: "var-c2000-plus",
        title: "Variador Delta Serie C2000+",
        subtitle: "Máxima Robustez y Control Inteligente",
        description: "La versión mejorada de la serie C2000. Diseñado para resistir ambientes industriales duros y sobrecargas extremas.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public",
        features: [
          "Capacidad de sobrecarga de hasta 150% durante 60 segundos",
          "Recubrimiento de barniz PCB mejorado contra gases corrosivos y polvo",
          "Soporte integrado para comunicaciones síncronas multieje",
          "Control de posición y sincronización angular integrados"
        ],
        applications: [
          "Trefiladoras de metales",
          "Centrífugas industriales de gran masa",
          "Ventiladores industriales de tiro inducido",
          "Industria papelera y siderúrgica"
        ]
      }
    ]
  },
  hmi: {
    title: "Interfaces Hombre-Máquina (HMI)",
    description: "Pantallas táctiles industriales para la supervisión, control gráfico y monitoreo de variables en tiempo real.",
    introCommercial: "Las interfaces HMI DOP-100 de Delta Electronics en CEITSA permiten una comunicación fluida y visualización intuitiva de las variables de tus PLCs, variadores y controladores. Con pantallas de alta resolución, conectividad multimarca (Modbus, EtherNet/IP, PROFINET) y facilidades de monitoreo móvil remoto.",
    features: [
      { title: "Resolución de Alta Gama", desc: "Pantallas LCD TFT de alta definición de hasta 65,536 colores para interfaces realistas." },
      { title: "Compatibilidad Multimarca", desc: "Drivers nativos para comunicarse con más de 85 marcas de PLCs en el mercado." },
      { title: "Monitoreo Remoto", desc: "Soporte VNC para ver y controlar la pantalla desde tu celular o computadora corporativa." },
      { title: "Resistentes al Entorno", desc: "Protección frontal IP65 contra agua y polvo, ideal para el piso de producción." }
    ],
    solutions: [
      "Monitoreo visual e histórico de fallas en tableros de control",
      "Control de recetas y parámetros de producción",
      "Visualización de alarmas críticas y reportes de producción",
      "Registro de datos históricos (Data logging) exportables a USB",
      "Control y arranque manual de variadores y bombas desde cabina"
    ],
    items: [
      {
        id: "hmi-dop-basic",
        title: "Pantallas HMI DOP-100 Básica",
        subtitle: "Eficiencia en Monitoreo local",
        description: "Interfaz ideal para visualización básica de alarmas y recetas en máquinas pequeñas con puerto serie Modbus.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/25160/dop-103wq/primary/public",
        features: [
          "Tamaños de pantalla: 4.3\" y 7\"",
          "1 puerto de comunicación COM serial (RS-485 / RS-232)",
          "Procesador Cortex-A8 de respuesta rápida",
          "Programación intuitiva mediante software DOPSoft gratuito"
        ],
        applications: [
          "Tableros de bombas",
          "Hornos pequeños",
          "Maquinaria de empaque básica",
          "Sistemas de dosificación simple"
        ]
      },
      {
        id: "hmi-dop-ethernet",
        title: "Pantallas HMI DOP-100 Avanzada (Ethernet)",
        subtitle: "Conectividad y Redes Industriales",
        description: "El estándar industrial por excelencia. Incorpora puerto Ethernet para comunicación multipunto e integración a redes corporativas.",
        image: "https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/25160/dop-103wq/primary/public",
        features: [
          "Tamaños de pantalla: 7\", 10\" y 12\"",
          "Puerto Ethernet integrado y hasta 3 puertos COM seriales",
          "Función de servidor VNC para monitoreo web y celular",
          "Lector de memorias USB y tarjeta MicroSD para base de datos e históricos"
        ],
        applications: [
          "Líneas de manufactura",
          "Supervisión de cuartos de control",
          "Sistemas SCADA locales",
          "Integración multimarca"
        ]
      }
    ]
  }
}
