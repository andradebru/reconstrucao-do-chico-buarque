Essa construção tá diferente!
Construção é uma música de Chico Buarque, de 1971, que conta um dia comum de um trabalhador de construção que termina em um acidente de trabalho fatal. O autor enfatiza a rotina de trabalho e a banalidade da morte de trabalhadores como este com a repetição de estrofe, alterando as palavras ao final de cada verso, que se tornam novas metáforas e acabam alterando o sentido das frases.

![image](https://user-images.githubusercontent.com/77248375/218352924-9f444f66-8f8a-4fdd-b532-3d7a8190643b.png)


Nas palavras da professora Clara Jorgewich:

"Palavras repetidas, em ritmo também repetitivo, transmitem o tédio daquele cotidiano, dramático por natureza – Seus olhos embotados de cimento e lágrima. Naquele dia, porém, uma nuvem sombria paira sobre a cabeça do pedreiro. Chico construiu o mau presságio usando o advérbio de modo COMO, mais o verbo IR no imperfeito do subjuntivo: COMO SE FOSSE. O efeito é angustiante – Amou daquela vez como se fosse a última. E se for a última? A morte ronda…"

Neste projeto é possível recontar esse último dia de trabalho infinitamente, aleatoriamente, criando novas imagens metafóricas.
Para isso basta clicar no botão "Mudar palavras" na paǵina e ler as frases com final alterado.


# 1. Como rodar localmente

Este projeto foi criado com uma versão antiga do template Djavue, a versao python usada foi 3.6.15.

Step by step

```bash
source dev.sh  # import useful bash functions
devhelp  # like this one ;)
dkbuild  # builds the docker image for this project. The first time Will take a while.
dknpminstall  # I'll explain later!
dkup  # Brings up everything
```

With `dkup` running, open another terminal

```bash
dk bash  # starts bash inside "projetofinal" container
./manage.py migrate  # create database tables and stuff
./manage.py createsuperuser  # creates an application user in the database
```
With `dkup` running, open another terminal
28

What is happenning:

* `dev.sh` is a collection of useful bash functions for this project's development environment. You're encouraged to look inside and see how that works, and add more as the project progresses.
* `dknpminstall` will start a docker container and run `npm install` inside to download node dependencies to the `frontend/node_modules` folder. Using docker for this means you don't need to worry about installing (and choosing version for) node/npm.
* `dkup` uses docker-compose to start 3 containers: postgres, nginx, and projetofinal.
* The dockerized postgres saves its state into `docker/dkdata`. You can delete that if you want your dev database to go kaboom.
* Once `dkup` is running, `dk <command>` will run `<command>` inside the `projetofinal` container. So `dk bash` will get you "logged in" as root inside that container. Once inside, you need to run Django's `manage.py` commands to initialize the database properly.
* The projetofinal container runs 3 services:
 * django on port 8000
 * nuxt frontend with real APIs on port 3000
 * nuxt frontend with mock APIs on port 3001
* nginx is configured to listen on port 80 and redirect to 8000 (requests going to `/api/*`) or 3000 (everything else).
* Therefore, when `dkup` is running, you get a fully working dev-environment by pointing your browser to http://localhost, and a frontend-only-mock-api-based environment by pointing your browser to http://localhost:3001. Each one is more useful on different situations.
* You're supposed to create features first by implementing them on 3001, then validate them, and only then write the backend APIs and integrate them. Experience shows this process is very productive.

# 2. Dev-env, normal-easy mode (dockerize nginx + postgres)

Running everything inside docker is a quick and easy way to get started, but sometimes we need to run things "for real", for example, when you need to debug python code.

## Python setup

Requirements:
 - Understand about python [virtualenvs](https://docs.python.org/3/tutorial/venv.html)
 - Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) (not required, but recommended)

Step by step

```bash
dkpgnginx  # Starts postgres and nginx inside docker
```

With `dkpgnginx` running, start another terminal:

```bash
mkvirtualenv projetofinal -p python3  # creates a python3 virtualenv
pip install -r requirements.txt  # install python dependencies inside virtualenv
export DJANGO_DB_PORT=5431  # That's where our dockerized postgres is listening
./manage.py runserver  # starts django on port 8000
```

Since nginx is also running you go ahead and point your browser to http://localhost/admin and you should see the same thing as in http://localhost:8000/admin

## Node Setup

Requirements:

* Install [nvm](https://github.com/creationix/nvm) (not required, but highly recommended)

Step by step:

```bash
nvm use 9  # Switch your terminal for node version 9.x
# no need to npm install anything, we already have our node_modules folder
sudo chmod -R o+rw .nuxt/  # I'll explain this later
npm run dev  # Starts nuxt frontend on port 3000
```

You can go ahed and point your browser to http://localhost:3001 to see nuxt running **with mocked apis**

To run nuxt using real APIs just turn set this environment variable API_MOCK=0

```bash
API_MOCK=0 npm run dev  # Starts nuxt frontend on port 3000
```

Since nginx is also running you go ahead and point your browser to http://localhost/ and you should have a fully integrated frontend+backend dev env.
