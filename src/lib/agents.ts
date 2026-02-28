export type Agent = {
  id: string; // 短 ID，例如 yy-dazhou
  nameZh: string;
  roleZh: string;
  status: '在线' | '忙碌' | '离线';
};

export const defaultAgents: Agent[] = [
  { id: 'yy-dazhou', nameZh: '大周', roleZh: '资料收集、文案撰写', status: '在线' },
  { id: 'yy-qinghua', nameZh: '庆华', roleZh: '战略策划、策略制定', status: '忙碌' },
  { id: 'yy-liujie', nameZh: '刘洁', roleZh: '项目管理、创新', status: '在线' },
];
