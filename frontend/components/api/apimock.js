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
                {verso: 'Amou daquela vez como se fosse '},
                {verso: 'Beijou sua mulher como se fosse '},
                {verso: 'E cada filho seu como se fosse '},
                {verso: 'E atravessou a rua com seu passo '},
                {verso: 'Subiu a construção como se fosse '},
                {verso: 'Ergueu no patamar quatro paredes '},
                {verso: 'Tijolo com tijolo num desenho '},
                {verso: 'Seus olhos embotados de cimento '},
                {verso: 'Sentou pra descansar como se fosse '},
                {verso: 'Comeu feijão com arroz como se fosse '},
                {verso: 'Bebeu e soluçou como se fosse '},
                {verso: 'Dançou e gargalhou como se ouvisse '},
                {verso: 'E tropeçou no céu como se fosse '},
                {verso: 'E flutuou no ar como se fosse '},
                {verso: 'E se acabou no chão feito um pacote '},
                {verso: 'Agonizou no meio do passeio '},
                {verso: 'Morreu na contramão atrapalhando '},
            ],
            palavras: [
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
};

export default api;