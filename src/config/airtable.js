// Configurazione Airtable
const AIRTABLE_TOKEN = "patbkc1FV2YVXQ3zr.a06fc31f2955abd8e85e09506856822ac5e9d969a2cb7b5a335d215ea2f2dd4b";
const BASE_ID = "appoOjNJLBJ2pO6Iy";

// ID delle tabelle
const TABLE_PRODOTTI = "tbledTUriQnQZ4vNj";
const TABLE_PROMO = "tblKtIfmcIaaBBnfj";

// URL helper
const apiUrl = (tableId) =>
  `https://api.airtable.com/v0/${BASE_ID}/${tableId}`;

// --- FETCH MENU ---
export async function fetchMenu() {
  const res = await fetch(apiUrl(TABLE_PRODOTTI), {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
  });

  const data = await res.json();

  return data.records.map((r) => ({
    id: r.id,
    nome: r.fields.nome || "",
    descrizione: r.fields.descrizione || "",
    prezzo: r.fields.prezzo || null,
    categoria: r.fields.categoria || "",
    immagine: r.fields.immagine?.[0]?.url || null,
  }));
}

// --- FETCH PROMO ---
export async function fetchPromo() {
  const res = await fetch(apiUrl(TABLE_PROMO), {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
  });

  const data = await res.json();
  const r = data.records[0];

  if (!r) return null;

  return {
    id: r.id,
    titolo: r.fields.titolo || "",
    descrizione: r.fields.descrizione || "",
    immagine: r.fields.immagine?.[0]?.url || null,
  };
}
