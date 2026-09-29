const properties = [
  {
    id: 1,
    NID: "59760681882",
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "Conjunto navarra",
    type: "Apartamento",
    floor: 15,
    price: 257000000,
    area: 35,
    rooms: 1,
    baths: 1,
    parking: 0,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-3a7e06fbf2-5-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=mni9GGekMRX"
  },

  {
    id: 2,
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "arawak 2",
    type: "Apartamento",
    floor: 2,
    price: 398000000,
    area: 40,
    rooms: 1,
    baths: 1,
    parking: 1,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-7e8620d38b-2-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=r3WP8gzT3Eh"
  },

  {
    id: 3,
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "San Fernando",
    type: "Apartamento",
    floor: 1,
    price: 805200000,
    area: 121,
    rooms: 4,
    baths: 3,
    parking: 2,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-765b2573eb-4-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=jD7e68qanXd"
  },

  {
    id: 4,
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "santa ana real 4",
    type: "Apartamento",
    floor: 4,
    price: 606000000,
    area: 102,
    rooms: 3,
    baths: 3,
    parking: 1,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-f06df985f0-4-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=fi1y4FSrf2m"
  },

  {
    id: 5,
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "Babaro",
    type: "Apartamento",
    floor: 2,
    price: 820000000,
    area: 145,
    rooms: 5,
    baths: 4,
    parking: 2,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-89f0df9418-4-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=fnYxzA29wjC"
  },

  {
    id: 6,
    city: "Bogotá",
    locality: "Usaquén",
    neighborhood: "torres de bella isla",
    type: "Apartamento",
    floor: null,
    price: 490000000,
    area: 89,
    rooms: 3,
    baths: 2,
    parking: 1,
    image: "https://d3hzflklh28tts.cloudfront.net/venta-5fc91018f7-2-1100.png",
    tourUrl: "https://my.matterport.com/show/?m=NvYJaPFG2fe"
  },

  {
    id: 7,
    city: "Bogotá",
    locality: "Suba",
    neighborhood: "Camino Verde del Cerezo",
    type: "Apartamento",
    floor: null,
    price: 216000000,
    area: 51,
    rooms: 3,
    baths: 1,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/suba-cerezo"
  },

  {
    id: 8,
    city: "Soacha",
    locality: "",
    neighborhood: "Conjunto La Evolución",
    type: "Apartamento",
    floor: null,
    price: 165000000,
    area: 56,
    rooms: 2,
    baths: 2,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/soacha-evolucion"
  },

  {
    id: 9,
    city: "Bogotá",
    locality: "Suba",
    neighborhood: "Oka 96",
    type: "Apartamento",
    floor: null,
    price: 210000000,
    area: 36,
    rooms: 2,
    baths: 1,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/suba-oka96"
  },

  {
    id: 10,
    city: "Soacha",
    locality: "",
    neighborhood: "Armonía 4",
    type: "Apartamento",
    floor: null,
    price: 174000000,
    area: 55,
    rooms: 3,
    baths: 2,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/soacha-armonia4"
  },

  {
    id: 11,
    city: "Soacha",
    locality: "",
    neighborhood: "La Armonía IV",
    type: "Apartamento",
    floor: null,
    price: 173000000,
    area: 55,
    rooms: 3,
    baths: 2,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/soacha-armonia4b"
  },

  {
    id: 12,
    city: "Bogotá",
    locality: "Ciudad Bolívar",
    neighborhood: "Ciudad Bolívar",
    type: "Casa",
    floor: null,
    price: 198000000,
    area: 62,
    rooms: 3,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=900&q=85",
    tourUrl: "https://example.com/360/bogota-ciudad-bolivar"
  }
];


// =====================================================
// ELEMENTOS DEL HTML
// =====================================================

const grid =
  document.getElementById("propertyGrid");

const searchInput =
  document.getElementById("searchInput");

const cityFilter =
  document.getElementById("cityFilter");

const localityFilter =
  document.getElementById("localityFilter");

const typeFilter =
  document.getElementById("typeFilter");

const priceFilter =
  document.getElementById("priceFilter");

const roomsFilter =
  document.getElementById("roomsFilter");

const sortFilter =
  document.getElementById("sortFilter");

const resultCount =
  document.getElementById("resultCount");

const heroCount =
  document.getElementById("heroCount");

const emptyState =
  document.getElementById("emptyState");


// =====================================================
// LOCALIDADES DE BOGOTÁ
// =====================================================

