# Criando Classes em JavaScript

Em JavaScript, você pode criar classes usando a sintaxe de classe introduzida no ECMAScript 6 (ES6). Aqui está um exemplo simples de como criar uma classe em JavaScript:



![Alt text](image.png)

Aqui estão os principais componentes do código acima:**

**class Pessoa { ... }:** Define a classe chamada Pessoa.

**constructor(nome, idade) { ... }:** O construtor é um método especial que é executado quando um objeto da classe é instanciado. Ele é usado para inicializar as propriedades do objeto. Neste exemplo, nome e idade são parâmetros do construtor, e eles são usados para definir as propriedades da instância.

**saudacao() { ... }:** Este é um método da classe que pode ser chamado em objetos da classe. Ele simplesmente imprime uma mensagem de saudação usando as propriedades da instância.

**const pessoa1 = new Pessoa('João', 30);:** Isso cria uma instância da classe Pessoa chamada pessoa1 com os valores 'João' e 30 passados como argumentos para o construtor.

**pessoa1.saudacao();:** Isso chama o método saudacao no objeto pessoa1, que exibe a mensagem de saudação no console.

Você pode criar várias instâncias da classe Pessoa, cada uma com seus próprios valores para nome e `idade. Isso demonstra o conceito de encapsulamento, onde os dados e o comportamento relacionados estão agrupados em um único objeto (uma instância da classe).

1- **Declarando uma Classe:**

Para declarar uma classe em JavaScript, você utiliza a palavra-chave class, seguida pelo nome da classe. Aqui está um exemplo de como declarar uma classe chamada Pessoa:

![image](https://github.com/Midssouza/ConteudosMesttra/assets/60756132/ccd03783-897e-4140-a8dc-a952e0de336e)


2- **Construtores e Propriedades:**

O construtor é um método especial dentro de uma classe que é chamado quando um objeto da classe é instanciado. É usado para inicializar as propriedades do objeto. No exemplo abaixo, a classe Pessoa tem um construtor que aceita dois parâmetros, nome e idade, que são usados para inicializar as propriedades nome e idade do objeto:

![image](https://github.com/Midssouza/ConteudosMesttra/assets/60756132/896fba31-dd30-4b15-a233-a8d84c87213c)


3- **Métodos de Classe:**

Métodos de classe são funções definidas dentro da classe. Eles descrevem o comportamento dos objetos dessa classe. No exemplo abaixo, a classe Pessoa possui um método de classe chamado saudacao:

![image](https://github.com/Midssouza/ConteudosMesttra/assets/60756132/46b4de3e-2b69-4a25-bd0a-f917cee383c0)

Exemplo :

Classe simples em JavaScript que utiliza um construtor e um método de classe:

![image](https://github.com/Midssouza/ConteudosMesttra/assets/60756132/ec89ebd1-88bb-4aa8-9108-1184d9bc1125)

Neste exemplo, a classe Animal possui um construtor que aceita dois parâmetros, nome e tipo, e um método de classe chamado som. Você pode criar objetos a partir dessa classe e chamar o método som para cada objeto, que irá exibir uma mensagem específica para aquele animal.









