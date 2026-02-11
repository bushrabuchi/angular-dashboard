export interface Widget {
  id: string;
  title: string;
  type: 'chart' | 'stats' | 'table' | 'custom';
  position: { x: number; y: number };
  size: { width: number; height: number };
  data?: any;
  config?: any;
}

export interface DashboardLayout {
  widgets: Widget[];
}