const bogotaLocalities = [
  "Usaquén",
  "Chapinero",
  "Santa Fe",
  "San Cristóbal",
  "Usme",
  "Tunjuelito",
  "Bosa",
  "Kennedy",
  "Fontibón",
  "Engativá",
  "Suba",
  "Barrios Unidos",
  "Teusaquillo",
  "Los Mártires",
  "Antonio Nariño",
  "Puente Aranda",
  "La Candelaria",
  "Rafael Uribe Uribe",
  "Ciudad Bolívar",
  "Sumapaz"
];


// =====================================================
// FORMATO DE PRECIO
// =====================================================

function money(value) {

  return "$" +
    value.toLocaleString("es-CO");

}


// =====================================================
// ABRIR RECORRIDO 360
// =====================================================

function openTour(property) {

  if (!property.tourUrl) {

    alert(
      "Este inmueble todavía no tiene recorrido 360°."
    );

    return;
  }

  window.open(
    property.tourUrl,
    "_blank",
    "noopener,noreferrer"
  );

}


// =====================================================
// ACTUALIZAR LOCALIDADES
// =====================================================

function updateLocalityOptions() {

  const selectedCity =
    cityFilter.value;


  // Limpiar localidades actuales

  localityFilter.innerHTML = `
    <option value="">
      Localidad
    </option>
  `;


  // Si es Bogotá

  if (selectedCity === "Bogotá") {

    localityFilter.disabled = false;


    bogotaLocalities.forEach(
      locality => {

        const option =
          document.createElement("option");

        option.value =
          locality;

        option.textContent =
          locality;

        localityFilter.appendChild(
          option
        );

      }
    );

  } else {

    // Otras ciudades

    localityFilter.disabled = true;

    localityFilter.value = "";

  }

}


// =====================================================
// RENDERIZAR INMUEBLES
// =====================================================

function render(list) {

  resultCount.textContent =
    list.length;

  heroCount.textContent =
    list.length;

  grid.innerHTML = "";


  list.forEach(property => {

    const card =
      document.createElement("article");

    card.className =
      "card";

    card.setAttribute(
      "tabindex",
      "0"
    );


    const floorHTML =
      property.floor !== null &&
      property.floor !== undefined
        ? `<span>Piso ${property.floor}</span>`
        : "";


    card.innerHTML = `

      <div class="card-image">

        <img
          src="${property.image}"
          alt="${property.city} - ${property.neighborhood}"
          loading="lazy"
        >

        <span class="tag">
          ${property.type}
        </span>

        <span class="tour-label">
          ◉ Recorrido virtual 360°
        </span>

      </div>


      <div class="card-body">

        <div class="title-row">

          <div>

            <h3>
              ${property.city}
            </h3>

            <div class="complex">
              ${property.neighborhood}
            </div>

          </div>

        </div>


        <div class="meta">

          <span>
            ${property.area} m²
          </span>

          ${floorHTML}

          <span>
            ${property.rooms} Hab.
          </span>

          <span>
            ${property.baths}
            Baño${property.baths !== 1 ? "s" : ""}
          </span>

          ${
            property.parking > 0
              ? `<span>
                  ${property.parking} Parq.
                </span>`
              : ""
          }

        </div>


        <div class="price">

          ${money(property.price)}

        </div>


        <div class="bottom">

          <span class="available">
            Disponible
          </span>


          <div class="actions">

            <button
              class="tour"
              type="button"
            >
              Ver 360°
            </button>


            <button
              type="button"
              title="Compartir"
              class="share"
            >
              ⌯
            </button>


            <button
              type="button"
              title="Favorito"
              class="favorite"
            >
              ♡
            </button>

          </div>

        </div>

      </div>

    `;


    // =================================================
    // CLICK EN TODA LA TARJETA
    // =================================================

    card.addEventListener(
      "click",
      event => {

        if (
          !event.target.closest("button")
        ) {

          openTour(property);

        }

      }
    );


    // =================================================
    // BOTÓN 360
    // =================================================

    const tourButton =
      card.querySelector(".tour");


    tourButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openTour(property);

      }
    );


    // =================================================
    // COMPARTIR
    // =================================================

    const shareButton =
      card.querySelector(".share");


    shareButton.addEventListener(
      "click",
      async event => {

        event.stopPropagation();


        const shareData = {

          title:
            property.neighborhood,

          text:
            `${property.city} - ${property.neighborhood} - ${money(property.price)}`,

          url:
            property.tourUrl

        };


        if (navigator.share) {

          try {

            await navigator.share(
              shareData
            );

          } catch (error) {

            // Usuario canceló compartir.

          }

        } else {

          try {

            await navigator.clipboard.writeText(
              property.tourUrl
            );

            alert(
              "Enlace 360° copiado."
            );

          } catch (error) {

            alert(
              "No fue posible copiar el enlace."
            );

          }

        }

      }
    );


    // =================================================
    // FAVORITO
    // =================================================

    const favoriteButton =
      card.querySelector(".favorite");


    favoriteButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();


        favoriteButton.classList.toggle(
          "active"
        );


        favoriteButton.textContent =
          favoriteButton.classList.contains(
            "active"
          )
            ? "♥"
            : "♡";

      }
    );


    // =================================================
    // TECLADO
    // =================================================

    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openTour(property);

        }

      }
    );


    grid.appendChild(card);

  });


  emptyState.classList.toggle(
    "hidden",
    list.length !== 0
  );

}


