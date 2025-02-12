import ClassCard from './components/classCard';
import turmas from "./mocks/turmas.json";

function App() {

  return (
    <>
      <header>
        <a href="/">Turmas</a>
      </header>
      <main>
        <h1>Turmas</h1>
        <section>
          {
            turmas.map(turma => (
              <ClassCard key={turma.id} turma={turma} />
            ))
          }
        </section>
      </main>
      <h1>Olá Mundo!</h1>
    </>
  )
}

export default App
