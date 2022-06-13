
export default {
    deliver: function () {

        var data = {
            name: 'Leonel Domagalski',
            cpf: '00000014141',
            email: 'email@hotmail.com',
            whatsapp: '48999999999',
            address: {
                postalCode: '88803145',
                street: 'Rua Vereador Cyro Bacha',
                number: '145',
                details: 'casa lilás',
                district: 'Comerciário',
                city_state: 'Criciúma/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}