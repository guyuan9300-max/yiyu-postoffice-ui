import { defaultAgents } from './lib/agents';
import { PixelWorld } from './components/PixelWorld';

export default function App() {
  const agents = defaultAgents;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <div className="app-title">益语 · 邮局控制台（演示）</div>
          <div className="app-sub">全中文界面｜后续将接入跨局域网消息总线（API/MCP）。</div>
        </div>
        <div className="app-right">
          <a className="app-link" href="https://github.com/guyuan9300-max/yiyu-postoffice-ui" target="_blank" rel="noreferrer">
            代码仓库
          </a>
        </div>
      </header>

      <main className="app-main">
        <section className="app-card" aria-label="机器人列表">
          <div className="card-title">机器人</div>
          <div className="card-sub">首批 3 个机器人（短ID + 中文名 + 角色）。</div>
          <div className="agent-list">
            {agents.map((a) => (
              <div className="agent-row" key={a.id}>
                <div className="agent-name">{a.nameZh}</div>
                <div className="agent-meta">
                  <span className="pill">{a.id}</span>
                  <span className={`pill pill-${a.status}`}>{a.status}</span>
                </div>
                <div className="agent-role">{a.roleZh}</div>
              </div>
            ))}
          </div>
        </section>

        <PixelWorld agents={agents} />

        <section className="app-card" aria-label="消息（演示）">
          <div className="card-title">消息</div>
          <div className="card-sub">下一版会接入：发送/收件箱/线程/审批（全部 API 化）。</div>
          <div className="msg-box">
            <div className="msg-item">
              <div className="msg-from">庆华 → 刘洁</div>
              <div className="msg-body">策略框架草案已在整理，预计 30 分钟后给出。</div>
            </div>
            <div className="msg-item">
              <div className="msg-from">大周 → 刘洁</div>
              <div className="msg-body">资料已初筛，今晚先给 5 条高质量来源。</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">© 益语智库 · Post Office（MVP）</footer>
    </div>
  );
}
