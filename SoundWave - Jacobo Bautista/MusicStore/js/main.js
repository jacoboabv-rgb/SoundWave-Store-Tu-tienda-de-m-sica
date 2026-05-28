// =============================================
// SOUNDWAVE STORE – MAIN JS
// =============================================

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 80);
    }
});

// --- CARRITO (localStorage) ---
let productosEnCarrito = JSON.parse(localStorage.getItem('sw-carrito')) || [];

function guardarCarrito() {
    localStorage.setItem('sw-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    const n = document.getElementById('numerito');
    if (!n) return;
    const total = productosEnCarrito.reduce((acc, p) => acc + p.cantidad, 0);
    n.textContent = total;
    n.style.display = total > 0 ? 'inline' : 'inline';
}

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;
    const existe = productosEnCarrito.find(p => p.id === idProducto);
    if (existe) {
        existe.cantidad++;
    } else {
        productosEnCarrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito();
    actualizarNumerito();
    mostrarToast();
}

function mostrarToast() {
    const toastEl = document.getElementById('toastCarrito');
    if (toastEl && window.bootstrap) {
        const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
        toast.show();
    }
}

// --- RENDERIZAR PRODUCTOS ---
function renderProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center text-muted py-5"><i class="bi bi-search fs-1"></i><p class="mt-3">No se encontraron productos en esta categoría</p></div>';
        return;
    }
    lista.forEach((prod, i) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3';
        col.style.animationDelay = `${i * 0.06}s`;
        col.innerHTML = `
            <div class="producto-card h-100">
                <div class="producto-card-img-wrapper">
                    <img src="${prod.imagen}" alt="${prod.titulo}" loading="lazy">
                    <span class="producto-badge">${prod.categoria.nombre}</span>
                </div>
                <div class="producto-card-body">
                    <p class="producto-titulo">${prod.titulo}</p>
                    <p class="producto-precio">$${prod.precio.toLocaleString('es-CO')} COP</p>
                    <button class="btn-agregar" onclick="agregarAlCarrito('${prod.id}')">
                        <i class="bi bi-cart-plus me-1"></i> Agregar al carrito
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// --- FILTROS DE CATEGORÍA ---
function filtrarCategoria(cat) {
    // actualizar botones
    document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
    const btnActivo = document.getElementById(cat === 'todos' ? 'todos' : `cat-${cat}`);
    if (btnActivo) btnActivo.classList.add('active');

    const filtrados = cat === 'todos' ? productos : productos.filter(p => p.categoria.id === cat);
    renderProductos(filtrados);
}

// --- SCROLL REVEAL ---
function scrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) el.classList.add('visible');
    });
}

// --- FORMULARIO CONTACTO VALIDACIÓN ---
const formContacto = document.getElementById('formContacto');
if (formContacto) {
    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        let valido = true;
        const nombre = document.getElementById('contactNombre');
        const email = document.getElementById('contactEmail');

        // Limpiar
        [nombre, email].forEach(f => f.classList.remove('is-invalid', 'is-valid'));

        if (!nombre.value.trim() || nombre.value.trim().length < 3) {
            nombre.classList.add('is-invalid');
            valido = false;
        } else {
            nombre.classList.add('is-valid');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            valido = false;
        } else {
            email.classList.add('is-valid');
        }

        if (valido) {
            formContacto.reset();
            [nombre, email].forEach(f => f.classList.remove('is-valid'));
            alert('¡Gracias por tu mensaje! Te contactaremos pronto 🎵');
        }
    });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productos !== 'undefined') {
        renderProductos(productos);
    }
    actualizarNumerito();
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();
});
