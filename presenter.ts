type PresenterState = {
  currentIndex: number;
  title: string;
  notes: string;
};

const root = document.getElementById('presenter-root') as HTMLElement;
let running = false;
let elapsedMs = 0;
let timer: number | null = null;
const channel = new BroadcastChannel('pfe-slides-sync');

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function render(state: PresenterState) {
  root.innerHTML = `
    <div class="presenter-card">
      <div class="eyebrow">Mode présentateur</div>
      <div class="presenter-title">${state.title}</div>
      <div class="presenter-timer">${formatTime(elapsedMs)}</div>
      <div class="presenter-actions">
        <button id="toggle-timer">${running ? 'Pause' : 'Start'}</button>
        <button id="reset-timer">Reset</button>
      </div>
      <div>
        <div class="eyebrow">Notes privées</div>
        <div class="presenter-notes">${state.notes}</div>
      </div>
      <div>
        <div class="eyebrow">Titre de la slide suivante</div>
        <div class="presenter-notes">${state.currentIndex < 20 ? 'Suivant : ' + (state.currentIndex + 2) : 'Fin'}</div>
      </div>
    </div>
  `;
  const toggle = document.getElementById('toggle-timer') as HTMLButtonElement;
  const reset = document.getElementById('reset-timer') as HTMLButtonElement;
  toggle.onclick = () => {
    running = !running;
    if (running) {
      timer = window.setInterval(() => {
        elapsedMs += 1000;
        render(state);
      }, 1000);
    } else if (timer) {
      window.clearInterval(timer);
      timer = null;
      render(state);
    }
  };
  reset.onclick = () => {
    elapsedMs = 0;
    if (running && timer) {
      window.clearInterval(timer);
      timer = null;
      running = false;
    }
    render(state);
  };
}

channel.addEventListener('message', (event) => {
  const data = event.data as { type?: string; index?: number; title?: string; notes?: string };
  if (data.type === 'SLIDE_CHANGE') {
    render({ currentIndex: data.index ?? 0, title: data.title ?? 'Slide', notes: data.notes ?? '' });
  }
});

render({ currentIndex: 0, title: 'Slide 1', notes: 'Prêt à présenter' });
