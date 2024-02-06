import clock from "../assets/projects/Clock.png";
import cookinup from "../assets/projects/CookinUp.png";
import organo from "../assets/projects/Organo.png";
import portfolio from "../assets/projects/Porfolio.png";
import virtualspace from "../assets/projects/Virtual-Space.png";
import tracker from "../assets/projects/Tracker.png";

const projects = [
  {
    title: "Cookin'Up",
    description:
      "Desenvolvimento de um gerenciador de ingredientes e receitas em Vue abordando conceitos de gerenciamento de ciclo de vida de componentes",
    demo: "https://cookin-up-two.vercel.app",
    repository: "https://github.com/viniciussis/Cookin_Up",
    stack: ["vue", "typescript"],
    img: cookinup,
  },
  {
    title: "My Tracker",
    description: "Um cronômetro de tarefas em Vue3",
    demo: "https://my-tracker-three.vercel.app",
    repository: "https://github.com/viniciussis/My_Tracker.git",
    stack: ["vue", "typescript"],
    img: tracker,
  },
  {
    title: "Virtual Space",
    description:
      "Desenvolvimento de um mini blog em React, com ênfase em conceitos como React Router, rotas dinâmicas, Single Page Applications (SPAs), e integração de bibliotecas como react-markdown e react-icons.",
    demo: "https://virtual-space-three.vercel.app",
    repository: "https://github.com/viniciussis/Virtual_Space.git",
    stack: ["JavaScript", "ReactJS"],
    img: virtualspace,
  },
  {
    title: "My Clock",
    description:
      "Um cronômetro de tarefas em React/TypeScript, que cria card de tarefas dinâmicamente e um cronômetro para o tempo de execução dessas tarefas",
    demo: "https://my-clock-five.vercel.app/",
    repository: "https://github.com/viniciussis/My_Clock.git",
    stack: ["TypeScript", "ReactJS"],
    img: clock,
  },
  {
    title: "Organo",
    description:
      "Plataforma para criar e organizar dinamicamente times ou equipes, adaptando-se às necessidades específicas do usuário.",
    demo: "https://organo-project-jet.vercel.app/",
    repository: "https://github.com/viniciussis/Organo_Project.git",
    stack: ["JavaScript", "ReactJS"],
    img: organo,
  },
  {
    title: "Portfolio v1.0",
    description: "Primeira versão do meu portfolio feita em React.js",
    demo: "",
    repository: "",
    stack: ["JavaScript", "ReactJS"],
    img: portfolio,
  },
];

export default projects;
