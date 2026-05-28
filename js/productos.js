// =============================================
// CATÁLOGO DE PRODUCTOS - SOUNDWAVE STORE
// =============================================
const productos = [
    // VINILOS
    {
        id: "vinilo-01",
        titulo: "Pink Floyd – The Wall (2LP)",
        imagen: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 189000
    },
    {
        id: "vinilo-02",
        titulo: "Miles Davis – Kind of Blue (180g)",
        imagen: "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 145000
    },
    {
        id: "vinilo-03",
        titulo: "Led Zeppelin – IV Edición Remasterizada",
        imagen: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 165000
    },
    {
        id: "vinilo-04",
        titulo: "Nirvana – Nevermind (25 Aniversario)",
        imagen: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&auto=format&fit=crop",
        categoria: { nombre: "Vinilos", id: "vinilos" },
        precio: 172000
    },
    // INSTRUMENTOS
    {
        id: "instrumento-01",
        titulo: "Guitarra Fender Stratocaster Classic",
        imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 3450000
    },
    {
        id: "instrumento-02",
        titulo: "Piano Digital Yamaha P-45",
        imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 2100000
    },
    {
        id: "instrumento-03",
        titulo: "Batería Acústica Pearl Export Series",
        imagen: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 4800000
    },
    {
        id: "instrumento-04",
        titulo: "Bajo Eléctrico Fender Jazz Bass",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
        categoria: { nombre: "Instrumentos", id: "instrumentos" },
        precio: 2750000
    },
    // DISCOS & CDs
    {
        id: "disco-01",
        titulo: "The Beatles – Abbey Road (CD Edición 50 Aniv.)",
        imagen: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 65000
    },
    {
        id: "disco-02",
        titulo: "Metallica – Black Album (CD Deluxe)",
        imagen: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 72000
    },
    {
        id: "disco-03",
        titulo: "Carlos Vives – Cumbiana (CD + DVD)",
        imagen: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 55000
    },
    {
        id: "disco-04",
        titulo: "Adele – 30 (CD Deluxe Edition)",
        imagen: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=400&auto=format&fit=crop",
        categoria: { nombre: "Discos & CDs", id: "discos" },
        precio: 68000
    },
    // IMPLEMENTOS
    {
        id: "implemento-01",
        titulo: "Micrófono Audio-Technica AT2020 Condensador",
        imagen: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop",
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
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 750000
    },
    {
        id: "implemento-04",
        titulo: "Cuerdas Ernie Ball para Guitarra (Pack x3)",
        imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&auto=format&fit=crop",
        categoria: { nombre: "Implementos", id: "implementos" },
        precio: 45000
    },
];
