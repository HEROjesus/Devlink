# 📚 Aprendizados: Props e Estados no React

## 📌 Introdução
Este repositório tem como objetivo documentar os conceitos fundamentais de **props** e **estados** no React, explicando suas diferenças e como são utilizados para construir interfaces dinâmicas e reutilizáveis.

## 🔹 Props (Propriedades)
As **props** são imutáveis e permitem a passagem de dados entre componentes. Elas são definidas pelo componente pai e não podem ser alteradas pelo componente filho.

### Exemplo de uso de Props:
```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

export default function App() {
  return <Saudacao nome="Maria" />;
}
```

## 🔹 Estados (State)
O **state** é mutável e permite que um componente gerencie e atualize seus próprios dados internos. Quando o estado muda, o React re-renderiza o componente automaticamente.

### Exemplo de uso de State:
```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

## 📌 Diferenças entre Props e Estado
| Característica | Props | Estado |
|---------------|-------|--------|
| Mutabilidade  | Imutável | Mutável |
| Quem define?  | Componente pai | O próprio componente |
| Atualiza o componente? | Não | Sim |

## 🎯 Conclusão
Compreender a diferença entre **props** e **estado** é essencial para desenvolver aplicações React eficientes. Enquanto as **props** são usadas para passar dados entre componentes, o **estado** é usado para armazenar e gerenciar informações dinâmicas dentro de um componente.

🚀 Continue explorando e praticando para aprimorar seus conhecimentos no React!

