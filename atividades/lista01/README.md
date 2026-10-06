1. Uma linguagem de tipagem estática é aquela em que os tipos das variáveis são conhecidos e verificados antes da execução do programa, geralmente durante a compilação. Por exemplo, em Java, uma variável declarada como int não pode receber uma String, pois o compilador identifica o erro antes da execução.

---

2. A tipagem estática pode melhorar a performance, pois o compilador já conhece os tipos dos dados e consegue otimizar o código antes da execução. Também aumenta a segurança e a confiabilidade, pois muitos erros relacionados aos tipos são identificados antes que o programa seja executado.

---

3. Na tipagem dinâmica, os tipos das variáveis são verificados durante a execução do programa. Uma variável pode receber diferentes tipos de dados ao longo da execução. O principal desafio de performance é que o programa precisa realizar verificações durante a execução, podendo gerar um custo adicional. Além disso, alguns erros só aparecem quando determinada parte do código é executada.

---

4. A tipagem forte possui regras mais rígidas para a utilização e conversão entre diferentes tipos de dados. Já a tipagem fraca permite mais conversões automáticas entre tipos. Por exemplo, no JavaScript, "10" + 5 resulta em "105", pois o número é convertido automaticamente para texto nesse contexto.

---

5. Linguagens híbridas podem oferecer recursos de tipagem estática e dinâmica, permitindo diferentes formas de trabalhar com os tipos. A inferência de tipos permite que o compilador identifique automaticamente o tipo de uma variável sem que o programador precise informá-lo explicitamente. Por exemplo, em Kotlin, val idade = 28 permite que o compilador identifique que idade é um número inteiro.

---

6. O JavaScript possui tipagem dinâmica, ou seja, o tipo de uma variável é determinado durante a execução e pode mudar ao longo do programa. Por exemplo, uma variável pode inicialmente armazenar um número e posteriormente receber um texto. O JavaScript também realiza conversões automáticas de tipos em algumas operações. Por isso, é geralmente considerado uma linguagem de tipagem dinâmica e fraca, embora possua regras específicas para conversão e coerção de tipos.