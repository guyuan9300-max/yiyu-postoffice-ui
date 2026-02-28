import type { Agent } from '../lib/agents';
import './pixelWorld.css';

type Props = {
  agents: Agent[];
};

export function PixelWorld({ agents }: Props) {
  return (
    <section className="pw-card" aria-label="像素世界">
      <header className="pw-header">
        <div>
          <div className="pw-title">像素世界（演示）</div>
          <div className="pw-sub">小人会根据状态移动；消息会以气泡/信封形式出现（下一步接入邮局 API）。</div>
        </div>
        <div className="pw-badge">本地/线上同一地址访问</div>
      </header>

      <div className="pw-stage">
        {agents.map((a, idx) => (
          <div
            key={a.id}
            className={`pw-agent pw-agent-${idx % 3}`}
            title={`${a.nameZh}（${a.status}）`}
          >
            <div className="pw-sprite" />
            <div className="pw-name">{a.nameZh}</div>
            <div className={`pw-status pw-status-${a.status}`}>{a.status}</div>
          </div>
        ))}

        <div className="pw-bubble pw-bubble-1">
          <div className="pw-bubble-title">庆华</div>
          <div className="pw-bubble-body">我在制定策略框架，稍后发你草案。</div>
        </div>

        <div className="pw-bubble pw-bubble-2">
          <div className="pw-bubble-title">大周</div>
          <div className="pw-bubble-body">我在收集资料，已整理 5 条来源。</div>
        </div>

        <div className="pw-envelope" title="任务流转（演示）" />
      </div>
    </section>
  );
}