// =====================================================
// FILTROS
// =====================================================

function applyFilters() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  const city =
    cityFilter.value;


  const locality =
    localityFilter.value;


  const type =
    typeFilter.value;


  const maxPrice =
    priceFilter.value
      ? Number(priceFilter.value) * 1000000
      : Infinity;


  const rooms =
    roomsFilter.value;


  let result =
    properties.filter(
      property => {


        // ===========================================
        // BUSCADOR
        // ===========================================

        const searchable = `

          ${property.city}

          ${property.locality || ""}

          ${property.neighborhood}

          ${property.type}

        `.toLowerCase();


        const matchesSearch =
          !search ||
          searchable.includes(search);


        // ===========================================
        // CIUDAD
        // ===========================================

        const matchesCity =
          !city ||
          property.city === city;


        // ===========================================
        // LOCALIDAD
        // ===========================================

        const matchesLocality =
          !locality ||
          property.locality === locality;


        // ===========================================
        // TIPO
        // ===========================================

        const matchesType =
          !type ||
          property.type === type;


        // ===========================================
        // PRECIO
        // ===========================================

        const matchesPrice =
          property.price <= maxPrice;


        // ===========================================
        // HABITACIONES
        // ===========================================

        const matchesRooms =
          !rooms ||
          (
            rooms === "3"
              ? property.rooms >= 3
              : property.rooms === Number(rooms)
          );


        return (

          matchesSearch &&

          matchesCity &&

          matchesLocality &&

          matchesType &&

          matchesPrice &&

          matchesRooms

        );

      }
    );


  // =================================================
  // ORDENAR
  // =================================================

  if (
    sortFilter.value === "low"
  ) {

    result.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (
    sortFilter.value === "high"
  ) {

    result.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  render(result);

}


// =====================================================
// EVENTO: CAMBIAR CIUDAD
// =====================================================

cityFilter.addEventListener(
  "change",
  () => {

    updateLocalityOptions();

    applyFilters();

  }
);


// =====================================================
// EVENTO: CAMBIAR LOCALIDAD
// =====================================================

localityFilter.addEventListener(
  "change",
  () => {

    applyFilters();

  }
);


// =====================================================
// EVENTOS DE FILTROS
// =====================================================

searchInput.addEventListener(
  "input",
  applyFilters
);


typeFilter.addEventListener(
  "change",
  applyFilters
);


priceFilter.addEventListener(
  "change",
  applyFilters
);


roomsFilter.addEventListener(
  "change",
  applyFilters
);


sortFilter.addEventListener(
  "change",
  applyFilters
);


// =====================================================
// LIMPIAR FILTROS
// =====================================================

document
  .getElementById("clearFilters")
  .addEventListener(
    "click",
    () => {


      searchInput.value = "";


      cityFilter.value = "";


      localityFilter.innerHTML = `
        <option value="">
          Localidad
        </option>
      `;


      localityFilter.value = "";

      localityFilter.disabled = true;


      typeFilter.value = "";


      priceFilter.value = "";


      roomsFilter.value = "";


      sortFilter.value =
        "default";


      applyFilters();

    }
  );


// =====================================================
// CERRAR MENSAJE DE AYUDA
// =====================================================

const helpClose =
  document.querySelector(
    ".help-close"
  );


if (helpClose) {

  helpClose.addEventListener(
    "click",
    () => {

      const help =
        document.querySelector(
          ".help"
        );


      if (help) {

        help.style.display =
          "none";

      }

    }
  );

}


// =====================================================
// BOTÓN CHAT
// =====================================================

const chatButton =
  document.querySelector(
    ".chat"
  );


if (chatButton) {

  chatButton.addEventListener(
    "click",
    () => {

      alert(
        "Aquí puedes conectar WhatsApp, Messenger o un formulario de contacto."
      );

    }
  );

}


// =====================================================
// INICIAR
// =====================================================

updateLocalityOptions();

render(properties);