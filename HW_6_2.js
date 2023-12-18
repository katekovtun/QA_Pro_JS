
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    // Перевіряємо чи назва поточної компанії збігається з шуканою
    if (company.name === companyName) return company;

    // Об'єднуємо підкомпанії з partners та clients
    const subCompanies = [...(company.partners  [])];
    /*const subCompanies = []  
    if (company.partners) {
        subCompanies.concat(company.partners,  []);
    }
    if (company.clients) {
        subCompanies.concat(company.clients, []);
    }*/

       


    // Шукаємо в кожній підкомпанії
for (const subCompany of subCompanies) {
        const result = findValueByKey(companyName, subCompany);
        if (result) return result;
    }

  /*subCompanies.forEach((subCompany) => {
        const result = findValueByKey(companyName, subCompany);
        if (result) return result;
      });
*/
    // Нічого не знайдено
    return null;
}

const companyNameToFind = 'Клієнт 1.2.3';
const result = findValueByKey(companyNameToFind, company);

if (result) {
    console.log('Знайдено компанію:', result);
} else {
    console.log('Компанію з назвою', companyNameToFind, 'не знайдено.');
}
