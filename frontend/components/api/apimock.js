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
    versos_e_palavras(){
        return mockasync({
            versos: [
                'Amou daquela vez como se fosse ',
                'Beijou sua mulher como se fosse ',
                'E cada filho seu como se fosse ',
                'E atravessou a rua com seu passo ',
                'Subiu a construção como se fosse ',
                'Ergueu no patamar quatro paredes ',
                'Tijolo com tijolo num desenho ',
                'Seus olhos embotados de cimento ',
                'Sentou pra descansar como se fosse ',
                'Comeu feijão com arroz como se fosse ',
                'Bebeu e soluçou como se fosse ',
                'Dançou e gargalhou como se ouvisse ',
                'E tropeçou no céu como se fosse ',
                'E flutuou no ar como se fosse ',
                'E se acabou no chão feito um pacote ',
                'Agonizou no meio do passeio ',
                'Morreu na contramão atrapalhando ',
            ],
            palavras: [
                'última',
                'único',
                'tímido',
                'máquina',
                'sólidas',
                'mágico',
                'lágrima',
                'sábado',
                'príncipe',
                'náufrago',
                'música',
                'pássaro',
                'flácido',
                'público',
                'tráfego',
                'pródigo',
                'bêbado',
            ]
        });
    }
};

export default api;