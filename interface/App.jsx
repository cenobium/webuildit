import { useState } from 'react';
import ElasticMesh from './ElasticMesh.tsx';
import HoldButton from './HoldButton';
import BranchedMenu from './BranchedMenu';
import Particles from './Particles';

const menuItems = [
  {
    label: 'Explore',
    children: [
      { value: 'overview', label: 'Overview' },
      { value: 'projects', label: 'Projects' },
      { value: 'experiments', label: 'Experiments' }
    ]
  },
  {
    label: 'Connect',
    children: [
      { value: 'github', label: 'GitHub' },
      { value: 'contact', label: 'Contact' }
    ]
  }
];

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="interface">
      <div className="particles-layer" aria-hidden="true">
        <Particles
          particleCount={180}
          particleSpread={10}
          speed={0.14}
          particleColors={['#ffffff']}
          particleBaseSize={72}
          sizeRandomness={0.9}
          glow={0.42}
          twinkle={0.48}
          connections
          connectionDistance={112}
          moveParticlesOnHover
          hoverEffect="repel"
          particleHoverFactor={0.85}
          hoverRadius={150}
          clickBurst
          intro
          opacity={0.48}
        />
      </div>
      <section className={'hero' + (entered ? ' hero--entered' : '')} aria-label="Script as you go">
        <div className={'menu-wrap' + (entered ? ' menu-wrap--visible' : '')} aria-hidden={!entered}>
          {entered ? (
            <BranchedMenu
              items={menuItems}
              defaultOpen={0}
              color="#ededed"
              accentColor="#ffffff"
              lineColor="#424242"
              width={250}
              rowHeight={38}
              indent={46}
              fontSize={13}
            />
          ) : null}
        </div>
        <div className="hero-content">
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
          {!entered ? (
            <div className="entry-wrap">
              <HoldButton
                holdTime={1600}
                doneLabel="entered"
                onHold={() => setEntered(true)}
                aria-label="Enter"
              >
                enter
              </HoldButton>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
