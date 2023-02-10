import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    // add_todo(newtask){
    //     return mockasync({description: newtask, done: false});
    // },
    palavras_aleatoriaveis(){
        return mockasync({
            versos: [
                {verso: 'Amou daquela vez como se fosse a'},
                {verso: 'Beijou sua mulher como se fosse a última'},
                {verso: 'E cada filho seu como se fosse o único'},
                {verso: 'E atravessou a rua com seu passo tímido'},
                {verso: 'Subiu a construção como se fosse máquina'},
                {verso: 'Ergueu no patamar quatro paredes sólidas'},
                {verso: 'Tijolo com tijolo num desenho mágico'},
                {verso: 'Seus olhos embotados de cimento e lágrima'},
                {verso: 'Sentou pra descansar como se fosse sábado'},
                {verso: 'Comeu feijão com arroz como se fosse um príncipe'},
                {verso: 'Bebeu e soluçou como se fosse um náufrago'},
                {verso: 'Dançou e gargalhou como se ouvisse música'},
                {verso: 'E tropeçou no céu como se fosse um bêbado'},
                {verso: 'E flutuou no ar como se fosse um pássaro'},
                {verso: 'E se acabou no chão feito um pacote flácido'},
                {verso: 'Agonizou no meio do passeio público'},
                {verso: 'Morreu na contramão atrapalhando o tráfego'},
                {verso: 'como se fosse o último'},
                {verso: '(Beijou sua mulher) como se fosse a única'},
                {verso: '(E cada filho seu) como se fosse o pródigo'},
                {verso: 'E atravessou a rua com seu passo bêbado'},
                {verso: 'Subiu a construção como se fosse sólido'},
                {verso: 'Ergueu no patamar quatro paredes mágicas'},
                {verso: 'Tijolo com tijolo num desenho lógico'},
                {verso: 'Seus olhos embotados de cimento e tráfego'},
                {verso: 'Sentou pra descansar como se fosse um príncipe'},
                {verso: 'Comeu feijão com arroz como se fosse o máximo'},
                {verso: 'Bebeu e soluçou como se fosse máquina'},
                {verso: 'Dançou e gargalhou como se fosse o próximo'},
                {verso: 'E tropeçou no céu como se ouvisse música'},
                {verso: 'E flutuou no ar como se fosse sábado'},
                {verso: 'E se acabou no chão feito um pacote tímido'},
                {verso: 'Agonizou no meio do passeio náufrago'},
                {verso: 'Morreu na contramão atrapalhando o público'},
                {verso: 'Amou daquela vez como se fosse máquina'},
                {verso: 'Beijou sua mulher como se fosse lógico'},
                {verso: 'Ergueu no patamar quatro paredes flácidas'},
                {verso: 'Sentou pra descansar como se fosse um pássaro'},
                {verso: 'E flutuou no ar como se fosse um príncipe'},
                {verso: 'E se acabou no chão feito um pacote bêbado'},
                {verso: 'Morreu na contramão atrapalhando o sábado'},
                {verso: 'Por esse pão pra comer, por esse chão pra dormir'},
                {verso: 'A certidão pra nascer e a concessão pra sorrir'},
                {verso: 'Por me deixar respirar, por me deixar existir'},
                {verso: 'Deus lhe pague'},
                {verso: 'Pela cachaça de graça que a gente tem que engolir'},
                {verso: 'Pela fumaça, desgraça que a gente tem que tossir'},
                {verso: 'Pelos andaimes pingentes que a gente tem que cair'},
                {verso: 'Deus lhe pague'},
                {verso: 'Pela mulher carpinteira pra nos louvar e cuspir'},
                {verso: 'E pelas moscas bicheiras a nos beijar e cobrir'},
                {verso: 'E pela paz derradeira que enfim vai nos redimir'},
                {verso: 'Deus lhe pague'},
            ],
            palavras: [
                // 'última', 'único', 'tímido', 'máquina', 'sólidas', 'mágico', 'lágrima', 'sábado', 'príncipe', 'náufrago', 'música', 'bêbado', 'pássaro', 'flácido', 'público', 'tráfego', 'pródigo', 'bêbado',
                {palavra: 'última'},
                {palavra: 'único'},
                {palavra: 'tímido'},
                {palavra: 'máquina'},
                {palavra: 'sólidas'},
                {palavra: 'mágico'},
                {palavra: 'lágrima'},
                {palavra: 'sábado'},
                {palavra: 'príncipe'},
                {palavra: 'náufrago'},
                {palavra: 'música'},
                {palavra: 'pássaro'},
                {palavra: 'flácido'},
                {palavra: 'público'},
                {palavra: 'tráfego'},
                {palavra: 'pródigo'},
                {palavra: 'bêbado'},
                ]
        });
    }
    // list_todos(){
    //         return mockasync({
    //             todos: [
    //                 {description: 'Do the laundry', done: true},
    //                 {description: 'Walk the dog', done: false}
    //             ]
    //         });
};

export default api;