import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        alt="workflow"
        src={'/workflow.gif'}
        width={700}
        height={700}
        className="absolute right-10 top-1/2 transform -translate-y-1/2  opacity-70 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20  text-center text-white px-4 max-w-2xl bg-black p-8 rounded-4xl border-amber-50 border-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p className="text-lg md:text-xl">
          {/* Essa é a documentação do nosso projeto. Mais do que requisitos e análises, aqui tem ideias, aprendizados, erros e acertos de um time de estudantes que quer criar algo que faça sentido */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro totam dolorem voluptate laboriosam ducimus esse. Natus saepe nesciunt neque dolorum provident vero cupiditate, fugit soluta officia repellendus aspernatur eligendi?
        </p>
        <a
          href='/00-introducao'
          className="cursor-pointer"
        >
          Ver documento
        </a>
      </div>
    </section>
  );
}
