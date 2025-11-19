const AIRTABLE_API_KEY = 'YOUR_AIRTABLE_API_KEY';
const AIRTABLE_BASE_ID = 'YOUR_AIRTABLE_BASE_ID';

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

export const fetchMenu = async () => {
  try {
    const response = await fetch(`${AIRTABLE_API_URL}/Products`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch menu');
    }

    const data = await response.json();

    return data.records.map((record) => ({
      id: record.id,
      name: record.fields.nome || record.fields.Name || '',
      description: record.fields.descrizione || record.fields.Description || '',
      price: record.fields.prezzo || record.fields.Price || 0,
      category: record.fields.categoria || record.fields.Category || 'Altro',
      image: record.fields.immagine || record.fields.Image || null,
    }));
  } catch (error) {
    console.error('Error fetching menu:', error);
    return getMockMenu();
  }
};

export const fetchPromo = async () => {
  try {
    const response = await fetch(`${AIRTABLE_API_URL}/Promo`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch promo');
    }

    const data = await response.json();

    if (data.records.length > 0) {
      const record = data.records[0];
      return {
        id: record.id,
        title: record.fields.titolo || record.fields.Title || '',
        description: record.fields.descrizione || record.fields.Description || '',
        image: record.fields.immagine || record.fields.Image || null,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching promo:', error);
    return getMockPromo();
  }
};

const getMockMenu = () => {
  return [
    {
      id: '1',
      name: 'Caffè Espresso',
      description: 'Espresso italiano classico',
      price: 1.50,
      category: 'Bevande',
      image: null,
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'Caffè con latte montato',
      price: 2.50,
      category: 'Bevande',
    },
    {
      id: '3',
      name: 'Cornetto',
      description: 'Cornetto fresco del giorno',
      price: 1.80,
      category: 'Dolci',
    },
    {
      id: '4',
      name: 'Panino Prosciutto',
      description: 'Panino con prosciutto crudo e mozzarella',
      price: 5.50,
      category: 'Panini',
    },
  ];
};

const getMockPromo = () => {
  return {
    id: 'promo1',
    title: 'Promo del Giorno',
    description: 'Caffè + Cornetto a soli 3€! Offerta valida fino alle 11:00',
    image: null,
  };
};
