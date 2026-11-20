import ElasticMesh from './ElasticMesh.tsx';
import HoldButton from './HoldButton';

export default function App() {
  return (
    <main className="interface">
      <section className="hero" aria-label="Script as you go">
        <div className="mesh-wrap">
          <ElasticMesh
            text="script as you go"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
            fontWeight={650}
            color="#e8e8e8"
            material="jelly"
            inflate={1.15}
            stiffness={0.48}
            wobble={0.72}
            grabRadius={105}
            stretch={0.72}
            press={0.62}
            shadow={0.32}
            intro
            theme="dark"
          />
        </div>
        <div className="entry-wrap">
          <HoldButton
            holdTime={1600}
            doneLabel="entered"
            onHold={() => {}}
            aria-label="Enter"
          >
            enter
          </HoldButton>
        </div>
      </section>
    </main>
  );
}
