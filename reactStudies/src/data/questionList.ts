import { Question } from "@/types/Question";

export const questionList: Question[] = [
    {
        question: 'Qual das opções abaixo representa corretamente o funcionamento do protocolo TCP?',
        options: [
          'Protocolo sem conexão, orientado à velocidade',
          'Protocolo orientado à conexão, garante entrega dos dados',
          'Protocolo multicast de tempo real',
          'Protocolo utilizado exclusivamente para e-mails'
        ],
        answer: 1
      },
      {
        question: 'Em estruturas de dados, qual é a complexidade de tempo da busca binária em um array ordenado?',
        options: [
          'O(n)',
          'O(log n)',
          'O(n²)',
          'O(1)'
        ],
        answer: 1
      },
      {
        question: 'No contexto de sistemas operacionais, o que é "inversão de prioridade"?',
        options: [
          'Quando um processo de menor prioridade é promovido sem motivo',
          'Quando processos com prioridade baixa impedem a execução de processos com prioridade mais alta',
          'Quando o escalonador ignora todas as prioridades',
          'Quando a prioridade de todos os processos é resetada periodicamente'
        ],
        answer: 1
      },
      {
        question: 'Na programação orientada a objetos, o que é o princípio do polimorfismo?',
        options: [
          'A capacidade de herdar atributos de várias classes ao mesmo tempo',
          'A capacidade de um método ter múltiplas implementações dependendo do objeto que o invoca',
          'A definição de métodos privados em subclasses',
          'A restrição da sobrescrita de métodos'
        ],
        answer: 1
      },
      {
        question: 'O que o comando `git rebase` faz?',
        options: [
          'Funde dois branches criando um novo commit de merge',
          'Aplica as mudanças de um branch sobre outro reescrevendo o histórico',
          'Desfaz o último commit sem perder as mudanças',
          'Cria um novo repositório a partir de um branch existente'
        ],
        answer: 1
      },
      {
        question: 'Qual técnica de segurança previne ataques de injeção SQL?',
        options: [
          'Criptografia dos dados',
          'Uso de comandos `DELETE` com `WHERE`',
          'Validação por regex',
          'Uso de prepared statements (declarações preparadas)'
        ],
        answer: 3
      },
      {
        question: 'Em redes de computadores, qual a função do protocolo ARP?',
        options: [
          'Converter endereços IP em endereços MAC',
          'Traduzir nomes de domínio para IPs',
          'Estabelecer conexões confiáveis entre hosts',
          'Gerenciar sessões de login em servidores remotos'
        ],
        answer: 0
      },
      {
        question: 'Qual dos algoritmos de ordenação possui complexidade média de O(n log n) e é estável?',
        options: [
          'Quick Sort',
          'Merge Sort',
          'Heap Sort',
          'Selection Sort'
        ],
        answer: 1
      },
      {
        question: 'Em bancos de dados, o que caracteriza uma anomalia de atualização?',
        options: [
          'Atualizações simultâneas com deadlock',
          'Redundância de dados que causa inconsistência após alterações',
          'Falta de índice em colunas importantes',
          'Exclusão de tabelas relacionadas por erro'
        ],
        answer: 1
      },
      {
        question: 'Na arquitetura de computadores, qual é a principal função da unidade de controle (UC)?',
        options: [
          'Executar operações aritméticas e lógicas',
          'Gerenciar a memória principal',
          'Interpretar instruções e coordenar as operações da CPU',
          'Controlar dispositivos de entrada e saída'
        ],
        answer: 2
      }
];