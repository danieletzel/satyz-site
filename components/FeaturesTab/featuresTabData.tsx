// ✅ featuresTabData.tsx (COMPLETO E REESCRITO)
import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Automatize processos com inteligência real",
    desc1:
      "Delegue tarefas de atendimento, vendas ou suporte para IAs treinadas que operam 24/7 com precisão cirúrgica.",
    desc2:
      "Reduza custos operacionais, elimine gargalos e libere seu time para focar no que realmente importa.",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Crie, treine e escale AI Workers sob demanda",
    desc1:
      "A plataforma da Satyz permite que você crie colaboradores de IA personalizados para cada desafio do seu negócio.",
    desc2:
      "Eles aprendem com seu time, seguem seus processos e escalam sob demanda sem custos adicionais.",
    image: "/images/features/features-light-02.png",
    imageDark: "/images/features/features-dark-02.svg",
  },
  {
    id: "tabThree",
    title: "Resultados mensuráveis em dias, não meses",
    desc1:
      "Lançamento rápido. Impacto imediato. Com nossos AI Workers, você valida hipóteses e ganha eficiência em tempo recorde.",
    desc2:
      "Integrado com seu stack atual, sem fricção, sem necessidade de reestruturar o que já funciona.",
    image: "/images/features/features-light-03.png",
    imageDark: "/images/features/features-dark-03.svg",
  },
];

export default featuresTabData;