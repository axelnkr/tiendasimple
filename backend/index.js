const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const productos = [
  {
    id: 1,
    nombre: "Motherboard Gigabyte Amd A520m K V2",
    precio: 149999,
    imagenes: ["/img/mother1.png", "/img/mother2.png", "/img/mother3.png"],
    descripcion: "Algunas de las características clave del Gigabyte A520M K V2 1.0 incluyen soporte para procesadores AMD Ryzen de 3ª generación, hasta 64 GB de memoria DDR4 a 4000 MHz (OC), un socket AM4, un diseño de alimentación de alta calidad, un PCIe 3.0 x16 para tarjetas gráficas, un PCIe 3.0 x1, soporte para dispositivos de almacenamiento M.2, USB 3.2 Gen 1, HDMI, Realtek Gigabit LAN y audio de alta definición."
  },
  {
    id: 2,
    nombre: "Memoria Ram Ddr3 8gb 1600 Mhz Hiksemi Udimm Hiker Hsc308u16z1",
    precio: 58500,
    imagenes: ["/img/ram1.png", "/img/ram2.png", "/img/ram3.png"],
    descripcion: "Acelerá y extendé la vida útil del sistema y aprovechá la capacidad de respuesta que te da para trabajar de manera simple y confortable. No lo dudes más, la memoria Hiksemi es una de las formas más accesibles para aumentar de manera fácil la capacidad multitarea de tu computadora. Capacidad: 8GB - Interfaz: DDR3 - Formato: UDIMM - Frecuencia: 1600MHz - Tamaño (largo x ancho x alto mm): 70x30x1,3 - Temperatura de operacion: 0 C a 85 °C (32 F a 185 F) - Cantidad de pines 240 - Tasa de transferencia 12.800 MB/s - Latencia CAS 11 - Voltaje de alimentación 1.5V"
  },
  {
    id: 3,
    nombre: "Placa De Video Biostar Radeon RX 580 8GB GDDR5",
    precio: 295999,
    imagenes: ["/img/video1.png", "/img/video2.png"],
    descripcion: "- Procesador gráfico: AMD Radeon RX 580 2048SP - Procesadores de flujo: 2048 Stream Processors - Memoria de video: 8 GB GDDR5 - Interfaz de memoria: 256 bits - Frecuencia del núcleo: 1150 MHz (Base) / 1500 MHz (Boost) - Velocidad de memoria: 7 Gbps - Interfaz: PCI Express 3.0 - Salidas de video: 1 × DVI 1 × DisplayPort 1.4a 1 × HDMI 2.0b - Fuente de alimentación recomendada: 450 W - Conector de alimentación: 1 × PCIe de 6 pines - Dimensiones: 201 × 126 × 40 mm"
  },
  {
    id: 4,
    nombre: "Disco Solido Ssd Kingston A400 480gb 2.5 Pulgadas Sata 3",
    precio: 175000,
    imagenes: ["/img/ssd1.jpg", "/img/ssd2.jpg", "/img/ssd3.jpg"],
    descripcion: "ESPECIFICACIONES - Part Number: SA400S37/480G - Factor de forma: 2,5\" - Interfaz: SATA Rev. 3.0 (6 Gb/s), retrocompatible con SATA Rev. 2.0 (3 Gb/s) - Capacidades: 120GB, 240GB, 480GB, 960GB - NAND: 3D - Rendimiento de referencia: Transferencia de datos (ATTO): 480 GB – hasta 500 MB/s en lectura y 450 MB/s en escritura - Consumo de energía: 0,195 W en reposo / 0,279 W promedio / 0,642 W (máx) lectura / 1,535 W (máx) escritura - Temperatura de almacenamiento: -40°C~85°C - Temperatura de servicio: 0°C~70°C - Dimensiones: 100,0 mm x 69,9 mm x 7,0 mm (2,5”) - Peso: 41 g 480 GB – 2,5” - Vibración en funcionamiento: 2,17 G máxima (7–800 Hz) - Vibración en reposo: 20 G máxima (10–2000 Hz) - Vida útil: 2 millón de horas MTBF - Total de bytes escritos (TBW): 480GB: 160TB"
  },
  {
    id: 5,
    nombre: "Combo Teclado K295 y Mouse Óptico M220 Logitech Mk295 Silent Wireless Negro",
    precio: 49999,
    imagenes: ["/img/key1.png", "/img/key2.png", "/img/key3.png"],
    descripcion: "El combo de teclado y mouse Logitech es perfecto para ayudarte a desarrollar tus actividades diarias. Esta combinación está adaptada para realizar distintas tareas, ya sean laborales, escolares o de cualquier índole.\n\nSilencioso y ligero\nEste kit incluye un periférico que posee una arquitectura de membrana. ¿Qué quiere decir esto? Que su teclado te permitirá disfrutar de pulsaciones silenciosas. A diferencia de los mecánicos, este tipo de dispositivos son ligeros y fáciles de transportar.\n\nSensor de alta precisión\nEl mouse del combo posee un sensor óptico de alta precisión, el cual te permitirá redirigir el cursor de una manera más exacta y sensible que el resto de los sistemas tradicionales."
  }
];

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});