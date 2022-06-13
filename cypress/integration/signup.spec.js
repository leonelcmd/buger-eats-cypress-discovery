
import signupFactory from '../factories/SignupFactory'
import signupPage from '../pages/signupPage'

describe('Signup', () => {

    it('User should be a deliver', function () {

        var deliver = signupFactory.deliver() 

        signupPage.goURL()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldHave(expectedMessage)
    })

    it('Invalid document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = 'X000JJP4141'

        signupPage.goURL()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldHave('Oops! CPF inválido')
    })
    
    it('Invalid email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signupPage.goURL()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldHave('Oops! Email com formato inválido.')
    })

    it('Required fields', function () {
        signupPage.goURL()
        signupPage.submit()

        signupPage.alertMessageShouldHave('É necessário informar o nome')
        signupPage.alertMessageShouldHave('É necessário informar o CPF')
        signupPage.alertMessageShouldHave('É necessário informar o email')
        signupPage.alertMessageShouldHave('É necessário informar o CEP')
        signupPage.alertMessageShouldHave('É necessário informar o número do endereço')
        signupPage.alertMessageShouldHave('Selecione o método de entrega')
        signupPage.alertMessageShouldHave('Adicione uma foto da sua CNH')
    })

})