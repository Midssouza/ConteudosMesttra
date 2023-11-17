Herança em JavaScript permite que você crie uma nova classe (classe filha) com base em uma classe existente (classe pai). 
Isso permite a reutilização de código e a criação de uma hierarquia de classes.
Como estender uma classe, chamar o construtor da classe pai (super) e adicionar métodos à classe filha:

**1-Extendendo Classes:**

Para criar uma classe filha, você usa a palavra-chave extends seguida do nome da classe pai. 

Exemplo de como estender a classe Animal para criar classes filhas Cachorro e Gato:

  ![image](https://github.com/Midssouza/ConteudosMesttra/assets/60756132/f5a4e5b6-fa45-46da-b2c3-4a6b1d8668e1)

**2-Chamando o Construtor da Classe Pai (super):

Para inicializar a classe filha, você deve chamar o construtor da classe pai usando super(). Isso garante que as propriedades da classe pai sejam inicializadas corretamente. Aqui está como fazer isso na classe Cachorro:
