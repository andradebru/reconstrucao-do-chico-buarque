<template>
  <v-container>
    <v-row class="d-flex">
      <v-col class="pr-2" >
        <p class="eye">
          <i
            >"E a narrativa recomeça. As mesmas estrofes voltam à cena; porém,
            com uma mudança de efeito: as proparoxítonas no fim dos versos vão
            se revezando como o cubo mágico, que forma um desenho diferente a
            cada girada."</i
          >
        </p>
        <a
          href="https://comunicacaoescrita.com/analise-construcao-chico-buarque/"
          white
          >- Clara Jorgewich</a
        >
        <p class="mt-5">
          Construção é uma música de Chico Buarque, de 1971, que conta um dia
          comum de um trabalhador de construção que termina em um acidente de
          trabalho fatal. O autor enfatiza a rotina de trabalho e a banalidade
          da morte de trabalhadores como este com a repetição de estrofe,
          alterando as palavras ao final de cada verso, que se tornam novas
          metáforas e acabam alterando o sentido das frases.
        </p>

        <p>Nas palavras da professora Clara Jorgewich:</p>
        <p>
          <i>
            "Palavras repetidas, em ritmo também repetitivo, transmitem o tédio
            daquele cotidiano, dramático por natureza – Seus olhos embotados de
            cimento e lágrima. Naquele dia, porém, uma nuvem sombria paira sobre
            a cabeça do pedreiro. Chico construiu o mau presságio usando o
            advérbio de modo COMO, mais o verbo IR no imperfeito do subjuntivo:
            COMO SE FOSSE. O efeito é angustiante – Amou daquela vez como se
            fosse a última. E se for a última? A morte ronda…"
          </i>
        </p>
        <p>
          Nesta página é possível recontar esse último dia de trabalho
          infinitamente, aleatoriamente, criando novas imagens metafóricas.
        </p>
        <v-btn
          outline
          color="terciary"
          class="mt-4 ml-0"
          :to="{ name: 'index' }"
        >
          Voltar
        </v-btn>
      </v-col>
      <v-col class="d-flex pl-2 letra-original" >
        <v-sheet flat elevation="0" class=" pa-4 mt-6">
          <h2>Letra original</h2>
          <p><b>Construção</b></p>
          <p>
            <i>
              Amou daquela vez como se fosse a última<br>Beijou sua mulher como
              se fosse a última<br>E cada filho seu como se fosse o único<br>E
              atravessou a rua com seu passo tímido<br>Subiu a construção como se
              fosse máquina<br>Ergueu no patamar quatro paredes sólidas<br>Tijolo
              com tijolo num desenho mágico<br>Seus olhos embotados de cimento e
              lágrima<br>Sentou pra descansar como se fosse sábado<br>Comeu feijão
              com arroz como se fosse um príncipe<br>Bebeu e soluçou como se
              fosse um náufrago<br>Dançou e gargalhou como se ouvisse música<br>E
              tropeçou no céu como se fosse um bêbado<br>E flutuou no ar como se
              fosse um pássaro<br>E se acabou no chão feito um pacote flácido<br>
              Agonizou no meio do passeio público<br>Morreu na contramão,
              atrapalhando o tráfego<br><br>Amou daquela vez como se fosse o último<br>
              Beijou sua mulher como se fosse a única<br>E cada filho seu como se
              fosse o pródigo<br>E atravessou a rua com seu passo bêbado<br>Subiu
              a construção como se fosse sólido<br>Ergueu no patamar quatro
              paredes mágicas<br>Tijolo com tijolo num desenho lógico<br>Seus
              olhos embotados de cimento e tráfego<br>Sentou pra descansar como
              se fosse um príncipe<br>Comeu feijão com arroz como se fosse o
              máximo<br>Bebeu e soluçou como se fosse máquina<br>Dançou e
              gargalhou como se fosse o próximo<br>E tropeçou no céu como se
              ouvisse música<br>E flutuou no ar como se fosse sábado<br>E se
              acabou no chão feito um pacote tímido<br>Agonizou no meio do
              passeio náufrago<br>Morreu na contramão atrapalhando o público<br><br>
              Amou daquela vez como se fosse máquina<br>Beijou sua mulher como se
              fosse lógico<br>Ergueu no patamar quatro paredes flácidas<br>Sentou
              pra descansar como se fosse um pássaro<br>E flutuou no ar como se
              fosse um príncipe<br>E se acabou no chão feito um pacote bêbado<br>
              Morreu na contramão atrapalhando o sábado<br><br>Por esse pão pra
              comer, por esse chão pra dormir<br>A certidão pra nascer e a
              concessão pra sorrir<br>Por me deixar respirar, por me deixar
              existir<br>Deus lhe pague<br>Pela cachaça de graça que a gente tem
              que engolir<br>Pela fumaça, desgraça, que a gente tem que tossir<br>
              Pelos andaimes pingentes que a gente tem que cair<br>Deus lhe pague
             <br>Pela mulher carpideira pra nos louvar e cuspir<br>E pelas moscas
              bicheiras a nos beijar e cobrir<br>E pela paz derradeira que enfim
              vai nos redimir<br>Deus lhe pague
            </i>
          </p>
          Composição: Chico Buarque.
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.eye {
  font-size: 1.6rem;
  font-weight: 800;
}

.letra-original {
  width: 100%;
}

p {
  font-size: 1.3rem;
}
</style>
