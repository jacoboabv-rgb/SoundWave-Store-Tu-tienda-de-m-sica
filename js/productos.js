// =============================================
// CATÁLOGO DE PRODUCTOS - SOUNDWAVE STORE
// =============================================
const productos = [
    // VINILOS
    {
        id: "vinilo-01",
        titulo: "Pink Floyd – The Wall (2LP)",
        imagen: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 189000
    },
    {
        id: "vinilo-02",
        titulo: "Miles Davis – Kind of Blue (180g)",
        imagen: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 145000
    },
    {
        id: "vinilo-03",
        titulo: "Led Zeppelin – IV Edición Remasterizada",
        imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 165000
    },
    {
        id: "vinilo-04",
        titulo: "Nirvana – Nevermind (25 Aniversario)",
        imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 172000
    },
    // INSTRUMENTOS
    {
        id: "instrumento-01",
        titulo: "Guitarra Fender Stratocaster Classic",
        imagen: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 3450000
    },
    {
        id: "instrumento-02",
        titulo: "Piano Digital Yamaha P-45",
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 2100000
    },
    {
        id: "instrumento-03",
        titulo: "Batería Acústica Pearl Export Series",
        imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 4800000
    },
    {
        id: "instrumento-04",
        titulo: "Bajo Eléctrico Fender Jazz Bass",
        imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 2750000
    },
    // DISCOS & CDs
    {
        id: "disco-01",
        titulo: "The Beatles – Abbey Road (CD Edición 50 Aniv.)",
        imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 65000
    },
    {
        id: "disco-02",
        titulo: "Metallica – Black Album (CD Deluxe)",
        imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 72000
    },
    {
        id: "disco-03",
        titulo: "Carlos Vives – Cumbiana (CD + DVD)",
        imagen: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 55000
    },
    {
        id: "disco-04",
        titulo: "Adele – 30 (CD Deluxe Edition)",
        imagen: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 68000
    },
    // IMPLEMENTOS
    {
        id: "implemento-01",
        titulo: "Micrófono Audio-Technica AT2020 Condensador",
        imagen: "https://images.unsplash.com/photo-1495929902509-fee140f20d20?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 420000
    },
    {
        id: "implemento-02",
        titulo: "Auriculares Sony MDR-7506 Profesionales",
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 380000
    },
    {
        id: "implemento-03",
        titulo: "Interface de Audio Focusrite Scarlett 2i2",
        imagen: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 750000
    },
    {
        id: "implemento-04",
        titulo: "Cuerdas Ernie Ball para Guitarra (Pack x3)",
        imagen: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 45000
    },
];
